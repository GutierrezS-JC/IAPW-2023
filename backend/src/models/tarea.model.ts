import {Entity, model, property, hasMany} from '@loopback/repository';
import {Snapshot} from './snapshot.model';

@model()
export class Tarea extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
  })
  sitioId?: string;

  @hasMany(() => Snapshot)
  snapshots: Snapshot[];

  constructor(data?: Partial<Tarea>) {
    super(data);
  }
}

export interface TareaRelations {
  // describe navigational properties here
}

export type TareaWithRelations = Tarea & TareaRelations;
