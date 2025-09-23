import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RequestCatalogManagementServiceAddAppEntitlementsResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceAddAppEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceAddAppEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceAddAppEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAppEntitlementsResponse>;
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceAddAppEntitlementsResponse$Outbound;
}
export declare function requestCatalogManagementServiceAddAppEntitlementsResponseToJSON(requestCatalogManagementServiceAddAppEntitlementsResponse: RequestCatalogManagementServiceAddAppEntitlementsResponse): string;
export declare function requestCatalogManagementServiceAddAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceAddAppEntitlementsResponse, SDKValidationError>;
