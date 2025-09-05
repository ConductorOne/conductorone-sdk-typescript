import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse = {
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
     * Successful response
     */
    requestCatalogManagementServiceListResponse?: shared.RequestCatalogManagementServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceListResponse?: shared.RequestCatalogManagementServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListResponse, SDKValidationError>;
