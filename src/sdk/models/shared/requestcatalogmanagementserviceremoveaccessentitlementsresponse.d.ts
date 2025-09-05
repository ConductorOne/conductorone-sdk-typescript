import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RequestCatalogManagementServiceRemoveAccessEntitlementsResponse = {};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound = {};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAccessEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAccessEntitlementsResponse>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceRemoveAccessEntitlementsResponse$Outbound;
}
export declare function requestCatalogManagementServiceRemoveAccessEntitlementsResponseToJSON(requestCatalogManagementServiceRemoveAccessEntitlementsResponse: RequestCatalogManagementServiceRemoveAccessEntitlementsResponse): string;
export declare function requestCatalogManagementServiceRemoveAccessEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceRemoveAccessEntitlementsResponse, SDKValidationError>;
