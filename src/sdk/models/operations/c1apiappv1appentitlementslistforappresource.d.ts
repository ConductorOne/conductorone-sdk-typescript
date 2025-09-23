import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsListForAppResourceRequest = {
    appId: string | null;
    appResourceTypeId: string | null;
    appResourceId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementsListForAppResourceResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppEntitlementsResponse?: shared.ListAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppResourceRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListForAppResourceRequest$Outbound = {
    app_id: string | null;
    app_resource_type_id: string | null;
    app_resource_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppResourceRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppResourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListForAppResourceRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppResourceRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListForAppResourceRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListForAppResourceRequestToJSON(c1ApiAppV1AppEntitlementsListForAppResourceRequest: C1ApiAppV1AppEntitlementsListForAppResourceRequest): string;
export declare function c1ApiAppV1AppEntitlementsListForAppResourceRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListForAppResourceRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppResourceResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListForAppResourceResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementsResponse?: shared.ListAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListForAppResourceResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppResourceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListForAppResourceResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListForAppResourceResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListForAppResourceResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListForAppResourceResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListForAppResourceResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListForAppResourceResponseToJSON(c1ApiAppV1AppEntitlementsListForAppResourceResponse: C1ApiAppV1AppEntitlementsListForAppResourceResponse): string;
export declare function c1ApiAppV1AppEntitlementsListForAppResourceResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListForAppResourceResponse, SDKValidationError>;
