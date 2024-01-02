import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewSitio
         * (tsType: Omit<Sitio, 'id'>, schemaOptions: { title: 'NewSitio', exclude: [ 'id' ] })
         */
        export interface NewSitio {
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
        }
        /**
         * NewSnapshotInTarea
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Snapshot, 'id'>, 'tareaId'>, schemaOptions: { title: 'NewSnapshotInTarea', exclude: [ 'id' ], optional: [ 'tareaId' ] })
         */
        export interface NewSnapshotInTarea {
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * NewTareaInSitio
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'id'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'id' ], optional: [ 'sitioId' ] })
         */
        export interface NewTareaInSitio {
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
        }
        /**
         * PingResponse
         */
        export interface PingResponse {
            greeting?: string;
            date?: string;
            url?: string;
            headers?: {
                [name: string]: any;
                "Content-Type"?: string;
            };
        }
        /**
         * Sitio
         */
        export interface Sitio {
            id?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
        }
        /**
         * Sitio.Filter
         */
        export interface SitioFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Sitio.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Sitio.Fields
             */
            fields?: /* Sitio.Fields */ {
                id?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                customLinkSelector?: boolean;
                userEmail?: boolean;
            } | ("id" | "nombre" | "url" | "niveles" | "frecuencia" | "docExtractor" | "customLinkSelector" | "userEmail")[];
            /**
             * Sitio.IncludeFilter
             */
            include?: (/* Sitio.IncludeFilter.Items */ SitioIncludeFilterItems | string)[];
        }
        /**
         * Sitio.Filter
         */
        export interface SitioFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Sitio.Fields
             */
            fields?: /* Sitio.Fields */ {
                id?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                customLinkSelector?: boolean;
                userEmail?: boolean;
            } | ("id" | "nombre" | "url" | "niveles" | "frecuencia" | "docExtractor" | "customLinkSelector" | "userEmail")[];
            /**
             * Sitio.IncludeFilter
             */
            include?: (/* Sitio.IncludeFilter.Items */ SitioIncludeFilterItems | string)[];
        }
        /**
         * Sitio.IncludeFilter.Items
         */
        export interface SitioIncludeFilterItems {
            relation?: "tareas";
            scope?: /* Sitio.ScopeFilter */ SitioScopeFilter;
        }
        /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        export interface SitioPartial {
            id?: string;
            nombre?: string;
            url?: string;
            niveles?: number;
            frecuencia?: number;
            docExtractor?: string;
            customLinkSelector?: string;
            userEmail?: string;
        }
        /**
         * Sitio.ScopeFilter
         */
        export interface SitioScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * SitioWithRelations
         * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SitioWithRelations {
            id?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            customLinkSelector?: string;
            userEmail: string;
            tareas?: /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            TareaWithRelations[];
        }
        /**
         * Snapshot
         */
        export interface Snapshot {
            id?: string;
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * SnapshotPartial
         * (tsType: Partial<Snapshot>, schemaOptions: { partial: true })
         */
        export interface SnapshotPartial {
            id?: string;
            nombre?: string;
            estado?: string;
            timestamp?: string; // date-time
            documentos?: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * SnapshotWithRelations
         * (tsType: SnapshotWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SnapshotWithRelations {
            id?: string;
            nombre: string;
            estado: string;
            timestamp: string; // date-time
            documentos: {
                [key: string]: any;
            }[];
            tareaId?: string;
        }
        /**
         * Tarea
         */
        export interface Tarea {
            id?: string;
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
        }
        /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        export interface TareaPartial {
            id?: string;
            timestamp?: string; // date-time
            nombre?: string;
            estado?: string;
            sitioId?: string;
        }
        /**
         * TareaWithRelations
         * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface TareaWithRelations {
            id?: string;
            timestamp: string; // date-time
            nombre: string;
            estado: string;
            sitioId?: string;
            snapshots?: /**
             * SnapshotWithRelations
             * (tsType: SnapshotWithRelations, schemaOptions: { includeRelations: true })
             */
            SnapshotWithRelations[];
        }
    }
}
declare namespace Paths {
    namespace PingControllerGreet {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerPing {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace SitioControllerCount {
        namespace Parameters {
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Sitio.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioControllerCreate {
        export type RequestBody = /**
         * NewSitio
         * (tsType: Omit<Sitio, 'id'>, schemaOptions: { title: 'NewSitio', exclude: [ 'id' ] })
         */
        Components.Schemas.NewSitio;
        namespace Responses {
            export type $200 = /* Sitio */ Components.Schemas.Sitio;
        }
    }
    namespace SitioControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Sitio DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerFind {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SitioWithRelations
             * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SitioWithRelations[];
        }
    }
    namespace SitioControllerFindByEmail {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter;
            export type UserEmail = string;
        }
        export interface QueryParameters {
            userEmail?: Parameters.UserEmail;
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace SitioControllerFindById {
        namespace Parameters {
            export type Filter = /* Sitio.Filter */ Components.Schemas.SitioFilter1;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SitioWithRelations
             * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SitioWithRelations;
        }
    }
    namespace SitioControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Sitio */ Components.Schemas.Sitio;
        namespace Responses {
            /**
             * Sitio PUT success
             */
            export type $204 = any;
        }
    }
    namespace SitioControllerUpdateAll {
        namespace Parameters {
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Sitio.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitioPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * SitioPartial
         * (tsType: Partial<Sitio>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitioPartial;
        namespace Responses {
            /**
             * Sitio PATCH success
             */
            export type $204 = any;
        }
    }
    namespace SitioTareaControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewTareaInSitio
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'id'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'id' ], optional: [ 'sitioId' ] })
         */
        Components.Schemas.NewTareaInSitio;
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea;
        }
    }
    namespace SitioTareaControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SitioTareaControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea[];
        }
    }
    namespace SitioTareaControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        Components.Schemas.TareaPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaSnapshotControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewSnapshotInTarea
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Snapshot, 'id'>, 'tareaId'>, schemaOptions: { title: 'NewSnapshotInTarea', exclude: [ 'id' ], optional: [ 'tareaId' ] })
         */
        Components.Schemas.NewSnapshotInTarea;
        namespace Responses {
            export type $200 = /* Snapshot */ Components.Schemas.Snapshot;
        }
    }
    namespace TareaSnapshotControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Snapshot.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Snapshot.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaSnapshotControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* Snapshot */ Components.Schemas.Snapshot[];
        }
    }
    namespace TareaSnapshotControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Snapshot.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Snapshot.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SnapshotPartial
         * (tsType: Partial<Snapshot>, schemaOptions: { partial: true })
         */
        Components.Schemas.SnapshotPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
}

