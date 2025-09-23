import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success
 */
export type RequestCatalogManagementServiceRemoveAppEntitlementsResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAppEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAppEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceRemoveAppEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAppEntitlementsResponse>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceRemoveAppEntitlementsResponse$Outbound;
}
export declare function requestCatalogManagementServiceRemoveAppEntitlementsResponseToJSON(requestCatalogManagementServiceRemoveAppEntitlementsResponse: RequestCatalogManagementServiceRemoveAppEntitlementsResponse): string;
export declare function requestCatalogManagementServiceRemoveAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceRemoveAppEntitlementsResponse, SDKValidationError>;
