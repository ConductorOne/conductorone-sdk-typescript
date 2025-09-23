import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyPostActions, PolicyPostActions$Outbound } from "./policypostactions.js";
import { PolicySteps, PolicySteps$Outbound } from "./policysteps.js";
import { PolicyStepsInput, PolicyStepsInput$Outbound } from "./policystepsinput.js";
import { Rule, Rule$Outbound } from "./rule.js";
/**
 * Indicates the type of this policy. Can also be used to get the value from policySteps.
 */
export declare const PolicyType: {
    readonly PolicyTypeUnspecified: "POLICY_TYPE_UNSPECIFIED";
    readonly PolicyTypeGrant: "POLICY_TYPE_GRANT";
    readonly PolicyTypeRevoke: "POLICY_TYPE_REVOKE";
    readonly PolicyTypeCertify: "POLICY_TYPE_CERTIFY";
    readonly PolicyTypeAccessRequest: "POLICY_TYPE_ACCESS_REQUEST";
    readonly PolicyTypeProvision: "POLICY_TYPE_PROVISION";
};
/**
 * Indicates the type of this policy. Can also be used to get the value from policySteps.
 */
export type PolicyType = OpenEnum<typeof PolicyType>;
/**
 * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
 */
export type Policy = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the Policy.
     */
    description?: string | null | undefined;
    /**
     * The display name of the Policy.
     */
    displayName?: string | null | undefined;
    /**
     * The ID of the Policy.
     */
    id?: string | null | undefined;
    /**
     * A map of string(policy type) to steps in a policy. This structure is leftover from a previous design, and should only ever have one key->value set.
     */
    policySteps?: {
        [k: string]: PolicySteps;
    } | null | undefined;
    /**
     * Indicates the type of this policy. Can also be used to get the value from policySteps.
     */
    policyType?: PolicyType | null | undefined;
    /**
     * An array of actions (ordered) to take place after a policy completes processing.
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
    /**
     * Whether this policy is a builtin system policy. Builtin system policies cannot be edited.
     */
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
};
/**
 * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
 */
export type PolicyInput = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the Policy.
     */
    description?: string | null | undefined;
    /**
     * The display name of the Policy.
     */
    displayName?: string | null | undefined;
    /**
     * A map of string(policy type) to steps in a policy. This structure is leftover from a previous design, and should only ever have one key->value set.
     */
    policySteps?: {
        [k: string]: PolicyStepsInput;
    } | null | undefined;
    /**
     * Indicates the type of this policy. Can also be used to get the value from policySteps.
     */
    policyType?: PolicyType | null | undefined;
    /**
     * An array of actions (ordered) to take place after a policy completes processing.
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
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const PolicyType$inboundSchema: z.ZodType<PolicyType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PolicyType$outboundSchema: z.ZodType<PolicyType, z.ZodTypeDef, PolicyType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyType$ {
    /** @deprecated use `PolicyType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyType, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyType, z.ZodTypeDef, PolicyType>;
}
/** @internal */
export declare const Policy$inboundSchema: z.ZodType<Policy, z.ZodTypeDef, unknown>;
/** @internal */
export type Policy$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    id?: string | null | undefined;
    policySteps?: {
        [k: string]: PolicySteps$Outbound;
    } | null | undefined;
    policyType?: string | null | undefined;
    postActions?: Array<PolicyPostActions$Outbound> | null | undefined;
    reassignTasksToDelegates?: boolean | null | undefined;
    rules?: Array<Rule$Outbound> | null | undefined;
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const Policy$outboundSchema: z.ZodType<Policy$Outbound, z.ZodTypeDef, Policy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Policy$ {
    /** @deprecated use `Policy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Policy, z.ZodTypeDef, unknown>;
    /** @deprecated use `Policy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Policy$Outbound, z.ZodTypeDef, Policy>;
    /** @deprecated use `Policy$Outbound` instead. */
    type Outbound = Policy$Outbound;
}
export declare function policyToJSON(policy: Policy): string;
export declare function policyFromJSON(jsonString: string): SafeParseResult<Policy, SDKValidationError>;
/** @internal */
export declare const PolicyInput$inboundSchema: z.ZodType<PolicyInput, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyInput$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    policySteps?: {
        [k: string]: PolicyStepsInput$Outbound;
    } | null | undefined;
    policyType?: string | null | undefined;
    postActions?: Array<PolicyPostActions$Outbound> | null | undefined;
    reassignTasksToDelegates?: boolean | null | undefined;
    rules?: Array<Rule$Outbound> | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const PolicyInput$outboundSchema: z.ZodType<PolicyInput$Outbound, z.ZodTypeDef, PolicyInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyInput$ {
    /** @deprecated use `PolicyInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyInput$Outbound, z.ZodTypeDef, PolicyInput>;
    /** @deprecated use `PolicyInput$Outbound` instead. */
    type Outbound = PolicyInput$Outbound;
}
export declare function policyInputToJSON(policyInput: PolicyInput): string;
export declare function policyInputFromJSON(jsonString: string): SafeParseResult<PolicyInput, SDKValidationError>;
