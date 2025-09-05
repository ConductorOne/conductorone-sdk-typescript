import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceRemoveAppEntitlementsRequest message is used to remove app entitlements from a request catalog.
 */
export type RequestCatalogManagementServiceRemoveAppEntitlementsRequest = {
    /**
     * The list of app entitlements to remove from the catalog.
     */
    appEntitlements?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAppEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound = {
    appEntitlements?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAppEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAppEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceRemoveAppEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAppEntitlementsRequest>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceRemoveAppEntitlementsRequest$Outbound;
}
export declare function requestCatalogManagementServiceRemoveAppEntitlementsRequestToJSON(requestCatalogManagementServiceRemoveAppEntitlementsRequest: RequestCatalogManagementServiceRemoveAppEntitlementsRequest): string;
export declare function requestCatalogManagementServiceRemoveAppEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceRemoveAppEntitlementsRequest, SDKValidationError>;
