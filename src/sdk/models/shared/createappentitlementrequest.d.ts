import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementExpandMask, AppEntitlementExpandMask$Outbound } from "./appentitlementexpandmask.js";
import { ProvisionPolicyInput, ProvisionPolicyInput$Outbound } from "./provisionpolicyinput.js";
export type CreateAppEntitlementRequestDurationUnset = {};
/**
 * The purpose field.
 */
export declare const CreateAppEntitlementRequestPurpose: {
    readonly AppEntitlementPurposeValueUnspecified: "APP_ENTITLEMENT_PURPOSE_VALUE_UNSPECIFIED";
    readonly AppEntitlementPurposeValueAssignment: "APP_ENTITLEMENT_PURPOSE_VALUE_ASSIGNMENT";
    readonly AppEntitlementPurposeValuePermission: "APP_ENTITLEMENT_PURPOSE_VALUE_PERMISSION";
};
/**
 * The purpose field.
 */
export type CreateAppEntitlementRequestPurpose = OpenEnum<typeof CreateAppEntitlementRequestPurpose>;
/**
 * The CreateAppEntitlementRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
 *   - durationUnset
 *   - durationGrant
 */
export type CreateAppEntitlementRequest = {
    /**
     * The alias field.
     */
    alias?: string | null | undefined;
    /**
     * The appEntitlementOwnerIds field.
     */
    appEntitlementOwnerIds?: Array<string> | null | undefined;
    /**
     * The appResourceId field.
     */
    appResourceId?: string | null | undefined;
    /**
     * The appResourceTypeId field.
     */
    appResourceTypeId?: string | null | undefined;
    /**
     * The certifyPolicyId field.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * The complianceFrameworkValueIds field.
     */
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName: string;
    durationGrant?: string | null | undefined;
    durationUnset?: CreateAppEntitlementRequestDurationUnset | null | undefined;
    /**
     * The emergencyGrantEnabled field.
     */
    emergencyGrantEnabled?: boolean | null | undefined;
    /**
     * The emergencyGrantPolicyId field.
     */
    emergencyGrantPolicyId?: string | null | undefined;
    expandMask?: AppEntitlementExpandMask | null | undefined;
    /**
     * The grantPolicyId field.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * If supplied, it's implied that the entitlement is created before sync and needs to be merged with connector entitlement.
     */
    matchBatonId?: string | null | undefined;
    /**
     * The overrideAccessRequestsDefaults field.
     */
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionPolicy?: ProvisionPolicyInput | null | undefined;
    /**
     * The purpose field.
     */
    purpose?: CreateAppEntitlementRequestPurpose | null | undefined;
    /**
     * The revokePolicyId field.
     */
    revokePolicyId?: string | null | undefined;
    /**
     * The riskLevelValueId field.
     */
    riskLevelValueId?: string | null | undefined;
    /**
     * The slug field.
     */
    slug?: string | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementRequestDurationUnset$inboundSchema: z.ZodType<CreateAppEntitlementRequestDurationUnset, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementRequestDurationUnset$Outbound = {};
/** @internal */
export declare const CreateAppEntitlementRequestDurationUnset$outboundSchema: z.ZodType<CreateAppEntitlementRequestDurationUnset$Outbound, z.ZodTypeDef, CreateAppEntitlementRequestDurationUnset>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementRequestDurationUnset$ {
    /** @deprecated use `CreateAppEntitlementRequestDurationUnset$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementRequestDurationUnset, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementRequestDurationUnset$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementRequestDurationUnset$Outbound, z.ZodTypeDef, CreateAppEntitlementRequestDurationUnset>;
    /** @deprecated use `CreateAppEntitlementRequestDurationUnset$Outbound` instead. */
    type Outbound = CreateAppEntitlementRequestDurationUnset$Outbound;
}
export declare function createAppEntitlementRequestDurationUnsetToJSON(createAppEntitlementRequestDurationUnset: CreateAppEntitlementRequestDurationUnset): string;
export declare function createAppEntitlementRequestDurationUnsetFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementRequestDurationUnset, SDKValidationError>;
/** @internal */
export declare const CreateAppEntitlementRequestPurpose$inboundSchema: z.ZodType<CreateAppEntitlementRequestPurpose, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CreateAppEntitlementRequestPurpose$outboundSchema: z.ZodType<CreateAppEntitlementRequestPurpose, z.ZodTypeDef, CreateAppEntitlementRequestPurpose>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementRequestPurpose$ {
    /** @deprecated use `CreateAppEntitlementRequestPurpose$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementRequestPurpose, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementRequestPurpose$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementRequestPurpose, z.ZodTypeDef, CreateAppEntitlementRequestPurpose>;
}
/** @internal */
export declare const CreateAppEntitlementRequest$inboundSchema: z.ZodType<CreateAppEntitlementRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementRequest$Outbound = {
    alias?: string | null | undefined;
    appEntitlementOwnerIds?: Array<string> | null | undefined;
    appResourceId?: string | null | undefined;
    appResourceTypeId?: string | null | undefined;
    certifyPolicyId?: string | null | undefined;
    complianceFrameworkValueIds?: Array<string> | null | undefined;
    description?: string | null | undefined;
    displayName: string;
    durationGrant?: string | null | undefined;
    durationUnset?: CreateAppEntitlementRequestDurationUnset$Outbound | null | undefined;
    emergencyGrantEnabled?: boolean | null | undefined;
    emergencyGrantPolicyId?: string | null | undefined;
    expandMask?: AppEntitlementExpandMask$Outbound | null | undefined;
    grantPolicyId?: string | null | undefined;
    matchBatonId?: string | null | undefined;
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    provisionPolicy?: ProvisionPolicyInput$Outbound | null | undefined;
    purpose?: string | null | undefined;
    revokePolicyId?: string | null | undefined;
    riskLevelValueId?: string | null | undefined;
    slug?: string | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementRequest$outboundSchema: z.ZodType<CreateAppEntitlementRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementRequest$ {
    /** @deprecated use `CreateAppEntitlementRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementRequest>;
    /** @deprecated use `CreateAppEntitlementRequest$Outbound` instead. */
    type Outbound = CreateAppEntitlementRequest$Outbound;
}
export declare function createAppEntitlementRequestToJSON(createAppEntitlementRequest: CreateAppEntitlementRequest): string;
export declare function createAppEntitlementRequestFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementRequest, SDKValidationError>;
