import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceAddAppEntitlementsRequest object is used to add app requestable app entitlements to a request catalog.
 */
export type RequestCatalogManagementServiceAddAppEntitlementsRequest = {
    /**
     * List of entitlements to add to the request catalog.
     */
    appEntitlements: Array<AppEntitlementRef>;
    /**
     * Whether or not to create requests for newly added entitlements for users in the catalog.
     *
     * @remarks
     *  By default, this is false and no requests are created.
     */
    createRequests?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceAddAppEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound = {
    appEntitlements: Array<AppEntitlementRef$Outbound>;
    createRequests?: boolean | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceAddAppEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceAddAppEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceAddAppEntitlementsRequest>;
    /** @deprecated use `RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceAddAppEntitlementsRequest$Outbound;
}
export declare function requestCatalogManagementServiceAddAppEntitlementsRequestToJSON(requestCatalogManagementServiceAddAppEntitlementsRequest: RequestCatalogManagementServiceAddAppEntitlementsRequest): string;
export declare function requestCatalogManagementServiceAddAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceAddAppEntitlementsRequest, SDKValidationError>;
