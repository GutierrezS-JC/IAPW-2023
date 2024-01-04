import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Tarea,
  Snapshot,
} from '../models';
import {TareaRepository} from '../repositories';

export class TareaSnapshotController {
  constructor(
    @repository(TareaRepository) protected tareaRepository: TareaRepository,
  ) { }

  @get('/tareas/{id}/snapshots', {
    responses: {
      '200': {
        description: 'Array of Tarea has many Snapshot',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Snapshot)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Snapshot>,
  ): Promise<Snapshot[]> {
    return this.tareaRepository.snapshots(id).find(filter);
  }

  @post('/tareas/{id}/snapshots', {
    responses: {
      '200': {
        description: 'Tarea model instance',
        content: {'application/json': {schema: getModelSchemaRef(Snapshot)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Tarea.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Snapshot, {
            title: 'NewSnapshotInTarea',
            exclude: ['id'],
            optional: ['tareaId']
          }),
        },
      },
    }) snapshot: Omit<Snapshot, 'id'>,
  ): Promise<Snapshot> {
    return this.tareaRepository.snapshots(id).create(snapshot);
  }

  @patch('/tareas/{id}/snapshots', {
    responses: {
      '200': {
        description: 'Tarea.Snapshot PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Snapshot, {partial: true}),
        },
      },
    })
    snapshot: Partial<Snapshot>,
    @param.query.object('where', getWhereSchemaFor(Snapshot)) where?: Where<Snapshot>,
  ): Promise<Count> {
    return this.tareaRepository.snapshots(id).patch(snapshot, where);
  }

  @del('/tareas/{id}/snapshots', {
    responses: {
      '200': {
        description: 'Tarea.Snapshot DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Snapshot)) where?: Where<Snapshot>,
  ): Promise<Count> {
    return this.tareaRepository.snapshots(id).delete(where);
  }
}
