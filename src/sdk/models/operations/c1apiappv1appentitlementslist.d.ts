import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppEntitlementsListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppEntitlementsListResponse = {
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
export declare const C1ApiAppV1AppEntitlementsListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListRequest$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListRequest>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListRequest$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListRequestToJSON(c1ApiAppV1AppEntitlementsListRequest: C1ApiAppV1AppEntitlementsListRequest): string;
export declare function c1ApiAppV1AppEntitlementsListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppEntitlementsListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppEntitlementsResponse?: shared.ListAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppEntitlementsListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppEntitlementsListResponse$ {
    /** @deprecated use `C1ApiAppV1AppEntitlementsListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppEntitlementsListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppEntitlementsListResponse>;
    /** @deprecated use `C1ApiAppV1AppEntitlementsListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppEntitlementsListResponse$Outbound;
}
export declare function c1ApiAppV1AppEntitlementsListResponseToJSON(c1ApiAppV1AppEntitlementsListResponse: C1ApiAppV1AppEntitlementsListResponse): string;
export declare function c1ApiAppV1AppEntitlementsListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppEntitlementsListResponse, SDKValidationError>;
