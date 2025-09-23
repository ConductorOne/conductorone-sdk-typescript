import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse message.
 */
export type RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse = {
    /**
     * The refs field.
     */
    refs?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound = {
    refs?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse>;
    /** @deprecated use `RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse$Outbound;
}
export declare function requestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponseToJSON(requestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse: RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse): string;
export declare function requestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListAllEntitlementIdsPerCatalogResponse, SDKValidationError>;
