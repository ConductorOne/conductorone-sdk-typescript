import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceServiceListRequest = {
    appId: string | null;
    appResourceTypeId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppResourceServiceListResponse = {
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
     * The AppResourceServiceListResponse message contains a list of results and a nextPageToken if applicable.
     */
    appResourceServiceListResponse?: shared.AppResourceServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceListRequest$Outbound = {
    app_id: string | null;
    app_resource_type_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceListRequest$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceListRequest>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceListRequest$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceListRequestToJSON(c1ApiAppV1AppResourceServiceListRequest: C1ApiAppV1AppResourceServiceListRequest): string;
export declare function c1ApiAppV1AppResourceServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppResourceServiceListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    AppResourceServiceListResponse?: shared.AppResourceServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceServiceListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceServiceListResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceServiceListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceServiceListResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceServiceListResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceServiceListResponseToJSON(c1ApiAppV1AppResourceServiceListResponse: C1ApiAppV1AppResourceServiceListResponse): string;
export declare function c1ApiAppV1AppResourceServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceServiceListResponse, SDKValidationError>;
