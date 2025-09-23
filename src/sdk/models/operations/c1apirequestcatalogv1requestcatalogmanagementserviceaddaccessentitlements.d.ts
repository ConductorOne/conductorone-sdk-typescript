import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest = {
    catalogId: string | null;
    requestCatalogManagementServiceAddAccessEntitlementsRequest?: shared.RequestCatalogManagementServiceAddAccessEntitlementsRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse = {
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
    requestCatalogManagementServiceAddAccessEntitlementsResponse?: shared.RequestCatalogManagementServiceAddAccessEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound = {
    catalog_id: string | null;
    RequestCatalogManagementServiceAddAccessEntitlementsRequest?: shared.RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceAddAccessEntitlementsResponse?: shared.RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceAddAccessEntitlementsResponse, SDKValidationError>;
