import {repository} from '@loopback/repository';
import {get, param, response} from '@loopback/rest';
import {Documento} from '../interfaces/Documento';
import {SitioRepository, SnapshotRepository, TareaRepository} from '../repositories';

export class BusquedaController {
  constructor(
    @repository(SitioRepository) public sitioRepository: SitioRepository,
    @repository(TareaRepository) public tareaRepository: TareaRepository,
    @repository(SnapshotRepository) public snapshotRepository: SnapshotRepository,
  ) { }

  @get('/tareas/{id}/consulta')
  @response(200, {
    description: 'Array of documents from Snapshot which belongs to a specific Tarea',
    example: [
      {title: 'string', price: 'string', description: 'string'},
    ]
  })
  async consulta(
    @param.path.string('id') id: string,
    @param.query.string('q') searchString?: string,
  ): Promise<Documento[]> {

    // Si searchString (q) esta vacio entonces no hacemos la busqueda
    // Se completa la verificacion en el frontend para evitar que este caso
    // ocurra... por lo menos en el uso normal de la aplicacion
    // Por las dudas y en cualquier otro caso... devolvemos una lista vacia :)
    if (!searchString || searchString.trim() === '') {
      return [];
    }

    // Snapshots asociados a las tareas
    const snapshots = this.tareaRepository.snapshots(id).find()

    // Filtramos los documentos por coincidencias en los valores de las claves
    const documentos = (await snapshots)
      .flatMap(snapshot => snapshot.documentos ?? [])
      .flatMap(nivel => nivel.resultados ?? [])
      .filter(resultado =>
        Object.values(resultado).some(value =>
          typeof value === 'string' && (value as string).toLowerCase()
            .includes((searchString).toLowerCase())),
      );

    return documentos;
  }
}
