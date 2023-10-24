import {Entity, hasMany, model, property} from '@loopback/repository';
import {Sitio} from './sitio.model';

@model({settings: {strict: false}})
export class Usuario extends Entity {
  @property({
    id: true,
    generated: true,
  })
  idUsuario?: string;

  @property({
    type: 'string',
    required: true,
  })
  mail: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Sitio)
  sitios: Sitio[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
