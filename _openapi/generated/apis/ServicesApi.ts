/* tslint:disable */
/* eslint-disable */
/**
 * Render Public API
 * Manage everything about your Render services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@render.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime.ts';
import type {
  CreateService201Response,
  GetEnvVarsForService200ResponseInner,
  GetHeaders200ResponseInner,
  GetRoutes200ResponseInner,
  GetServices200ResponseInner,
  ModelError,
  Region,
  ScaleServiceRequest,
  Service,
  ServiceEnv,
  ServicePATCH,
  ServicePOST,
  ServiceType,
  UpdateEnvVarsForServiceRequestInner,
} from '../models/index.ts';
import {
    CreateService201ResponseFromJSON,
    CreateService201ResponseToJSON,
    GetEnvVarsForService200ResponseInnerFromJSON,
    GetEnvVarsForService200ResponseInnerToJSON,
    GetHeaders200ResponseInnerFromJSON,
    GetHeaders200ResponseInnerToJSON,
    GetRoutes200ResponseInnerFromJSON,
    GetRoutes200ResponseInnerToJSON,
    GetServices200ResponseInnerFromJSON,
    GetServices200ResponseInnerToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    RegionFromJSON,
    RegionToJSON,
    ScaleServiceRequestFromJSON,
    ScaleServiceRequestToJSON,
    ServiceFromJSON,
    ServiceToJSON,
    ServiceEnvFromJSON,
    ServiceEnvToJSON,
    ServicePATCHFromJSON,
    ServicePATCHToJSON,
    ServicePOSTFromJSON,
    ServicePOSTToJSON,
    ServiceTypeFromJSON,
    ServiceTypeToJSON,
    UpdateEnvVarsForServiceRequestInnerFromJSON,
    UpdateEnvVarsForServiceRequestInnerToJSON,
} from '../models/index.ts';

export interface CreateServiceRequest {
    servicePOST: ServicePOST;
}

export interface DeleteServiceRequest {
    serviceId: string;
}

export interface GetEnvVarsForServiceRequest {
    serviceId: string;
    cursor?: string;
    limit?: number;
}

export interface GetHeadersRequest {
    serviceId: string;
    path?: Array<string>;
    name?: Array<string>;
    value?: Array<string>;
    cursor?: string;
    limit?: number;
}

export interface GetRoutesRequest {
    serviceId: string;
    type?: Array<GetRoutesTypeEnum>;
    source?: Array<string>;
    destination?: Array<string>;
    cursor?: string;
    limit?: number;
}

export interface GetServiceRequest {
    serviceId: string;
}

export interface GetServicesRequest {
    name?: Array<string>;
    type?: Array<ServiceType>;
    env?: Array<ServiceEnv>;
    region?: Array<Region>;
    suspended?: Array<GetServicesSuspendedEnum>;
    createdBefore?: Date;
    createdAfter?: Date;
    updatedBefore?: Date;
    updatedAfter?: Date;
    ownerId?: Array<string>;
    cursor?: string;
    limit?: number;
}

export interface ResumeServiceRequest {
    serviceId: string;
}

export interface ScaleServiceOperationRequest {
    serviceId: string;
    scaleServiceRequest: ScaleServiceRequest;
}

export interface SuspendServiceRequest {
    serviceId: string;
}

export interface UpdateEnvVarsForServiceRequest {
    serviceId: string;
    updateEnvVarsForServiceRequestInner: Array<UpdateEnvVarsForServiceRequestInner>;
}

export interface UpdateServiceRequest {
    serviceId: string;
    servicePATCH: ServicePATCH;
}

/**
 * 
 */
export class ServicesApi extends runtime.BaseAPI {

