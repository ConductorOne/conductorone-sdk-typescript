import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Define the app user identity matching strategy for this app.
 */
export declare const CreateAppRequestIdentityMatching: {
    readonly AppUserIdentityMatchingUnspecified: "APP_USER_IDENTITY_MATCHING_UNSPECIFIED";
    readonly AppUserIdentityMatchingStrict: "APP_USER_IDENTITY_MATCHING_STRICT";
    readonly AppUserIdentityMatchingDisplayName: "APP_USER_IDENTITY_MATCHING_DISPLAY_NAME";
};
/**
 * Define the app user identity matching strategy for this app.
 */
export type CreateAppRequestIdentityMatching = OpenEnum<typeof CreateAppRequestIdentityMatching>;
/**
 * The CreateAppRequest message is used to create a new app.
 */
export type CreateAppRequest = {
    /**
     * Creates the app with this certify policy.
     */
    certifyPolicyId?: string | null | undefined;
    /**
     * Creates the app with this description.
     */
    description?: string | null | undefined;
    /**
     * Creates the app with this display name.
     */
    displayName: string;
    /**
     * Creates the app with this grant policy.
     */
    grantPolicyId?: string | null | undefined;
    /**
     * Define the app user identity matching strategy for this app.
     */
    identityMatching?: CreateAppRequestIdentityMatching | null | undefined;
    /**
     * Creates the app with this monthly cost per seat.
     */
    monthlyCostUsd?: number | null | undefined;
    /**
     * Creates the app with this array of owners.
     */
    owners?: Array<string> | null | undefined;
    /**
     * Creates the app with this revoke policy.
     */
    revokePolicyId?: string | null | undefined;
    /**
     * This flag enforces a provisioning mode where the access entitlement is always included in the provisioning flow, if the app user doesn't exist
     */
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
};
/** @internal */
export declare const CreateAppRequestIdentityMatching$inboundSchema: z.ZodType<CreateAppRequestIdentityMatching, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CreateAppRequestIdentityMatching$outboundSchema: z.ZodType<CreateAppRequestIdentityMatching, z.ZodTypeDef, CreateAppRequestIdentityMatching>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppRequestIdentityMatching$ {
    /** @deprecated use `CreateAppRequestIdentityMatching$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppRequestIdentityMatching, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppRequestIdentityMatching$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppRequestIdentityMatching, z.ZodTypeDef, CreateAppRequestIdentityMatching>;
}
/** @internal */
export declare const CreateAppRequest$inboundSchema: z.ZodType<CreateAppRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppRequest$Outbound = {
    certifyPolicyId?: string | null | undefined;
    description?: string | null | undefined;
    displayName: string;
    grantPolicyId?: string | null | undefined;
    identityMatching?: string | null | undefined;
    monthlyCostUsd?: number | null | undefined;
    owners?: Array<string> | null | undefined;
    revokePolicyId?: string | null | undefined;
    strictAccessEntitlementProvisioning?: boolean | null | undefined;
};
/** @internal */
export declare const CreateAppRequest$outboundSchema: z.ZodType<CreateAppRequest$Outbound, z.ZodTypeDef, CreateAppRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppRequest$ {
    /** @deprecated use `CreateAppRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppRequest$Outbound, z.ZodTypeDef, CreateAppRequest>;
    /** @deprecated use `CreateAppRequest$Outbound` instead. */
    type Outbound = CreateAppRequest$Outbound;
}
export declare function createAppRequestToJSON(createAppRequest: CreateAppRequest): string;
export declare function createAppRequestFromJSON(jsonString: string): SafeParseResult<CreateAppRequest, SDKValidationError>;
