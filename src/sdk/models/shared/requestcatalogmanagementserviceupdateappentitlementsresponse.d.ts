import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RequestCatalogManagementServiceUpdateAppEntitlementsResponse object is is the response from UpdateAppEntitlements endpoint.
 */
export type RequestCatalogManagementServiceUpdateAppEntitlementsResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateAppEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateAppEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceUpdateAppEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateAppEntitlementsResponse>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceUpdateAppEntitlementsResponse$Outbound;
}
export declare function requestCatalogManagementServiceUpdateAppEntitlementsResponseToJSON(requestCatalogManagementServiceUpdateAppEntitlementsResponse: RequestCatalogManagementServiceUpdateAppEntitlementsResponse): string;
export declare function requestCatalogManagementServiceUpdateAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceUpdateAppEntitlementsResponse, SDKValidationError>;
