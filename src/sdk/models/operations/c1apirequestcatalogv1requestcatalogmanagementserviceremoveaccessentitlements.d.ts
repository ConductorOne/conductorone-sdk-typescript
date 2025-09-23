import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest = {
    catalogId: string | null;
    requestCatalogManagementServiceRemoveAccessEntitlementsRequest?: shared.RequestCatalogManagementServiceRemoveAccessEntitlementsRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse = {
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
    requestCatalogManagementServiceRemoveAccessEntitlementsResponse?: shared.RequestCatalogManagementServiceRemoveAccessEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound = {
    catalog_id: string | null;
    RequestCatalogManagementServiceRemoveAccessEntitlementsRequest?: shared.RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceRemoveAccessEntitlementsResponse?: shared.RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, SDKValidationError>;