export interface OperationMethods {
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  /**
   * PingController.ping
   */
  'PingController.ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  /**
   * SitioController.count
   */
  'SitioController.count'(
    parameters?: Parameters<Paths.SitioControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerCount.Responses.$200>
  /**
   * SitioController.findByEmail
   */
  'SitioController.findByEmail'(
    parameters?: Parameters<Paths.SitioControllerFindByEmail.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFindByEmail.Responses.$200>
  /**
   * SitioTareaController.find
   */
  'SitioTareaController.find'(
    parameters?: Parameters<Paths.SitioTareaControllerFind.PathParameters & Paths.SitioTareaControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerFind.Responses.$200>
  /**
   * SitioTareaController.create
   */
  'SitioTareaController.create'(
    parameters?: Parameters<Paths.SitioTareaControllerCreate.PathParameters> | null,
    data?: Paths.SitioTareaControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerCreate.Responses.$200>
  /**
   * SitioTareaController.patch
   */
  'SitioTareaController.patch'(
    parameters?: Parameters<Paths.SitioTareaControllerPatch.PathParameters & Paths.SitioTareaControllerPatch.QueryParameters> | null,
    data?: Paths.SitioTareaControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerPatch.Responses.$200>
  /**
   * SitioTareaController.delete
   */
  'SitioTareaController.delete'(
    parameters?: Parameters<Paths.SitioTareaControllerDelete.PathParameters & Paths.SitioTareaControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioTareaControllerDelete.Responses.$200>
  /**
   * SitioController.findById
   */
  'SitioController.findById'(
    parameters?: Parameters<Paths.SitioControllerFindById.PathParameters & Paths.SitioControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFindById.Responses.$200>
  /**
   * SitioController.replaceById
   */
  'SitioController.replaceById'(
    parameters?: Parameters<Paths.SitioControllerReplaceById.PathParameters> | null,
    data?: Paths.SitioControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerReplaceById.Responses.$204>
  /**
   * SitioController.updateById
   */
  'SitioController.updateById'(
    parameters?: Parameters<Paths.SitioControllerUpdateById.PathParameters> | null,
    data?: Paths.SitioControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerUpdateById.Responses.$204>
  /**
   * SitioController.deleteById
   */
  'SitioController.deleteById'(
    parameters?: Parameters<Paths.SitioControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerDeleteById.Responses.$204>
  /**
   * SitioController.find
   */
  'SitioController.find'(
    parameters?: Parameters<Paths.SitioControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerFind.Responses.$200>
  /**
   * SitioController.create
   */
  'SitioController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SitioControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerCreate.Responses.$200>
  /**
   * SitioController.updateAll
   */
  'SitioController.updateAll'(
    parameters?: Parameters<Paths.SitioControllerUpdateAll.QueryParameters> | null,
    data?: Paths.SitioControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SitioControllerUpdateAll.Responses.$200>
  /**
   * TareaSnapshotController.find
   */
  'TareaSnapshotController.find'(
    parameters?: Parameters<Paths.TareaSnapshotControllerFind.PathParameters & Paths.TareaSnapshotControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerFind.Responses.$200>
  /**
   * TareaSnapshotController.create
   */
  'TareaSnapshotController.create'(
    parameters?: Parameters<Paths.TareaSnapshotControllerCreate.PathParameters> | null,
    data?: Paths.TareaSnapshotControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerCreate.Responses.$200>
  /**
   * TareaSnapshotController.patch
   */
  'TareaSnapshotController.patch'(
    parameters?: Parameters<Paths.TareaSnapshotControllerPatch.PathParameters & Paths.TareaSnapshotControllerPatch.QueryParameters> | null,
    data?: Paths.TareaSnapshotControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerPatch.Responses.$200>
  /**
   * TareaSnapshotController.delete
   */
  'TareaSnapshotController.delete'(
    parameters?: Parameters<Paths.TareaSnapshotControllerDelete.PathParameters & Paths.TareaSnapshotControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaSnapshotControllerDelete.Responses.$200>
}

export interface PathsDictionary {
  ['/greet']: {
    /**
     * PingController.greet
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  }
  ['/ping']: {
    /**
     * PingController.ping
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  }
  ['/sitios/count']: {
    /**
     * SitioController.count
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerCount.Responses.$200>
  }
  ['/sitios/email']: {
    /**
     * SitioController.findByEmail
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFindByEmail.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFindByEmail.Responses.$200>
  }
  ['/sitios/{id}/tareas']: {
    /**
     * SitioTareaController.create
     */
    'post'(
      parameters?: Parameters<Paths.SitioTareaControllerCreate.PathParameters> | null,
      data?: Paths.SitioTareaControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerCreate.Responses.$200>
    /**
     * SitioTareaController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.SitioTareaControllerPatch.PathParameters & Paths.SitioTareaControllerPatch.QueryParameters> | null,
      data?: Paths.SitioTareaControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerPatch.Responses.$200>
    /**
     * SitioTareaController.find
     */
    'get'(
      parameters?: Parameters<Paths.SitioTareaControllerFind.PathParameters & Paths.SitioTareaControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerFind.Responses.$200>
    /**
     * SitioTareaController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.SitioTareaControllerDelete.PathParameters & Paths.SitioTareaControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioTareaControllerDelete.Responses.$200>
  }
  ['/sitios/{id}']: {
    /**
     * SitioController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.SitioControllerReplaceById.PathParameters> | null,
      data?: Paths.SitioControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerReplaceById.Responses.$204>
    /**
     * SitioController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.SitioControllerUpdateById.PathParameters> | null,
      data?: Paths.SitioControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerUpdateById.Responses.$204>
    /**
     * SitioController.findById
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFindById.PathParameters & Paths.SitioControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFindById.Responses.$200>
    /**
     * SitioController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.SitioControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerDeleteById.Responses.$204>
  }
  ['/sitios']: {
    /**
     * SitioController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SitioControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerCreate.Responses.$200>
    /**
     * SitioController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.SitioControllerUpdateAll.QueryParameters> | null,
      data?: Paths.SitioControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerUpdateAll.Responses.$200>
    /**
     * SitioController.find
     */
    'get'(
      parameters?: Parameters<Paths.SitioControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SitioControllerFind.Responses.$200>
  }
  ['/tareas/{id}/snapshots']: {
    /**
     * TareaSnapshotController.create
     */
    'post'(
      parameters?: Parameters<Paths.TareaSnapshotControllerCreate.PathParameters> | null,
      data?: Paths.TareaSnapshotControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerCreate.Responses.$200>
    /**
     * TareaSnapshotController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.TareaSnapshotControllerPatch.PathParameters & Paths.TareaSnapshotControllerPatch.QueryParameters> | null,
      data?: Paths.TareaSnapshotControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerPatch.Responses.$200>
    /**
     * TareaSnapshotController.find
     */
    'get'(
      parameters?: Parameters<Paths.TareaSnapshotControllerFind.PathParameters & Paths.TareaSnapshotControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerFind.Responses.$200>
    /**
     * TareaSnapshotController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.TareaSnapshotControllerDelete.PathParameters & Paths.TareaSnapshotControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaSnapshotControllerDelete.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
