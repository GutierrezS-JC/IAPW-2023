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
  Usuario,
} from '../models';
import {UsuarioRepository} from '../repositories';

export class UsuarioSitioController {
  constructor(
    @repository(UsuarioRepository) protected usuarioRepository: UsuarioRepository,
  ) { }

  @get('/usuarios/{id}/sitios', {
    responses: {
      '200': {
        description: 'Array of Usuario has many Sitio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Sitio)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Sitio>,
  ): Promise<Sitio[]> {
    return this.usuarioRepository.sitios(id).find(filter);
  }

  @post('/usuarios/{id}/sitios', {
    responses: {
      '200': {
        description: 'Usuario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Sitio)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Usuario.prototype.idUsuario,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {
            title: 'NewSitioInUsuario',
            exclude: ['idSitio'],
            optional: ['usuarioId']
          }),
        },
      },
    }) sitio: Omit<Sitio, 'idSitio'>,
  ): Promise<Sitio> {
    return this.usuarioRepository.sitios(id).create(sitio);
  }

  @patch('/usuarios/{id}/sitios', {
    responses: {
      '200': {
        description: 'Usuario.Sitio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {partial: true}),
        },
      },
    })
    sitio: Partial<Sitio>,
    @param.query.object('where', getWhereSchemaFor(Sitio)) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.usuarioRepository.sitios(id).patch(sitio, where);
  }

  @del('/usuarios/{id}/sitios', {
    responses: {
      '200': {
        description: 'Usuario.Sitio DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Sitio)) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.usuarioRepository.sitios(id).delete(where);
  }
}
