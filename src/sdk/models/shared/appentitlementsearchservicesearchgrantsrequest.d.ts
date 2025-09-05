import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementExpandMask, AppEntitlementExpandMask$Outbound } from "./appentitlementexpandmask.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The AppEntitlementSearchServiceSearchGrantsRequest message.
 */
export type AppEntitlementSearchServiceSearchGrantsRequest = {
    /**
     * Search for grants contained in any of these apps.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * Search for grants that are granted to any of these app user ids.
     */
    appUserIds?: Array<string> | null | undefined;
    /**
     * Search for grants of an entitlement
     */
    entitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    expandMask?: AppEntitlementExpandMask | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Search for grants within a resource.
     */
    resourceIds?: Array<string> | null | undefined;
    /**
     * Search grants for given resource types.
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * Search for grants of a user
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsRequest$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchGrantsRequest$Outbound = {
    appIds?: Array<string> | null | undefined;
    appUserIds?: Array<string> | null | undefined;
    entitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    expandMask?: AppEntitlementExpandMask$Outbound | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    resourceIds?: Array<string> | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchGrantsRequest$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsRequest$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchGrantsRequest$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchGrantsRequest$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchGrantsRequest>;
    /** @deprecated use `AppEntitlementSearchServiceSearchGrantsRequest$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchGrantsRequest$Outbound;
}
export declare function appEntitlementSearchServiceSearchGrantsRequestToJSON(appEntitlementSearchServiceSearchGrantsRequest: AppEntitlementSearchServiceSearchGrantsRequest): string;
export declare function appEntitlementSearchServiceSearchGrantsRequestFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchGrantsRequest, SDKValidationError>;
