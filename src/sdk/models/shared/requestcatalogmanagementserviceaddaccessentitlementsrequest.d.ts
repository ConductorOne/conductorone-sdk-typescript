import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceAddAccessEntitlementsRequest message is used to add access entitlements to a request
 *
 * @remarks
 *  catalog to determine which users can view the request catalog.
 */
export type RequestCatalogManagementServiceAddAccessEntitlementsRequest = {
    /**
     * List of entitlements to add to the request catalog as access entitlements.
     */
    accessEntitlements: Array<AppEntitlementRef>;
};
/** @internal */
export declare const RequestCatalogManagementServiceAddAccessEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound = {
    accessEntitlements: Array<AppEntitlementRef$Outbound>;
};
/** @internal */
export declare const RequestCatalogManagementServiceAddAccessEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAccessEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceAddAccessEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAccessEntitlementsRequest>;
    /** @deprecated use `RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceAddAccessEntitlementsRequest$Outbound;
}
export declare function requestCatalogManagementServiceAddAccessEntitlementsRequestToJSON(requestCatalogManagementServiceAddAccessEntitlementsRequest: RequestCatalogManagementServiceAddAccessEntitlementsRequest): string;
export declare function requestCatalogManagementServiceAddAccessEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceAddAccessEntitlementsRequest, SDKValidationError>;
