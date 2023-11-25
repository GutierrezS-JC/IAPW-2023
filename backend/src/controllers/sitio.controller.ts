import { authenticate } from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import { Sitio } from '../models';
import { SitioRepository } from '../repositories';

export class SitioController {
  constructor(
    @repository(SitioRepository)
    public sitioRepository: SitioRepository,
  ) { }

  @authenticate({ strategy: 'auth0-jwt' })
  @post('/sitios')
  @response(200, {
    description: 'Sitio model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Sitio) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, {
            title: 'NewSitio',
            exclude: ['idSitio'],
          }),
        },
      },
    })
    sitio: Omit<Sitio, 'idSitio'>,
  ): Promise<Sitio> {
    return this.sitioRepository.create(sitio);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @get('/sitios/count')
  @response(200, {
    description: 'Sitio model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Sitio) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.sitioRepository.count(where);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @get('/sitios')
  @response(200, {
    description: 'Array of Sitio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sitio, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Sitio) filter?: Filter<Sitio>,
  ): Promise<Sitio[]> {
    return this.sitioRepository.find(filter);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @patch('/sitios')
  @response(200, {
    description: 'Sitio PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, { partial: true }),
        },
      },
    })
    sitio: Sitio,
    @param.where(Sitio) where?: Where<Sitio>,
  ): Promise<Count> {
    return this.sitioRepository.updateAll(sitio, where);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @get('/sitios/{id}')
  @response(200, {
    description: 'Sitio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sitio, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sitio, { exclude: 'where' }) filter?: FilterExcludingWhere<Sitio>
  ): Promise<Sitio> {
    return this.sitioRepository.findById(id, filter);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @patch('/sitios/{id}')
  @response(204, {
    description: 'Sitio PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitio, { partial: true }),
        },
      },
    })
    sitio: Sitio,
  ): Promise<void> {
    await this.sitioRepository.updateById(id, sitio);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @put('/sitios/{id}')
  @response(204, {
    description: 'Sitio PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sitio: Sitio,
  ): Promise<void> {
    await this.sitioRepository.replaceById(id, sitio);
  }

  @authenticate({ strategy: 'auth0-jwt' })
  @del('/sitios/{id}')
  @response(204, {
    description: 'Sitio DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sitioRepository.deleteById(id);
  }


  @authenticate({ strategy: 'auth0-jwt' })
  @get('/sitios/email')
  async findByEmail(
    @param.query.string('userEmail') userEmail?: string,
    @param.filter(Sitio) filter?: Filter<Sitio>,
  ): Promise<Sitio[]> {
    let sitios: Sitio[] = [];
    if (userEmail) {
      sitios = await this.sitioRepository.find({
        ...filter,
        where: { userEmail },
      });
    }
    return sitios;
  }
}
