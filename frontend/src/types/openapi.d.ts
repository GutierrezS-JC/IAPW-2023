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
         * (tsType: Omit<Sitio, 'idSitio'>, schemaOptions: { title: 'NewSitio', exclude: [ 'idSitio' ] })
         */
        export interface NewSitio {
            [name: string]: any;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            userEmail: string;
        }
        /**
         * NewSitioInUsuario
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Sitio, 'idSitio'>, 'usuarioId'>, schemaOptions: { title: 'NewSitioInUsuario', exclude: [ 'idSitio' ], optional: [ 'usuarioId' ] })
         */
        export interface NewSitioInUsuario {
            [name: string]: any;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            userEmail: string;
        }
        /**
         * NewTarea
         * (tsType: Omit<Tarea, 'idTarea'>, schemaOptions: { title: 'NewTarea', exclude: [ 'idTarea' ] })
         */
        export interface NewTarea {
            [name: string]: any;
            timestamp: string; // date-time
            ultimoEstado: boolean;
            sitioId?: string;
        }
        /**
         * NewTareaInSitio
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'idTarea'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'idTarea' ], optional: [ 'sitioId' ] })
         */
        export interface NewTareaInSitio {
            [name: string]: any;
            timestamp: string; // date-time
            ultimoEstado: boolean;
            sitioId?: string;
        }
        /**
         * NewUsuario
         * (tsType: Omit<Usuario, 'idUsuario'>, schemaOptions: { title: 'NewUsuario', exclude: [ 'idUsuario' ] })
         */
        export interface NewUsuario {
            [name: string]: any;
            mail: string;
            nombre: string;
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
            [name: string]: any;
            idSitio?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
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
                [name: string]: any;
                idSitio?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                userEmail?: boolean;
            } | string[];
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
                [name: string]: any;
                idSitio?: boolean;
                nombre?: boolean;
                url?: boolean;
                niveles?: boolean;
                frecuencia?: boolean;
                docExtractor?: boolean;
                userEmail?: boolean;
            } | string[];
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
            [name: string]: any;
            idSitio?: string;
            nombre?: string;
            url?: string;
            niveles?: number;
            frecuencia?: number;
            docExtractor?: string;
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
            [name: string]: any;
            idSitio?: string;
            nombre: string;
            url: string;
            niveles: number;
            frecuencia: number;
            docExtractor: string;
            userEmail: string;
            tareas?: /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            TareaWithRelations[];
        }
        /**
         * Tarea
         */
        export interface Tarea {
            [name: string]: any;
            idTarea?: string;
            timestamp: string; // date-time
            ultimoEstado: boolean;
            sitioId?: string;
        }
        /**
         * Tarea.Filter
         */
        export interface TareaFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Tarea.Fields
             */
            fields?: /* Tarea.Fields */ {
                [name: string]: any;
                idTarea?: boolean;
                timestamp?: boolean;
                ultimoEstado?: boolean;
                sitioId?: boolean;
            } | string[];
        }
        /**
         * Tarea.Filter
         */
        export interface TareaFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Tarea.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Tarea.Fields
             */
            fields?: /* Tarea.Fields */ {
                [name: string]: any;
                idTarea?: boolean;
                timestamp?: boolean;
                ultimoEstado?: boolean;
                sitioId?: boolean;
            } | string[];
        }
        /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        export interface TareaPartial {
            [name: string]: any;
            idTarea?: string;
            timestamp?: string; // date-time
            ultimoEstado?: boolean;
            sitioId?: string;
        }
        /**
         * TareaWithRelations
         * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface TareaWithRelations {
            [name: string]: any;
            idTarea?: string;
            timestamp: string; // date-time
            ultimoEstado: boolean;
            sitioId?: string;
        }
        /**
         * Usuario
         */
        export interface Usuario {
            [name: string]: any;
            idUsuario?: string;
            mail: string;
            nombre: string;
        }
        /**
         * Usuario.Filter
         */
        export interface UsuarioFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Usuario.Fields
             */
            fields?: /* Usuario.Fields */ {
                [name: string]: any;
                idUsuario?: boolean;
                mail?: boolean;
                nombre?: boolean;
            } | string[];
            /**
             * Usuario.IncludeFilter
             */
            include?: (/* Usuario.IncludeFilter.Items */ UsuarioIncludeFilterItems | string)[];
        }
        /**
         * Usuario.Filter
         */
        export interface UsuarioFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Usuario.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Usuario.Fields
             */
            fields?: /* Usuario.Fields */ {
                [name: string]: any;
                idUsuario?: boolean;
                mail?: boolean;
                nombre?: boolean;
            } | string[];
            /**
             * Usuario.IncludeFilter
             */
            include?: (/* Usuario.IncludeFilter.Items */ UsuarioIncludeFilterItems | string)[];
        }
        /**
         * Usuario.IncludeFilter.Items
         */
        export interface UsuarioIncludeFilterItems {
            relation?: "sitios";
            scope?: /* Usuario.ScopeFilter */ UsuarioScopeFilter;
        }
        /**
         * UsuarioPartial
         * (tsType: Partial<Usuario>, schemaOptions: { partial: true })
         */
        export interface UsuarioPartial {
            [name: string]: any;
            idUsuario?: string;
            mail?: string;
            nombre?: string;
        }
        /**
         * Usuario.ScopeFilter
         */
        export interface UsuarioScopeFilter {
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
         * UsuarioWithRelations
         * (tsType: UsuarioWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface UsuarioWithRelations {
            [name: string]: any;
            idUsuario?: string;
            mail: string;
            nombre: string;
            sitios?: /**
             * SitioWithRelations
             * (tsType: SitioWithRelations, schemaOptions: { includeRelations: true })
             */
            SitioWithRelations[];
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
         * (tsType: Omit<Sitio, 'idSitio'>, schemaOptions: { title: 'NewSitio', exclude: [ 'idSitio' ] })
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
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Tarea, 'idTarea'>, 'sitioId'>, schemaOptions: { title: 'NewTareaInSitio', exclude: [ 'idTarea' ], optional: [ 'sitioId' ] })
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
    namespace TareaControllerCount {
        namespace Parameters {
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Tarea.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace TareaControllerCreate {
        export type RequestBody = /**
         * NewTarea
         * (tsType: Omit<Tarea, 'idTarea'>, schemaOptions: { title: 'NewTarea', exclude: [ 'idTarea' ] })
         */
        Components.Schemas.NewTarea;
        namespace Responses {
            export type $200 = /* Tarea */ Components.Schemas.Tarea;
        }
    }
    namespace TareaControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Tarea DELETE success
             */
            export type $204 = any;
        }
    }
    namespace TareaControllerFind {
        namespace Parameters {
            export type Filter = /* Tarea.Filter */ Components.Schemas.TareaFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.TareaWithRelations[];
        }
    }
    namespace TareaControllerFindById {
        namespace Parameters {
            export type Filter = /* Tarea.Filter */ Components.Schemas.TareaFilter;
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
             * TareaWithRelations
             * (tsType: TareaWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.TareaWithRelations;
        }
    }
    namespace TareaControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Tarea */ Components.Schemas.Tarea;
        namespace Responses {
            /**
             * Tarea PUT success
             */
            export type $204 = any;
        }
    }
    namespace TareaControllerUpdateAll {
        namespace Parameters {
            /**
             * Tarea.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
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
    namespace TareaControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * TareaPartial
         * (tsType: Partial<Tarea>, schemaOptions: { partial: true })
         */
        Components.Schemas.TareaPartial;
        namespace Responses {
            /**
             * Tarea PATCH success
             */
            export type $204 = any;
        }
    }
    namespace UsuarioControllerCount {
        namespace Parameters {
            /**
             * Usuario.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Usuario.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UsuarioControllerCreate {
        export type RequestBody = /**
         * NewUsuario
         * (tsType: Omit<Usuario, 'idUsuario'>, schemaOptions: { title: 'NewUsuario', exclude: [ 'idUsuario' ] })
         */
        Components.Schemas.NewUsuario;
        namespace Responses {
            export type $200 = /* Usuario */ Components.Schemas.Usuario;
        }
    }
    namespace UsuarioControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Usuario DELETE success
             */
            export type $204 = any;
        }
    }
    namespace UsuarioControllerFind {
        namespace Parameters {
            export type Filter = /* Usuario.Filter */ Components.Schemas.UsuarioFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * UsuarioWithRelations
             * (tsType: UsuarioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UsuarioWithRelations[];
        }
    }
    namespace UsuarioControllerFindById {
        namespace Parameters {
            export type Filter = /* Usuario.Filter */ Components.Schemas.UsuarioFilter;
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
             * UsuarioWithRelations
             * (tsType: UsuarioWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.UsuarioWithRelations;
        }
    }
    namespace UsuarioControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Usuario */ Components.Schemas.Usuario;
        namespace Responses {
            /**
             * Usuario PUT success
             */
            export type $204 = any;
        }
    }
    namespace UsuarioControllerUpdateAll {
        namespace Parameters {
            /**
             * Usuario.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Usuario.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * UsuarioPartial
         * (tsType: Partial<Usuario>, schemaOptions: { partial: true })
         */
        Components.Schemas.UsuarioPartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UsuarioControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * UsuarioPartial
         * (tsType: Partial<Usuario>, schemaOptions: { partial: true })
         */
        Components.Schemas.UsuarioPartial;
        namespace Responses {
            /**
             * Usuario PATCH success
             */
            export type $204 = any;
        }
    }
    namespace UsuarioSitioControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewSitioInUsuario
         * (tsType: @loopback/repository-json-schema#Optional<Omit<Sitio, 'idSitio'>, 'usuarioId'>, schemaOptions: { title: 'NewSitioInUsuario', exclude: [ 'idSitio' ], optional: [ 'usuarioId' ] })
         */
        Components.Schemas.NewSitioInUsuario;
        namespace Responses {
            export type $200 = /* Sitio */ Components.Schemas.Sitio;
        }
    }
    namespace UsuarioSitioControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* Sitio.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace UsuarioSitioControllerFind {
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
            export type $200 = /* Sitio */ Components.Schemas.Sitio[];
        }
    }
    namespace UsuarioSitioControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * Sitio.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
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
   * TareaController.count
   */
  'TareaController.count'(
    parameters?: Parameters<Paths.TareaControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerCount.Responses.$200>
  /**
   * TareaController.findById
   */
  'TareaController.findById'(
    parameters?: Parameters<Paths.TareaControllerFindById.PathParameters & Paths.TareaControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerFindById.Responses.$200>
  /**
   * TareaController.replaceById
   */
  'TareaController.replaceById'(
    parameters?: Parameters<Paths.TareaControllerReplaceById.PathParameters> | null,
    data?: Paths.TareaControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerReplaceById.Responses.$204>
  /**
   * TareaController.updateById
   */
  'TareaController.updateById'(
    parameters?: Parameters<Paths.TareaControllerUpdateById.PathParameters> | null,
    data?: Paths.TareaControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerUpdateById.Responses.$204>
  /**
   * TareaController.deleteById
   */
  'TareaController.deleteById'(
    parameters?: Parameters<Paths.TareaControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerDeleteById.Responses.$204>
  /**
   * TareaController.find
   */
  'TareaController.find'(
    parameters?: Parameters<Paths.TareaControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerFind.Responses.$200>
  /**
   * TareaController.create
   */
  'TareaController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.TareaControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerCreate.Responses.$200>
  /**
   * TareaController.updateAll
   */
  'TareaController.updateAll'(
    parameters?: Parameters<Paths.TareaControllerUpdateAll.QueryParameters> | null,
    data?: Paths.TareaControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.TareaControllerUpdateAll.Responses.$200>
  /**
   * UsuarioController.count
   */
  'UsuarioController.count'(
    parameters?: Parameters<Paths.UsuarioControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerCount.Responses.$200>
  /**
   * UsuarioSitioController.find
   */
  'UsuarioSitioController.find'(
    parameters?: Parameters<Paths.UsuarioSitioControllerFind.PathParameters & Paths.UsuarioSitioControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioSitioControllerFind.Responses.$200>
  /**
   * UsuarioSitioController.create
   */
  'UsuarioSitioController.create'(
    parameters?: Parameters<Paths.UsuarioSitioControllerCreate.PathParameters> | null,
    data?: Paths.UsuarioSitioControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioSitioControllerCreate.Responses.$200>
  /**
   * UsuarioSitioController.patch
   */
  'UsuarioSitioController.patch'(
    parameters?: Parameters<Paths.UsuarioSitioControllerPatch.PathParameters & Paths.UsuarioSitioControllerPatch.QueryParameters> | null,
    data?: Paths.UsuarioSitioControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioSitioControllerPatch.Responses.$200>
  /**
   * UsuarioSitioController.delete
   */
  'UsuarioSitioController.delete'(
    parameters?: Parameters<Paths.UsuarioSitioControllerDelete.PathParameters & Paths.UsuarioSitioControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioSitioControllerDelete.Responses.$200>
  /**
   * UsuarioController.findById
   */
  'UsuarioController.findById'(
    parameters?: Parameters<Paths.UsuarioControllerFindById.PathParameters & Paths.UsuarioControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerFindById.Responses.$200>
  /**
   * UsuarioController.replaceById
   */
  'UsuarioController.replaceById'(
    parameters?: Parameters<Paths.UsuarioControllerReplaceById.PathParameters> | null,
    data?: Paths.UsuarioControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerReplaceById.Responses.$204>
  /**
   * UsuarioController.updateById
   */
  'UsuarioController.updateById'(
    parameters?: Parameters<Paths.UsuarioControllerUpdateById.PathParameters> | null,
    data?: Paths.UsuarioControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerUpdateById.Responses.$204>
  /**
   * UsuarioController.deleteById
   */
  'UsuarioController.deleteById'(
    parameters?: Parameters<Paths.UsuarioControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerDeleteById.Responses.$204>
  /**
   * UsuarioController.find
   */
  'UsuarioController.find'(
    parameters?: Parameters<Paths.UsuarioControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerFind.Responses.$200>
  /**
   * UsuarioController.create
   */
  'UsuarioController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.UsuarioControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerCreate.Responses.$200>
  /**
   * UsuarioController.updateAll
   */
  'UsuarioController.updateAll'(
    parameters?: Parameters<Paths.UsuarioControllerUpdateAll.QueryParameters> | null,
    data?: Paths.UsuarioControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UsuarioControllerUpdateAll.Responses.$200>
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
  ['/tareas/count']: {
    /**
     * TareaController.count
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerCount.Responses.$200>
  }
  ['/tareas/{id}']: {
    /**
     * TareaController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.TareaControllerReplaceById.PathParameters> | null,
      data?: Paths.TareaControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerReplaceById.Responses.$204>
    /**
     * TareaController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.TareaControllerUpdateById.PathParameters> | null,
      data?: Paths.TareaControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerUpdateById.Responses.$204>
    /**
     * TareaController.findById
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerFindById.PathParameters & Paths.TareaControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerFindById.Responses.$200>
    /**
     * TareaController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.TareaControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerDeleteById.Responses.$204>
  }
  ['/tareas']: {
    /**
     * TareaController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.TareaControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerCreate.Responses.$200>
    /**
     * TareaController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.TareaControllerUpdateAll.QueryParameters> | null,
      data?: Paths.TareaControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerUpdateAll.Responses.$200>
    /**
     * TareaController.find
     */
    'get'(
      parameters?: Parameters<Paths.TareaControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.TareaControllerFind.Responses.$200>
  }
  ['/usuarios/count']: {
    /**
     * UsuarioController.count
     */
    'get'(
      parameters?: Parameters<Paths.UsuarioControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerCount.Responses.$200>
  }
  ['/usuarios/{id}/sitios']: {
    /**
     * UsuarioSitioController.create
     */
    'post'(
      parameters?: Parameters<Paths.UsuarioSitioControllerCreate.PathParameters> | null,
      data?: Paths.UsuarioSitioControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioSitioControllerCreate.Responses.$200>
    /**
     * UsuarioSitioController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.UsuarioSitioControllerPatch.PathParameters & Paths.UsuarioSitioControllerPatch.QueryParameters> | null,
      data?: Paths.UsuarioSitioControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioSitioControllerPatch.Responses.$200>
    /**
     * UsuarioSitioController.find
     */
    'get'(
      parameters?: Parameters<Paths.UsuarioSitioControllerFind.PathParameters & Paths.UsuarioSitioControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioSitioControllerFind.Responses.$200>
    /**
     * UsuarioSitioController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.UsuarioSitioControllerDelete.PathParameters & Paths.UsuarioSitioControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioSitioControllerDelete.Responses.$200>
  }
  ['/usuarios/{id}']: {
    /**
     * UsuarioController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.UsuarioControllerReplaceById.PathParameters> | null,
      data?: Paths.UsuarioControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerReplaceById.Responses.$204>
    /**
     * UsuarioController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.UsuarioControllerUpdateById.PathParameters> | null,
      data?: Paths.UsuarioControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerUpdateById.Responses.$204>
    /**
     * UsuarioController.findById
     */
    'get'(
      parameters?: Parameters<Paths.UsuarioControllerFindById.PathParameters & Paths.UsuarioControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerFindById.Responses.$200>
    /**
     * UsuarioController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.UsuarioControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerDeleteById.Responses.$204>
  }
  ['/usuarios']: {
    /**
     * UsuarioController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.UsuarioControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerCreate.Responses.$200>
    /**
     * UsuarioController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.UsuarioControllerUpdateAll.QueryParameters> | null,
      data?: Paths.UsuarioControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerUpdateAll.Responses.$200>
    /**
     * UsuarioController.find
     */
    'get'(
      parameters?: Parameters<Paths.UsuarioControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UsuarioControllerFind.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
