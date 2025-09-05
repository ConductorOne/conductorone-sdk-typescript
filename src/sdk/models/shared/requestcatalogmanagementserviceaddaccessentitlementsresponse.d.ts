import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RequestCatalogManagementServiceAddAccessEntitlementsResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceAddAccessEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceAddAccessEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAccessEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceAddAccessEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAccessEntitlementsResponse>;
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceAddAccessEntitlementsResponse$Outbound;
}
export declare function requestCatalogManagementServiceAddAccessEntitlementsResponseToJSON(requestCatalogManagementServiceAddAccessEntitlementsResponse: RequestCatalogManagementServiceAddAccessEntitlementsResponse): string;
export declare function requestCatalogManagementServiceAddAccessEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceAddAccessEntitlementsResponse, SDKValidationError>;
