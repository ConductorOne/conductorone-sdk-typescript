import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest = {
    catalogId: string | null;
    requestCatalogManagementServiceAddAppEntitlementsRequest?: shared.RequestCatalogManagementServiceAddAppEntitlementsRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse = {
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
     * Empty response with a status code indicating success.
     */
    requestCatalogManagementServiceAddAppEntitlementsResponse?: shared.RequestCatalogManagementServiceAddAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound = {
    catalog_id: string | null;
    RequestCatalogManagementServiceAddAppEntitlementsRequest?: shared.RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceAddAppEntitlementsResponse?: shared.RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAppEntitlementsResponse, SDKValidationError>;
