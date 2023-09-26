import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Tarea, TareaRelations} from '../models';

export class TareaRepository extends DefaultCrudRepository<
  Tarea,
  typeof Tarea.prototype.idTarea,
  TareaRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Tarea, dataSource);
  }
}
