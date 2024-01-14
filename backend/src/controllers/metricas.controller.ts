import {authenticate} from '@loopback/authentication';
import {
  Filter,
  repository
} from '@loopback/repository';
import {
  get,
  param,
  response
} from '@loopback/rest';

import {MetricasInicio} from '../interfaces/MetricasInicio';
import {MetricasTarea} from '../interfaces/MetricasTarea';
import {Sitio, Snapshot, Tarea} from '../models';
import {
  SitioRepository,
  SnapshotRepository,
  TareaRepository
} from '../repositories';

export class MetricasController {
  constructor(
    @repository(SitioRepository) public sitioRepository: SitioRepository,
    @repository(TareaRepository) public tareaRepository: TareaRepository,
    @repository(SnapshotRepository) public snapshotRepository: SnapshotRepository
  ) { }

  @authenticate({strategy: 'auth0-jwt'})
  @get('/metricas/')
  @response(200, {
    description: 'Metricas sobre sitios, tareas y snapshots registrados',
  })
  async metricasInicio(
    @param.query.string('userEmail') userEmail?: string,
    @param.filter(Sitio) filter?: Filter<Sitio>,
  ): Promise<MetricasInicio> {

    let sitios: Sitio[] = [];

    if (userEmail) {
      sitios = await this.sitioRepository.find({
        ...filter,
        where: {userEmail},
      });
    }

    const whereClause = userEmail ? {userEmail} : {};
    const countSitios = await this.sitioRepository.count(whereClause);

    let countTareas = 0;
    const tareas: Tarea[] = [];

    for (const sitio of sitios) {
      const tareasDelSitio = await this.tareaRepository.find({
        where: {sitioId: sitio.id},
      });

      tareas.push(...tareasDelSitio);

      // cantidad de tareas para este sitio (loop)
      const contador = await this.tareaRepository.count({
        sitioId: sitio.id,
      });

      countTareas += contador.count;
    }

    let countSnapshots = 0
    for (const tarea of tareas) {
      const contador = await this.snapshotRepository.count({
        tareaId: tarea.id
      });

      countSnapshots += contador.count;
    }

    return {sitios: countSitios.count, tareas: countTareas, snapshots: countSnapshots}
  }

  @authenticate({strategy: 'auth0-jwt'})
  @get('/metricas/sitio/{sitioId}')
  @response(200, {
    description: 'Metricas y datos de un sitio especifico',
  })
  async metricasTarea(
    @param.path.string('sitioId') sitioId: string,
  ): Promise<MetricasTarea> {

    // Cantidad de tareas asociadas al sitio
    const tareasCount = await this.tareaRepository.count({
      sitioId: sitioId,
    });

    let snapshotCount = 0;

    // Tareas asociadas al sitio
    const tareas: Tarea[] = await this.tareaRepository.find({
      where: {sitioId: sitioId},
    });

    // Cantidad total de snapshots asociados a esas tareas
    for (const tarea of tareas) {
      const contador = await this.snapshotRepository.count({
        tareaId: tarea.id,
      });

      snapshotCount += contador.count;
    }

    return {tareas: tareasCount.count, snapshots: snapshotCount};
  }

  @authenticate({strategy: 'auth0-jwt'})
  @get('/metricas/sitio/{sitioId}/rango')
  @response(200, {
    description: 'Metricas y datos de un sitio especifico',
  })
  async metricasTareaEnRango(
    @param.path.string('sitioId') sitioId: string,
    @param.query.string('fechaInicio') fechaInicio: string,
    @param.query.string('fechaFin') fechaFin: string,
  ): Promise<MetricasTarea> {

    const filter: Filter<Tarea> = {
      where: {
        sitioId: sitioId,
        timestamp: {
          between: [fechaInicio, fechaFin],
        },
      },
    };

    const tareasCount = (await this.tareaRepository.find(filter)).length;

    let snapshotCount = 0;

    // Tareas asociadas al sitio
    const tareas: Tarea[] = await this.tareaRepository.find(filter);

    for (const tarea of tareas) {
      const contador = await this.snapshotRepository.count({
        tareaId: tarea.id,
        timestamp: {
          between: [fechaInicio, fechaFin],
        },
      });

      snapshotCount += contador.count;
    }

    return {tareas: tareasCount, snapshots: snapshotCount};
  }

  @authenticate({strategy: 'auth0-jwt'})
  @get('/metricas/sitio/{sitioId}/documentos/count')
  @response(200, {
    description: 'Cantidad de documentos de un sitio especifico',
  })
  async obtenerCantidadDocumentos(
    @param.path.string('sitioId') sitioId: string,
  ): Promise<number> {
    const tareas: Tarea[] = await this.tareaRepository.find({
      where: {sitioId: sitioId},
    });

    const tareaIds = tareas.map(t => t.id);

    let documentosCount = 0;

    for (const tareaId of tareaIds) {
      const snapshots: Snapshot[] = await this.snapshotRepository.find({
        where: {tareaId: tareaId},
      });

      snapshots.forEach(snapshot => {
        snapshot.documentos?.forEach(nivel => {
          documentosCount += nivel.resultados.length;
        });
      });
    }

    return documentosCount;
  }

}