    /**
     * Create service
     */
    async createServiceRaw(requestParameters: CreateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateService201Response>> {
        if (requestParameters.servicePOST === null || requestParameters.servicePOST === undefined) {
            throw new runtime.RequiredError('servicePOST','Required parameter requestParameters.servicePOST was null or undefined when calling createService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ServicePOSTToJSON(requestParameters.servicePOST),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateService201ResponseFromJSON(jsonValue));
    }

    /**
     * Create service
     */
    async createService(requestParameters: CreateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateService201Response> {
        const response = await this.createServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete service
     */
    async deleteServiceRaw(requestParameters: DeleteServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling deleteService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete service
     */
    async deleteService(requestParameters: DeleteServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteServiceRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve environment variables
     */
    async getEnvVarsForServiceRaw(requestParameters: GetEnvVarsForServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetEnvVarsForService200ResponseInner>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getEnvVarsForService.');
        }

        const queryParameters: any = {};

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/env-vars`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetEnvVarsForService200ResponseInnerFromJSON));
    }

    /**
     * Retrieve environment variables
     */
    async getEnvVarsForService(requestParameters: GetEnvVarsForServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetEnvVarsForService200ResponseInner>> {
        const response = await this.getEnvVarsForServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve headers
     */
    async getHeadersRaw(requestParameters: GetHeadersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetHeaders200ResponseInner>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getHeaders.');
        }

        const queryParameters: any = {};

        if (requestParameters.path) {
            queryParameters['path'] = requestParameters.path.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.name) {
            queryParameters['name'] = requestParameters.name.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.value) {
            queryParameters['value'] = requestParameters.value.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/headers`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetHeaders200ResponseInnerFromJSON));
    }

    /**
     * Retrieve headers
     */
    async getHeaders(requestParameters: GetHeadersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetHeaders200ResponseInner>> {
        const response = await this.getHeadersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve redirect and rewrite rules
     */
    async getRoutesRaw(requestParameters: GetRoutesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetRoutes200ResponseInner>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getRoutes.');
        }

        const queryParameters: any = {};

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.source) {
            queryParameters['source'] = requestParameters.source.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.destination) {
            queryParameters['destination'] = requestParameters.destination.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/routes`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetRoutes200ResponseInnerFromJSON));
    }

    /**
     * Retrieve redirect and rewrite rules
     */
    async getRoutes(requestParameters: GetRoutesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetRoutes200ResponseInner>> {
        const response = await this.getRoutesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve service
     */
    async getServiceRaw(requestParameters: GetServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Service>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling getService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceFromJSON(jsonValue));
    }

    /**
     * Retrieve service
     */
    async getService(requestParameters: GetServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Service> {
        const response = await this.getServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List services
     */
    async getServicesRaw(requestParameters: GetServicesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetServices200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters.name) {
            queryParameters['name'] = requestParameters.name.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.type) {
            queryParameters['type'] = requestParameters.type.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.env) {
            queryParameters['env'] = requestParameters.env.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.region) {
            queryParameters['region'] = requestParameters.region.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.suspended) {
            queryParameters['suspended'] = requestParameters.suspended.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.createdBefore !== undefined) {
            queryParameters['createdBefore'] = (requestParameters.createdBefore as any).toISOString();
        }

        if (requestParameters.createdAfter !== undefined) {
            queryParameters['createdAfter'] = (requestParameters.createdAfter as any).toISOString();
        }

        if (requestParameters.updatedBefore !== undefined) {
            queryParameters['updatedBefore'] = (requestParameters.updatedBefore as any).toISOString();
        }

        if (requestParameters.updatedAfter !== undefined) {
            queryParameters['updatedAfter'] = (requestParameters.updatedAfter as any).toISOString();
        }

        if (requestParameters.ownerId) {
            queryParameters['ownerId'] = requestParameters.ownerId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetServices200ResponseInnerFromJSON));
    }

    /**
     * List services
     */
    async getServices(requestParameters: GetServicesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetServices200ResponseInner>> {
        const response = await this.getServicesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Resume service
     */
    async resumeServiceRaw(requestParameters: ResumeServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling resumeService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/resume`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Resume service
     */
    async resumeService(requestParameters: ResumeServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.resumeServiceRaw(requestParameters, initOverrides);
    }

    /**
     * Scale service to desired number of instances
     */
    async scaleServiceRaw(requestParameters: ScaleServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling scaleService.');
        }

        if (requestParameters.scaleServiceRequest === null || requestParameters.scaleServiceRequest === undefined) {
            throw new runtime.RequiredError('scaleServiceRequest','Required parameter requestParameters.scaleServiceRequest was null or undefined when calling scaleService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/scale`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScaleServiceRequestToJSON(requestParameters.scaleServiceRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Scale service to desired number of instances
     */
    async scaleService(requestParameters: ScaleServiceOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.scaleServiceRaw(requestParameters, initOverrides);
    }

    /**
     * Suspend service
     */
    async suspendServiceRaw(requestParameters: SuspendServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling suspendService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/suspend`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Suspend service
     */
    async suspendService(requestParameters: SuspendServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.suspendServiceRaw(requestParameters, initOverrides);
    }

    /**
     * Update environment variables
     */
    async updateEnvVarsForServiceRaw(requestParameters: UpdateEnvVarsForServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetEnvVarsForService200ResponseInner>>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling updateEnvVarsForService.');
        }

        if (requestParameters.updateEnvVarsForServiceRequestInner === null || requestParameters.updateEnvVarsForServiceRequestInner === undefined) {
            throw new runtime.RequiredError('updateEnvVarsForServiceRequestInner','Required parameter requestParameters.updateEnvVarsForServiceRequestInner was null or undefined when calling updateEnvVarsForService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}/env-vars`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.updateEnvVarsForServiceRequestInner.map(UpdateEnvVarsForServiceRequestInnerToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetEnvVarsForService200ResponseInnerFromJSON));
    }

    /**
     * Update environment variables
     */
    async updateEnvVarsForService(requestParameters: UpdateEnvVarsForServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetEnvVarsForService200ResponseInner>> {
        const response = await this.updateEnvVarsForServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update service
     */
    async updateServiceRaw(requestParameters: UpdateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Service>> {
        if (requestParameters.serviceId === null || requestParameters.serviceId === undefined) {
            throw new runtime.RequiredError('serviceId','Required parameter requestParameters.serviceId was null or undefined when calling updateService.');
        }

        if (requestParameters.servicePATCH === null || requestParameters.servicePATCH === undefined) {
            throw new runtime.RequiredError('servicePATCH','Required parameter requestParameters.servicePATCH was null or undefined when calling updateService.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/services/{serviceId}`.replace(`{${"serviceId"}}`, encodeURIComponent(String(requestParameters.serviceId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ServicePATCHToJSON(requestParameters.servicePATCH),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ServiceFromJSON(jsonValue));
    }

    /**
     * Update service
     */
    async updateService(requestParameters: UpdateServiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Service> {
        const response = await this.updateServiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetRoutesTypeEnum = {
    REDIRECT: 'redirect',
    REWRITE: 'rewrite',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type GetRoutesTypeEnum = typeof GetRoutesTypeEnum[keyof typeof GetRoutesTypeEnum];
/**
 * @export
 */
export const GetServicesSuspendedEnum = {
    SUSPENDED: 'suspended',
    NOT_SUSPENDED: 'not_suspended',
    UNKNOWN_DEFAULT_OPEN_API: '11184809'
} as const;
export type GetServicesSuspendedEnum = typeof GetServicesSuspendedEnum[keyof typeof GetServicesSuspendedEnum];
