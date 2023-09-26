import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Sitio, SitioRelations, Tarea} from '../models';
import {TareaRepository} from './tarea.repository';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.idSitio,
  SitioRelations
> {

  public readonly tareas: HasManyRepositoryFactory<Tarea, typeof Sitio.prototype.idSitio>;

  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource, @repository.getter('TareaRepository') protected tareaRepositoryGetter: Getter<TareaRepository>,
  ) {
    super(Sitio, dataSource);
    this.tareas = this.createHasManyRepositoryFactoryFor('tareas', tareaRepositoryGetter,);
    this.registerInclusionResolver('tareas', this.tareas.inclusionResolver);
  }
}
