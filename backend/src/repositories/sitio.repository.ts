import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Sitio, SitioRelations, Tarea} from '../models';
import {TareaRepository} from './tarea.repository';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.id,
  SitioRelations
> {

  public readonly tareas: HasManyRepositoryFactory<Tarea, typeof Sitio.prototype.id>;

  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource, @repository.getter('TareaRepository') protected tareaRepositoryGetter: Getter<TareaRepository>,
  ) {
    super(Sitio, dataSource);
    this.tareas = this.createHasManyRepositoryFactoryFor('tareas', tareaRepositoryGetter,);
  }

  async findTareas(id: string): Promise<Tarea[]> {
    return this.tareas(id).find();
  }
}
