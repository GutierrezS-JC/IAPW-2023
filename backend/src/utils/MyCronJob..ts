/* eslint-disable @typescript-eslint/no-misused-promises */
import {CronJob, cronJob} from '@loopback/cron';
import {repository} from '@loopback/repository';
import {Sitio, Tarea} from '../models';
import {SitioRepository, TareaRepository} from '../repositories';
import {runProcess} from './cheerioHelper';

@cronJob()
export class MyCronJob extends CronJob {
  // Para guardar las instancias de los jobs
  private runningJobs: {[sitioId: string]: CronJob} = {};
  // Por las dudas dejamos constancia que ya se arreglaron los jobs pendientes
  // de correccion en la BD aunque no parece ser necesario
  private alreadyFixed: boolean = false;

  constructor(
    @repository(SitioRepository) public sitioRepository: SitioRepository,
    @repository(TareaRepository) public tareaRepository: TareaRepository,
  ) {
    super({
      name: 'job-B',
      onTick: async () => {
        // Busco los sitios en la BD (sitioRepository)
        const sitios: Sitio[] = await sitioRepository.find();

        sitios.forEach(async sitio => {
          // Seteo la frecuencia establecida en el sitio obtenido de la BD
          const cronTime = `*/${sitio.frecuencia} * * * * `;

          if (this.runningJobs[sitio.getId()]) {
            // El JOB ya se encuentra en ejecucion
            await this.verificarJobInterno(sitio, this.runningJobs[sitio.getId()]);
          }
          else {
            // No se encuentra en ejecucion
            // Agarro el total de tareas para la definicion del nombre del JOB
            const totalTareas = (await this.sitioRepository.findTareas(sitio.getId())).length;

            // Nombre de nueva tarea que sera ademas el nombre del job
            const nombreTarea = `Tarea-${sitio.nombre}-${totalTareas + 1}`;
            // Nueva tarea (representa al job) creada
            const nuevaTarea = await this.crearNuevaTarea(nombreTarea, sitio.getId());

            // Creamos un job por cada sitio dentro del job principal
            const sitioJob = new CronJob({
              cronTime: cronTime,
              name: nombreTarea,
              onTick: async () => {
                // Conjunto para guardar los urls (http) que se visitaron
                const urlsHttp = new Set<string>();

                // INICIO PROCESAMIENTO DEL SITIO
                try {
                  const baseUrl = sitio.url;
                  // await processWebsite(sitio, nuevaTarea, urlsHttp, baseUrl)
                  await runProcess(sitio, nuevaTarea, urlsHttp, baseUrl)
                  console.log(`Process has been completed for: ${sitio.nombre}`);

                  // TERMINAMOS EL PROCESAMIENTO
                  // Por lo tanto vaciamos la lista de sitios visitados (internos)
                  urlsHttp.clear()
                }
                catch (error) {
                  console.log(error)
                  // OCURRE UN ERROR
                  // Debemos generar una nueva instancia del error para DB
                  // await createError(sitio, error);
                }
              },
              start: true,
              async onComplete() {
                await tareaRepository.updateById(nuevaTarea.id, {estado: 'Finalizado'});
                console.log(`${this.name} has been stopped`)
              },
            })
            // Guardo el nuevo job creado en el arreglo previamente definido para
            // tener el registro y posibilidad de detenerlos posteriormente
            this.runningJobs[sitio.getId()] = sitioJob;
          }
        })
      },
      cronTime: '*/10 * * * * *',
      start: true,
    });

    // Si por algun motivo se detiene el servidor, los jobs (si se estaban ejecutando)
    // nunca van a cambiar de estado y quedaran 'En proceso' hasta el fin de los tiempos.
    // Es por esto que antes de ejecutar el cronJob se llama a este metodo
    // encargado de obtener las tareas con dicho estado erroneo y las actualiza
    // Este metodo solo se ejecuta una vez :)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.actualizarEstadoEnTareasInterrumpidas();

  }

  // Antes de que se dispare el cronJob
  async actualizarEstadoEnTareasInterrumpidas() {
    try {
      if (!this.alreadyFixed) {
        const tareasEnProceso = await this.tareaRepository.find({
          where: {estado: 'En proceso'},
        });

        for (const tarea of tareasEnProceso) {
          await this.actualizar(tarea);
        }

        this.alreadyFixed = true;
        console.log('All interrupted jobs have been updated')
      }
    }
    catch (error) {
      console.log('Error when executing update on interrupted jobs')
    }
  }

  // Se realiza la actualizacion del estado en la tarea
  async actualizar(tarea: Tarea) {
    await this.tareaRepository.updateById(tarea.id, {estado: 'Interrumpido'});
  }

  async verificarJobInterno(sitio: Sitio, tarea: CronJob) {
    // Tareas del sitio
    const tareas = await this.sitioRepository.findTareas(sitio.getId());
    const tareaMasReciente = this.ultimaTareaIngresada(tareas);
    const ahora = new Date();
    if (tareaMasReciente) {
      // El limite por el que comparamos (media hora)
      const limiteDeTiempoEnMinutos = 3;
      // El timestamp obtenido en la ultima tarea registrada
      const timestampRegistroJob = new Date(tareaMasReciente.timestamp)
      // Calcula la diferencia en milisegundos entre las dos fechas
      const diferenciaEnMilisegundos = ahora.getTime() - timestampRegistroJob.getTime();
      // Convierte la diferencia de milisegundos a minutos
      const diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);

      // Comprobamos si efectivamente paso al menos media hora desde el registro del JOB (Tarea)
      const haPasadoMediaHora = diferenciaEnMinutos >= limiteDeTiempoEnMinutos;

      // Si paso el tiempo establecido entonces detenemos el job y lo eliminamos
      // del arreglo de runningJobs para que pueda volver a registrar otro
      if (haPasadoMediaHora) {
        console.log(`Time is up (${limiteDeTiempoEnMinutos} minutes)`);
        tarea.stop();

        // Busca el índice del trabajo en el array runningJobs
        const index = Object.keys(this.runningJobs).findIndex(key => key === sitio.getId());
        if (index !== -1) {
          // Elimina el trabajo del array runningJobs
          delete this.runningJobs[sitio.getId()];
        } else {
          console.log('No se encontro el trabajo en runningJobs.');
        }
      }
    }
  }

  ultimaTareaIngresada = (tareas: Tarea[]) => {
    if (tareas.length === 0) {
      return null;
    }

    // Ordena las tareas por timestamp en orden descendente (de la más reciente a la más antigua)
    const tareasOrdenadas = tareas.sort((a, b) =>
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    // La primera tarea en el arreglo ordenado es la más reciente
    return tareasOrdenadas[0];
  }

  async crearNuevaTarea(nombreTarea: string, sitioId: string) {
    const nuevaTarea = new Tarea({
      timestamp: new Date().toString(),
      nombre: nombreTarea,
      estado: "En proceso",
      sitioId: sitioId
    });
    return this.tareaRepository.create(nuevaTarea);
  }
}


