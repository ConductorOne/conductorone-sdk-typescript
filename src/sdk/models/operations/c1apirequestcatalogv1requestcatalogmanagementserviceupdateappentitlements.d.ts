import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest = {
    catalogId: string | null;
    requestCatalogManagementServiceUpdateAppEntitlementsRequest?: shared.RequestCatalogManagementServiceUpdateAppEntitlementsRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse = {
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
     * The RequestCatalogManagementServiceUpdateAppEntitlementsResponse object is is the response from UpdateAppEntitlements endpoint.
     */
    requestCatalogManagementServiceUpdateAppEntitlementsResponse?: shared.RequestCatalogManagementServiceUpdateAppEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound = {
    catalog_id: string | null;
    RequestCatalogManagementServiceUpdateAppEntitlementsRequest?: shared.RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceUpdateAppEntitlementsResponse?: shared.RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateAppEntitlementsResponse, SDKValidationError>;
