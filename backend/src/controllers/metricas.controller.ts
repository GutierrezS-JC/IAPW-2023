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
import {Sitio, Tarea} from '../models';
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
}
