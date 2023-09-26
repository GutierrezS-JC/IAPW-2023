import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tarea extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idTarea?: string;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'boolean',
    required: true,
  })
  ultimoEstado: boolean;

  @property({
    type: 'string',
  })
  sitioId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tarea>) {
    super(data);
  }
}

export interface TareaRelations {
  // describe navigational properties here
}

export type TareaWithRelations = Tarea & TareaRelations;
