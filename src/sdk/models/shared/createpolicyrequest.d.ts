import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyPostActions, PolicyPostActions$Outbound } from "./policypostactions.js";
import { PolicyStepsInput, PolicyStepsInput$Outbound } from "./policystepsinput.js";
import { Rule, Rule$Outbound } from "./rule.js";
/**
 * The enum of the policy type.
 */
export declare const CreatePolicyRequestPolicyType: {
    readonly PolicyTypeUnspecified: "POLICY_TYPE_UNSPECIFIED";
    readonly PolicyTypeGrant: "POLICY_TYPE_GRANT";
    readonly PolicyTypeRevoke: "POLICY_TYPE_REVOKE";
    readonly PolicyTypeCertify: "POLICY_TYPE_CERTIFY";
    readonly PolicyTypeAccessRequest: "POLICY_TYPE_ACCESS_REQUEST";
    readonly PolicyTypeProvision: "POLICY_TYPE_PROVISION";
};
/**
 * The enum of the policy type.
 */
export type CreatePolicyRequestPolicyType = OpenEnum<typeof CreatePolicyRequestPolicyType>;
/**
 * The CreatePolicyRequest message is used to create a new policy.
 */
export type CreatePolicyRequest = {
    /**
     * The description of the new policy.
     */
    description?: string | null | undefined;
    /**
     * The display name of the new policy.
     */
    displayName: string;
    /**
     * The map of policy type to policy steps. The key is the stringified version of the enum. See other policies for examples.
     */
    policySteps?: {
        [k: string]: PolicyStepsInput;
    } | null | undefined;
    /**
     * The enum of the policy type.
     */
    policyType?: CreatePolicyRequestPolicyType | null | undefined;
    /**
     * Actions to occur after a policy finishes. As of now this is only valid on a certify policy to remediate a denied certification immediately.
     */
    postActions?: Array<PolicyPostActions> | null | undefined;
    /**
     * Deprecated. Use setting in policy step instead
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    reassignTasksToDelegates?: boolean | null | undefined;
    /**
     * The rules field.
     */
    rules?: Array<Rule> | null | undefined;
};
/** @internal */
export declare const CreatePolicyRequestPolicyType$inboundSchema: z.ZodType<CreatePolicyRequestPolicyType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CreatePolicyRequestPolicyType$outboundSchema: z.ZodType<CreatePolicyRequestPolicyType, z.ZodTypeDef, CreatePolicyRequestPolicyType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreatePolicyRequestPolicyType$ {
    /** @deprecated use `CreatePolicyRequestPolicyType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreatePolicyRequestPolicyType, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreatePolicyRequestPolicyType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreatePolicyRequestPolicyType, z.ZodTypeDef, CreatePolicyRequestPolicyType>;
}
/** @internal */
export declare const CreatePolicyRequest$inboundSchema: z.ZodType<CreatePolicyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreatePolicyRequest$Outbound = {
    description?: string | null | undefined;
    displayName: string;
    policySteps?: {
        [k: string]: PolicyStepsInput$Outbound;
    } | null | undefined;
    policyType?: string | null | undefined;
    postActions?: Array<PolicyPostActions$Outbound> | null | undefined;
    reassignTasksToDelegates?: boolean | null | undefined;
    rules?: Array<Rule$Outbound> | null | undefined;
};
/** @internal */
export declare const CreatePolicyRequest$outboundSchema: z.ZodType<CreatePolicyRequest$Outbound, z.ZodTypeDef, CreatePolicyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreatePolicyRequest$ {
    /** @deprecated use `CreatePolicyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreatePolicyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreatePolicyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreatePolicyRequest$Outbound, z.ZodTypeDef, CreatePolicyRequest>;
    /** @deprecated use `CreatePolicyRequest$Outbound` instead. */
    type Outbound = CreatePolicyRequest$Outbound;
}
export declare function createPolicyRequestToJSON(createPolicyRequest: CreatePolicyRequest): string;
export declare function createPolicyRequestFromJSON(jsonString: string): SafeParseResult<CreatePolicyRequest, SDKValidationError>;
