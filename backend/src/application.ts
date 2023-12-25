import {AuthenticationComponent, registerAuthenticationStrategy} from '@loopback/authentication';
import {BootMixin} from '@loopback/boot';
import {ApplicationConfig, createBindingFromClass} from '@loopback/core';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {ServiceMixin} from '@loopback/service-proxy';
import 'dotenv/config';
import path from 'path';
import {JWTAuthenticationStrategy, JWTServiceProvider, KEY} from './authentication-strategies';
import {MySequence} from './sequence';

// CronJob
import {CronComponent} from '@loopback/cron';
import {MyCronJob} from './utils/MyCronJob.';

export {ApplicationConfig};

export class SearchApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };

    // Bind authentication component related elements
    this.component(AuthenticationComponent);

    this.service(JWTServiceProvider);

    // Register the Auth0 JWT authentication strategy
    registerAuthenticationStrategy(this as any, JWTAuthenticationStrategy);
    this.configure(KEY).to({
      jwksUri: 'https://dev-wipx61ystmxfh1rc.us.auth0.com/.well-known/jwks.json',
      audience: 'https://dev-wipx61ystmxfh1rc.us.auth0.com/api/v2/',
      issuer: 'https://dev-wipx61ystmxfh1rc.us.auth0.com/',
      algorithms: ['RS256'],
    });

    this.api({
      openapi: '3.0.0',
      info: {title: 'package or prject name', version: '1.0'},
      paths: {},
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        }
      },
      servers: [{url: '/'}],
      security: [{bearerAuth: []}],
    });

    this.component(CronComponent);
    this.add(createBindingFromClass(MyCronJob));

  }
}
