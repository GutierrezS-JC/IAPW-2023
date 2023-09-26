import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDataSource} from '../datasources';
import {Sitio, SitioRelations} from '../models';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.idSitio,
  SitioRelations
> {
  constructor(
    @inject('datasources.memory') dataSource: MemoryDataSource,
  ) {
    super(Sitio, dataSource);
  }
}
