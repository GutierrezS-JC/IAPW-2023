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
  Sitio,
  Tarea,
} from '../models';
import {SitioRepository} from '../repositories';

export class SitioTareaController {
  constructor(
    @repository(SitioRepository) protected sitioRepository: SitioRepository,
  ) { }

  @get('/sitios/{id}/tareas', {
    responses: {
      '200': {
        description: 'Array of Sitio has many Tarea',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tarea)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Tarea>,
  ): Promise<Tarea[]> {
    return this.sitioRepository.tareas(id).find(filter);
  }

  @post('/sitios/{id}/tareas', {
    responses: {
      '200': {
        description: 'Sitio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tarea)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Sitio.prototype.idSitio,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tarea, {
            title: 'NewTareaInSitio',
            exclude: ['idTarea'],
            optional: ['sitioId']
          }),
        },
      },
    }) tarea: Omit<Tarea, 'idTarea'>,
  ): Promise<Tarea> {
    return this.sitioRepository.tareas(id).create(tarea);
  }

  @patch('/sitios/{id}/tareas', {
    responses: {
      '200': {
        description: 'Sitio.Tarea PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tarea, {partial: true}),
        },
      },
    })
    tarea: Partial<Tarea>,
    @param.query.object('where', getWhereSchemaFor(Tarea)) where?: Where<Tarea>,
  ): Promise<Count> {
    return this.sitioRepository.tareas(id).patch(tarea, where);
  }

  @del('/sitios/{id}/tareas', {
    responses: {
      '200': {
        description: 'Sitio.Tarea DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Tarea)) where?: Where<Tarea>,
  ): Promise<Count> {
    return this.sitioRepository.tareas(id).delete(where);
  }
}
