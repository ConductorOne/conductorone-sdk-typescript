import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceRemoveAccessEntitlementsRequest message is used to remove access entitlements from a request catalog.
 *
 * @remarks
 *  The access entitlements are used to determine which users can view the request catalog.
 */
export type RequestCatalogManagementServiceRemoveAccessEntitlementsRequest = {
    /**
     * The list of access entitlements to remove from the catalog.
     */
    accessEntitlements?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound = {
    accessEntitlements?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAccessEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceRemoveAccessEntitlementsRequest>;
    /** @deprecated use `RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceRemoveAccessEntitlementsRequest$Outbound;
}
export declare function requestCatalogManagementServiceRemoveAccessEntitlementsRequestToJSON(requestCatalogManagementServiceRemoveAccessEntitlementsRequest: RequestCatalogManagementServiceRemoveAccessEntitlementsRequest): string;
export declare function requestCatalogManagementServiceRemoveAccessEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceRemoveAccessEntitlementsRequest, SDKValidationError>;
