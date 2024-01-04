import {Entity, hasMany, model, property} from '@loopback/repository';
import {Tarea} from './tarea.model';

@model()
export class Sitio extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

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
  customLinkSelector: string;

  @property({
    type: 'string',
    required: true,
  })
  userEmail: string;

  @hasMany(() => Tarea)
  tareas: Tarea[];

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}

export interface SitioRelations {
  // describe navigational properties here
}

export type SitioWithRelations = Sitio & SitioRelations;
