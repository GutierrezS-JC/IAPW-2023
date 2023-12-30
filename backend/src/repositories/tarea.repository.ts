import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Snapshot, Tarea, TareaRelations} from '../models';
import {SnapshotRepository} from './snapshot.repository';

export class TareaRepository extends DefaultCrudRepository<
  Tarea,
  typeof Tarea.prototype.id,
  TareaRelations
> {

  public readonly snapshots: HasManyRepositoryFactory<Snapshot, typeof Tarea.prototype.id>;

  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource, @repository.getter('SnapshotRepository') protected snapshotRepositoryGetter: Getter<SnapshotRepository>,
  ) {
    super(Tarea, dataSource);
    this.snapshots = this.createHasManyRepositoryFactoryFor('snapshots', snapshotRepositoryGetter,);
  }
}
