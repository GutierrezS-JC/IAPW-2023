import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  connector: 'mongodb',
  name: 'mongodb',
  url: `mongodb+srv://${process.env.USER}:${process.env.SECRET_KEY}@cluster0.vzc6lj1.mongodb.net/mongodb?retryWrites=true&w=majority`,
  port: 27017,
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MemoryDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'memory';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.memory', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
