import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tarea} from './tarea.model';

@model({settings: {strict: false}})
export class Sitio extends Entity {
  @property({
    id: true,
    generated: true,
  })
  idSitio?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  url: string;

  @property({
    type: 'number',
    required: true,
  })
  niveles: number;

  @property({
    type: 'number',
    required: true,
  })
  frecuencia: number;

  @property({
    type: 'string',
    required: true,
  })
  docExtractor: string;

  @property({
    type: 'string',
  })
  usuarioId?: string;

  @hasMany(() => Tarea)
  tareas: Tarea[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}

export interface SitioRelations {
  // describe navigational properties here
}

export type SitioWithRelations = Sitio & SitioRelations;
