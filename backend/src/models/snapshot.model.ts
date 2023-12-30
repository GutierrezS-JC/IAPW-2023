import {Entity, model, property} from '@loopback/repository';

@model()
export class Snapshot extends Entity {
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
  estado: string;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  // documentos?: {[key: string]: object[]};
  // documentos?: {[key: string]: object}[];
  documentos?: Nivel[];

  @property({
    type: 'string',
  })
  tareaId?: string;

  constructor(data?: Partial<Snapshot>) {
    super(data);
  }
}

export interface SnapshotRelations {
  // describe navigational properties here
}

export type SnapshotWithRelations = Snapshot & SnapshotRelations;
