import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ProvisionPolicy, ProvisionPolicy$Outbound } from "./provisionpolicy.js";
import { ProvisionPolicyInput, ProvisionPolicyInput$Outbound } from "./provisionpolicyinput.js";
export type AppEntitlementDurationUnset = {};
/**
 * The purpose field.
 */
export declare const Purpose: {
    readonly AppEntitlementPurposeValueUnspecified: "APP_ENTITLEMENT_PURPOSE_VALUE_UNSPECIFIED";
    readonly AppEntitlementPurposeValueAssignment: "APP_ENTITLEMENT_PURPOSE_VALUE_ASSIGNMENT";
    readonly AppEntitlementPurposeValuePermission: "APP_ENTITLEMENT_PURPOSE_VALUE_PERMISSION";
};
/**
 * The purpose field.
 */
export type Purpose = OpenEnum<typeof Purpose>;
/**
 * The app entitlement represents one permission in a downstream App (SAAS) that can be granted. For example, GitHub Read vs GitHub Write.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 */
export type AppEntitlement = {
    /**
     * The alias of the app entitlement used by Cone. Also exact-match queryable.
     */
    alias?: string | null | undefined;
    /**
     * The ID of the app that is associated with the app entitlement.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app resource that is associated with the app entitlement
     */
    appResourceId?: string | null | undefined;
    /**
     * The ID of the app resource type that is associated with the app entitlement
     */
    appResourceTypeId?: string | null | undefined;
    /**
     * The ID of the policy that will be used for certify tickets related to the app entitlement.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * The IDs of different compliance frameworks associated with this app entitlement ex (SOX, HIPAA, PCI, etc.)
     */
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * Flag to indicate if app-level access request defaults have been applied to the entitlement
     */
    defaultValuesApplied?: boolean | null | undefined;
    deletedAt?: Date | null | undefined;
    deprovisionerPolicy?: ProvisionPolicy | null | undefined;
    /**
     * The description of the app entitlement.
     */
    description?: string | null | undefined;
    /**
     * The display name of the app entitlement.
     */
    displayName?: string | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: AppEntitlementDurationUnset | null | undefined;
    /**
     * This enables tasks to be created in an emergency and use a selected emergency access policy.
     */
    emergencyGrantEnabled?: boolean | null | undefined;
    /**
     * The ID of the policy that will be used for emergency access grant tasks.
     */
    emergencyGrantPolicyId?: string | null | undefined;
    /**
     * The amount of grants open for this entitlement
     */
    grantCount?: number | null | undefined;
    /**
     * The ID of the policy that will be used for grant tickets related to the app entitlement.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * The unique ID for the App Entitlement.
     */
    id?: string | null | undefined;
    /**
     * Flag to indicate whether automation (for adding users to entitlement based on rules) has been enabled.
     */
    isAutomationEnabled?: boolean | null | undefined;
    /**
     * Flag to indicate if the app entitlement is manually managed.
     */
    isManuallyManaged?: boolean | null | undefined;
    /**
     * The matchBatonId field.
     */
    matchBatonId?: string | null | undefined;
    /**
     * Flag to indicate if the app-level access request settings have been overridden for the entitlement
     */
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionerPolicy?: ProvisionPolicy | null | undefined;
    /**
     * The purpose field.
     */
    purpose?: Purpose | null | undefined;
    /**
     * The ID of the request schema associated with this app entitlement.
     */
    requestSchemaId?: string | null | undefined;
    /**
     * The ID of the policy that will be used for revoke tickets related to the app entitlement
     */
    revokePolicyId?: string | null | undefined;
    /**
     * The riskLevelValueId field.
     */
    riskLevelValueId?: string | null | undefined;
    /**
     * The slug is displayed as an oval next to the name in the frontend of C1, it tells you what permission the entitlement grants. See https://www.conductorone.com/docs/product/admin/entitlements/
     */
    slug?: string | null | undefined;
    /**
     * Map to tell us which connector the entitlement came from.
     */
    sourceConnectorIds?: {
        [k: string]: string;
    } | null | undefined;
    /**
     * This field indicates if this is a system builtin entitlement.
     */
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
    userEditedMask?: string | null | undefined;
};
/**
 * The app entitlement represents one permission in a downstream App (SAAS) that can be granted. For example, GitHub Read vs GitHub Write.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 */
