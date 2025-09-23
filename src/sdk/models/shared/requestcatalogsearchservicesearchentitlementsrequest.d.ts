import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementExpandMask, AppEntitlementExpandMask$Outbound } from "./appentitlementexpandmask.js";
/**
 * Search entitlements with this granted status for your signed in user.
 */
export declare const GrantedStatus: {
    readonly Unspecified: "UNSPECIFIED";
    readonly All: "ALL";
    readonly Granted: "GRANTED";
    readonly NotGranted: "NOT_GRANTED";
};
/**
 * Search entitlements with this granted status for your signed in user.
 */
export type GrantedStatus = OpenEnum<typeof GrantedStatus>;
/**
 * The RequestCatalogSearchServiceSearchEntitlementsRequest searches entitlements, but only ones that are available to you through the open catalogs.
 */
export type RequestCatalogSearchServiceSearchEntitlementsRequest = {
    /**
     * Search entitlements that belong to this app name (exact match).
     */
    appDisplayName?: string | null | undefined;
    /**
     * Search for entitlements with this alias (exact match).
     */
    entitlementAlias?: string | null | undefined;
    expandMask?: AppEntitlementExpandMask | null | undefined;
    /**
     * Search entitlements with this granted status for your signed in user.
     */
    grantedStatus?: GrantedStatus | null | undefined;
    /**
     * Include deleted entitlements
     */
    includeDeleted?: boolean | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Fuzzy search the display name of resource types.
     */
    query?: string | null | undefined;
};
/** @internal */
export declare const GrantedStatus$inboundSchema: z.ZodType<GrantedStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const GrantedStatus$outboundSchema: z.ZodType<GrantedStatus, z.ZodTypeDef, GrantedStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GrantedStatus$ {
    /** @deprecated use `GrantedStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GrantedStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `GrantedStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GrantedStatus, z.ZodTypeDef, GrantedStatus>;
}
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsRequest$inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogSearchServiceSearchEntitlementsRequest$Outbound = {
    appDisplayName?: string | null | undefined;
    entitlementAlias?: string | null | undefined;
    expandMask?: AppEntitlementExpandMask$Outbound | null | undefined;
    grantedStatus?: string | null | undefined;
    includeDeleted?: boolean | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsRequest$outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogSearchServiceSearchEntitlementsRequest$ {
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsRequest$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsRequest>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsRequest$Outbound` instead. */
    type Outbound = RequestCatalogSearchServiceSearchEntitlementsRequest$Outbound;
}
export declare function requestCatalogSearchServiceSearchEntitlementsRequestToJSON(requestCatalogSearchServiceSearchEntitlementsRequest: RequestCatalogSearchServiceSearchEntitlementsRequest): string;
export declare function requestCatalogSearchServiceSearchEntitlementsRequestFromJSON(jsonString: string): SafeParseResult<RequestCatalogSearchServiceSearchEntitlementsRequest, SDKValidationError>;
