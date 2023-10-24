import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Sitio} from '../models';
import {SitioRepository} from './sitio.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.idUsuario,
  UsuarioRelations
> {

  public readonly sitios: HasManyRepositoryFactory<Sitio, typeof Usuario.prototype.idUsuario>;

  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource, @repository.getter('SitioRepository') protected sitioRepositoryGetter: Getter<SitioRepository>,
  ) {
    super(Usuario, dataSource);
    this.sitios = this.createHasManyRepositoryFactoryFor('sitios', sitioRepositoryGetter,);
    this.registerInclusionResolver('sitios', this.sitios.inclusionResolver);
  }
}
