import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest = {
    catalogId: string | null;
    requestCatalogManagementServiceRemoveAppEntitlementsRequest?: shared.RequestCatalogManagementServiceRemoveAppEntitlementsRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse = {
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
     * Empty response with a status code indicating success
     */
    requestCatalogManagementServiceRemoveAppEntitlementsResponse?: shared.RequestCatalogManagementServiceRemoveAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound = {
    catalog_id: string | null;
    RequestCatalogManagementServiceRemoveAppEntitlementsRequest?: shared.RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceRemoveAppEntitlementsResponse?: shared.RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAppEntitlementsResponse, SDKValidationError>;
