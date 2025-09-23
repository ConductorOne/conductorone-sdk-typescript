import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppsListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAppV1AppsListResponse = {
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
     * The ListAppsResponse message contains a list of results and a nextPageToken if applicable.
     */
    listAppsResponse?: shared.ListAppsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsListRequest$inboundSchema: z.ZodType<C1ApiAppV1AppsListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsListRequest$outboundSchema: z.ZodType<C1ApiAppV1AppsListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsListRequest$ {
    /** @deprecated use `C1ApiAppV1AppsListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsListRequest$Outbound, z.ZodTypeDef, C1ApiAppV1AppsListRequest>;
    /** @deprecated use `C1ApiAppV1AppsListRequest$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsListRequest$Outbound;
}
export declare function c1ApiAppV1AppsListRequestToJSON(c1ApiAppV1AppsListRequest: C1ApiAppV1AppsListRequest): string;
export declare function c1ApiAppV1AppsListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAppV1AppsListResponse$inboundSchema: z.ZodType<C1ApiAppV1AppsListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppsListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAppsResponse?: shared.ListAppsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppsListResponse$outboundSchema: z.ZodType<C1ApiAppV1AppsListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppsListResponse$ {
    /** @deprecated use `C1ApiAppV1AppsListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppsListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppsListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppsListResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppsListResponse>;
    /** @deprecated use `C1ApiAppV1AppsListResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppsListResponse$Outbound;
}
export declare function c1ApiAppV1AppsListResponseToJSON(c1ApiAppV1AppsListResponse: C1ApiAppV1AppsListResponse): string;
export declare function c1ApiAppV1AppsListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppsListResponse, SDKValidationError>;
