import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceUpdateAppEntitlementsRequest object is used to update app entitlements to a request catalog id.
 */
export type RequestCatalogManagementServiceUpdateAppEntitlementsRequest = {
    /**
     * The entitlement to get from the request catalog.
     */
    appEntitlements: Array<AppEntitlementRef>;
};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateAppEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound = {
    appEntitlements: Array<AppEntitlementRef$Outbound>;
};
/** @internal */
export declare const RequestCatalogManagementServiceUpdateAppEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceUpdateAppEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceUpdateAppEntitlementsRequest>;
    /** @deprecated use `RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceUpdateAppEntitlementsRequest$Outbound;
}
export declare function requestCatalogManagementServiceUpdateAppEntitlementsRequestToJSON(requestCatalogManagementServiceUpdateAppEntitlementsRequest: RequestCatalogManagementServiceUpdateAppEntitlementsRequest): string;
export declare function requestCatalogManagementServiceUpdateAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceUpdateAppEntitlementsRequest, SDKValidationError>;
