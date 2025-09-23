import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest = {
    catalogId: string | null;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse = {
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
    requestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse?: shared.RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$Outbound = {
    catalog_id: string | null;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse?: shared.RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListAllEntitlementIdsPerAppResponse, SDKValidationError>;
