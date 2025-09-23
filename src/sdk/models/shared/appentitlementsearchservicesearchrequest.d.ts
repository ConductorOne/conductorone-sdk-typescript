import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementExpandMask, AppEntitlementExpandMask$Outbound } from "./appentitlementexpandmask.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { PolicyRef, PolicyRef$Outbound } from "./policyref.js";
export declare const MembershipType: {
    readonly AppEntitlementMembershipTypeUnspecified: "APP_ENTITLEMENT_MEMBERSHIP_TYPE_UNSPECIFIED";
    readonly AppEntitlementMembershipTypeMember: "APP_ENTITLEMENT_MEMBERSHIP_TYPE_MEMBER";
    readonly AppEntitlementMembershipTypeOwner: "APP_ENTITLEMENT_MEMBERSHIP_TYPE_OWNER";
    readonly AppEntitlementMembershipTypeExclusion: "APP_ENTITLEMENT_MEMBERSHIP_TYPE_EXCLUSION";
    readonly AppEntitlementMembershipTypeAdmin: "APP_ENTITLEMENT_MEMBERSHIP_TYPE_ADMIN";
};
export type MembershipType = OpenEnum<typeof MembershipType>;
/**
 * Search app entitlements by a variety of filters.
 */
export type AppEntitlementSearchServiceSearchRequest = {
    /**
     * Search for app entitlements that are being reviewed as part of this access review campaign.
     */
    accessReviewId?: string | null | undefined;
    /**
     * Search for app entitlements that have this alias (exact match).
     */
    alias?: string | null | undefined;
    /**
     * Search for app entitlements contained in any of these apps.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * Search for app entitlements that are granted to any of these app user ids.
     */
    appUserIds?: Array<string> | null | undefined;
    /**
     * Search for app entitlements that are part of these compliace frameworks.
     */
    complianceFrameworkIds?: Array<string> | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * Exclude app entitlements from the results that are in these app IDs.
     */
    excludeAppIds?: Array<string> | null | undefined;
    /**
     * Exclude app entitlements from the results that these app users have granted.
     */
    excludeAppUserIds?: Array<string> | null | undefined;
    /**
     * The excludeImmutable field.
     */
    excludeImmutable?: boolean | null | undefined;
    /**
     * The excludeResourceTypeIds field.
     */
    excludeResourceTypeIds?: Array<string> | null | undefined;
    /**
     * The excludedEntitlementRefs field.
     */
    excludedEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    expandMask?: AppEntitlementExpandMask | null | undefined;
    /**
     * Include deleted app entitlements, this includes app entitlements that have a deleted parent object (app, app resource, app resource type)
     */
    includeDeleted?: boolean | null | undefined;
    /**
     * The isAutomated field.
     */
    isAutomated?: boolean | null | undefined;
    /**
     * The membershipType field.
     */
    membershipType?: Array<MembershipType> | null | undefined;
    /**
     * Restrict results to only those who have expiring app entitlement user bindings.
     */
    onlyGetExpiring?: boolean | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Search for app entitlements that use any of these policies.
     */
    policyRefs?: Array<PolicyRef> | null | undefined;
    /**
     * Query the app entitlements with a fuzzy search on display name and description.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * Search for app entitlements that belongs to these resources.
     */
    resourceIds?: Array<string> | null | undefined;
    /**
     * The resourceTraitIds field.
     */
    resourceTraitIds?: Array<string> | null | undefined;
    /**
     * Search for app entitlements that are for items with resources types that have matching names. Example names are "group", "role", and "app".
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * Search for app entitlements with these risk levels.
     */
    riskLevelIds?: Array<string> | null | undefined;
    /**
     * The sourceConnectorId field.
     */
    sourceConnectorId?: string | null | undefined;
};
/** @internal */
export declare const MembershipType$inboundSchema: z.ZodType<MembershipType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const MembershipType$outboundSchema: z.ZodType<MembershipType, z.ZodTypeDef, MembershipType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MembershipType$ {
    /** @deprecated use `MembershipType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MembershipType, z.ZodTypeDef, unknown>;
    /** @deprecated use `MembershipType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MembershipType, z.ZodTypeDef, MembershipType>;
}
/** @internal */
export declare const AppEntitlementSearchServiceSearchRequest$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchRequest$Outbound = {
    accessReviewId?: string | null | undefined;
    alias?: string | null | undefined;
    appIds?: Array<string> | null | undefined;
    appUserIds?: Array<string> | null | undefined;
    complianceFrameworkIds?: Array<string> | null | undefined;
    displayName?: string | null | undefined;
    excludeAppIds?: Array<string> | null | undefined;
    excludeAppUserIds?: Array<string> | null | undefined;
    excludeImmutable?: boolean | null | undefined;
    excludeResourceTypeIds?: Array<string> | null | undefined;
    excludedEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    expandMask?: AppEntitlementExpandMask$Outbound | null | undefined;
    includeDeleted?: boolean | null | undefined;
    isAutomated?: boolean | null | undefined;
    membershipType?: Array<string> | null | undefined;
    onlyGetExpiring?: boolean | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    policyRefs?: Array<PolicyRef$Outbound> | null | undefined;
    query?: string | null | undefined;
    refs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    resourceIds?: Array<string> | null | undefined;
    resourceTraitIds?: Array<string> | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    riskLevelIds?: Array<string> | null | undefined;
    sourceConnectorId?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchRequest$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchRequest$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchRequest$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchRequest$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchRequest>;
    /** @deprecated use `AppEntitlementSearchServiceSearchRequest$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchRequest$Outbound;
}
export declare function appEntitlementSearchServiceSearchRequestToJSON(appEntitlementSearchServiceSearchRequest: AppEntitlementSearchServiceSearchRequest): string;
export declare function appEntitlementSearchServiceSearchRequestFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchRequest, SDKValidationError>;
