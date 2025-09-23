import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceTypeServiceListRequest = {
    appId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppResourceTypeServiceListResponse = {
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
     * The AppResourceTypeServiceListResponse message contains a list of results and a nextPageToken if applicable.
     */
    appResourceTypeServiceListResponse?: shared.AppResourceTypeServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceListRequest$Outbound = {
    app_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceListRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceListRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceListRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceListRequestToJSON(c1ApiAppV1AppResourceTypeServiceListRequest: C1ApiAppV1AppResourceTypeServiceListRequest): string;
export declare function c1ApiAppV1AppResourceTypeServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceTypeServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppResourceTypeServiceListResponse?: shared.AppResourceTypeServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceTypeServiceListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceTypeServiceListResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceTypeServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceTypeServiceListResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceTypeServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceTypeServiceListResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceTypeServiceListResponseToJSON(c1ApiAppV1AppResourceTypeServiceListResponse: C1ApiAppV1AppResourceTypeServiceListResponse): string;
export declare function c1ApiAppV1AppResourceTypeServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceTypeServiceListResponse, SDKValidationError>;
