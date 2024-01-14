import {authenticate} from '@loopback/authentication';
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
  Snapshot,
  Tarea,
} from '../models';
import {TareaRepository} from '../repositories';

export class TareaSnapshotController {
  constructor(
    @repository(TareaRepository) protected tareaRepository: TareaRepository,
  ) { }

  @authenticate({strategy: 'auth0-jwt'})
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

  @authenticate({strategy: 'auth0-jwt'})
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

  @authenticate({strategy: 'auth0-jwt'})
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

  @authenticate({strategy: 'auth0-jwt'})
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