export type AppEntitlementInput = {
    /**
     * The alias of the app entitlement used by Cone. Also exact-match queryable.
     */
    alias?: string | null | undefined;
    /**
     * The ID of the app that is associated with the app entitlement.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app resource that is associated with the app entitlement
     */
    appResourceId?: string | null | undefined;
    /**
     * The ID of the app resource type that is associated with the app entitlement
     */
    appResourceTypeId?: string | null | undefined;
    /**
     * The ID of the policy that will be used for certify tickets related to the app entitlement.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * The IDs of different compliance frameworks associated with this app entitlement ex (SOX, HIPAA, PCI, etc.)
     */
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * Flag to indicate if app-level access request defaults have been applied to the entitlement
     */
    defaultValuesApplied?: boolean | null | undefined;
    deletedAt?: Date | null | undefined;
    deprovisionerPolicy?: ProvisionPolicyInput | null | undefined;
    /**
     * The description of the app entitlement.
     */
    description?: string | null | undefined;
    /**
     * The display name of the app entitlement.
     */
    displayName?: string | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: AppEntitlementDurationUnset | null | undefined;
    /**
     * This enables tasks to be created in an emergency and use a selected emergency access policy.
     */
    emergencyGrantEnabled?: boolean | null | undefined;
    /**
     * The ID of the policy that will be used for emergency access grant tasks.
     */
    emergencyGrantPolicyId?: string | null | undefined;
    /**
     * The ID of the policy that will be used for grant tickets related to the app entitlement.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * Flag to indicate if the app entitlement is manually managed.
     */
    isManuallyManaged?: boolean | null | undefined;
    /**
     * The matchBatonId field.
     */
    matchBatonId?: string | null | undefined;
    /**
     * Flag to indicate if the app-level access request settings have been overridden for the entitlement
     */
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionerPolicy?: ProvisionPolicyInput | null | undefined;
    /**
     * The purpose field.
     */
    purpose?: Purpose | null | undefined;
    /**
     * The ID of the request schema associated with this app entitlement.
     */
    requestSchemaId?: string | null | undefined;
    /**
     * The ID of the policy that will be used for revoke tickets related to the app entitlement
     */
    revokePolicyId?: string | null | undefined;
    /**
     * The riskLevelValueId field.
     */
    riskLevelValueId?: string | null | undefined;
    /**
     * The slug is displayed as an oval next to the name in the frontend of C1, it tells you what permission the entitlement grants. See https://www.conductorone.com/docs/product/admin/entitlements/
     */
    slug?: string | null | undefined;
    /**
     * Map to tell us which connector the entitlement came from.
     */
    sourceConnectorIds?: {
        [k: string]: string;
    } | null | undefined;
    updatedAt?: Date | null | undefined;
    userEditedMask?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementDurationUnset$inboundSchema: z.ZodType<AppEntitlementDurationUnset, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementDurationUnset$Outbound = {};
/** @internal */
export declare const AppEntitlementDurationUnset$outboundSchema: z.ZodType<AppEntitlementDurationUnset$Outbound, z.ZodTypeDef, AppEntitlementDurationUnset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementDurationUnset$ {
    /** @deprecated use `AppEntitlementDurationUnset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementDurationUnset, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementDurationUnset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementDurationUnset$Outbound, z.ZodTypeDef, AppEntitlementDurationUnset>;
    /** @deprecated use `AppEntitlementDurationUnset$Outbound` instead. */
    type Outbound = AppEntitlementDurationUnset$Outbound;
}
export declare function appEntitlementDurationUnsetToJSON(appEntitlementDurationUnset: AppEntitlementDurationUnset): string;
export declare function appEntitlementDurationUnsetFromJSON(jsonString: string): SafeParseResult<AppEntitlementDurationUnset, SDKValidationError>;
/** @internal */
export declare const Purpose$inboundSchema: z.ZodType<Purpose, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Purpose$outboundSchema: z.ZodType<Purpose, z.ZodTypeDef, Purpose>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Purpose$ {
    /** @deprecated use `Purpose$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Purpose, z.ZodTypeDef, unknown>;
    /** @deprecated use `Purpose$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Purpose, z.ZodTypeDef, Purpose>;
}
/** @internal */
export declare const AppEntitlement$inboundSchema: z.ZodType<AppEntitlement, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlement$Outbound = {
    alias?: string | null | undefined;
    appId?: string | null | undefined;
    appResourceId?: string | null | undefined;
    appResourceTypeId?: string | null | undefined;
    certifyPolicyId?: string | null | undefined;
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    createdAt?: string | null | undefined;
    defaultValuesApplied?: boolean | null | undefined;
    deletedAt?: string | null | undefined;
    deprovisionerPolicy?: ProvisionPolicy$Outbound | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: AppEntitlementDurationUnset$Outbound | null | undefined;
    emergencyGrantEnabled?: boolean | null | undefined;
    emergencyGrantPolicyId?: string | null | undefined;
    grantCount?: string | null | undefined;
    grantPolicyId?: string | null | undefined;
    id?: string | null | undefined;
    isAutomationEnabled?: boolean | null | undefined;
    isManuallyManaged?: boolean | null | undefined;
    matchBatonId?: string | null | undefined;
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionerPolicy?: ProvisionPolicy$Outbound | null | undefined;
    purpose?: string | null | undefined;
    requestSchemaId?: string | null | undefined;
    revokePolicyId?: string | null | undefined;
    riskLevelValueId?: string | null | undefined;
    slug?: string | null | undefined;
    sourceConnectorIds?: {
        [k: string]: string;
    } | null | undefined;
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
    userEditedMask?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlement$outboundSchema: z.ZodType<AppEntitlement$Outbound, z.ZodTypeDef, AppEntitlement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlement$ {
    /** @deprecated use `AppEntitlement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlement, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlement$Outbound, z.ZodTypeDef, AppEntitlement>;
    /** @deprecated use `AppEntitlement$Outbound` instead. */
    type Outbound = AppEntitlement$Outbound;
}
export declare function appEntitlementToJSON(appEntitlement: AppEntitlement): string;
export declare function appEntitlementFromJSON(jsonString: string): SafeParseResult<AppEntitlement, SDKValidationError>;
/** @internal */
export declare const AppEntitlementInput$inboundSchema: z.ZodType<AppEntitlementInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementInput$Outbound = {
    alias?: string | null | undefined;
    appId?: string | null | undefined;
    appResourceId?: string | null | undefined;
    appResourceTypeId?: string | null | undefined;
    certifyPolicyId?: string | null | undefined;
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    createdAt?: string | null | undefined;
    defaultValuesApplied?: boolean | null | undefined;
    deletedAt?: string | null | undefined;
    deprovisionerPolicy?: ProvisionPolicyInput$Outbound | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    durationGrant?: string | null | undefined;
    durationUnset?: AppEntitlementDurationUnset$Outbound | null | undefined;
    emergencyGrantEnabled?: boolean | null | undefined;
    emergencyGrantPolicyId?: string | null | undefined;
    grantPolicyId?: string | null | undefined;
    isManuallyManaged?: boolean | null | undefined;
    matchBatonId?: string | null | undefined;
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionerPolicy?: ProvisionPolicyInput$Outbound | null | undefined;
    purpose?: string | null | undefined;
    requestSchemaId?: string | null | undefined;
    revokePolicyId?: string | null | undefined;
    riskLevelValueId?: string | null | undefined;
    slug?: string | null | undefined;
    sourceConnectorIds?: {
        [k: string]: string;
    } | null | undefined;
    updatedAt?: string | null | undefined;
    userEditedMask?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementInput$outboundSchema: z.ZodType<AppEntitlementInput$Outbound, z.ZodTypeDef, AppEntitlementInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementInput$ {
    /** @deprecated use `AppEntitlementInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementInput$Outbound, z.ZodTypeDef, AppEntitlementInput>;
    /** @deprecated use `AppEntitlementInput$Outbound` instead. */
    type Outbound = AppEntitlementInput$Outbound;
}
export declare function appEntitlementInputToJSON(appEntitlementInput: AppEntitlementInput): string;
export declare function appEntitlementInputFromJSON(jsonString: string): SafeParseResult<AppEntitlementInput, SDKValidationError>;
