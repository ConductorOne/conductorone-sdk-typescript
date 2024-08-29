/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { PolicyPostActions, PolicyPostActions$ } from "./policypostactions";
import { PolicySteps, PolicySteps$ } from "./policysteps";
import { Rule, Rule$ } from "./rule";
import * as z from "zod";

/**
 * Indicates the type of this policy. Can also be used to get the value from policySteps.
 */
export enum PolicyPolicyType {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    PolicyTypeGrant = "POLICY_TYPE_GRANT",
    PolicyTypeRevoke = "POLICY_TYPE_REVOKE",
    PolicyTypeCertify = "POLICY_TYPE_CERTIFY",
    PolicyTypeAccessRequest = "POLICY_TYPE_ACCESS_REQUEST",
    PolicyTypeProvision = "POLICY_TYPE_PROVISION",
}

/**
 * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
 */
export type Policy = {
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    /**
     * The description of the Policy.
     */
    description?: string | undefined;
    /**
     * The display name of the Policy.
     */
    displayName?: string | undefined;
    /**
     * The ID of the Policy.
     */
    id?: string | undefined;
    /**
     * A map of string(policy type) to steps in a policy. This structure is leftover from a previous design, and should only ever have one key->value set.
     */
    policySteps?: Record<string, PolicySteps> | undefined;
    /**
     * Indicates the type of this policy. Can also be used to get the value from policySteps.
     */
    policyType?: PolicyPolicyType | undefined;
    /**
     * An array of actions (ordered) to take place after a policy completes processing.
     */
    postActions?: Array<PolicyPostActions> | null | undefined;
    /**
     * A policy configuration option that allows for reassinging tasks to delgated users. This level of delegation refers to the individual delegates users set on their account.
     */
    reassignTasksToDelegates?: boolean | undefined;
    /**
     * The rules field.
     */
    rules?: Array<Rule> | null | undefined;
    /**
     * Whether this policy is a builtin system policy. Builtin system policies cannot be edited.
     */
    systemBuiltin?: boolean | undefined;
    updatedAt?: Date | undefined;
};

/**
 * A policy describes the behavior of the ConductorOne system when processing a task. You can describe the type, approvers, fallback behavior, and escalation processes.
 */
export type PolicyInput = {
    /**
     * The description of the Policy.
     */
    description?: string | undefined;
    /**
     * The display name of the Policy.
     */
    displayName?: string | undefined;
    /**
     * A map of string(policy type) to steps in a policy. This structure is leftover from a previous design, and should only ever have one key->value set.
     */
    policySteps?: Record<string, PolicySteps> | undefined;
    /**
     * Indicates the type of this policy. Can also be used to get the value from policySteps.
     */
    policyType?: PolicyPolicyType | undefined;
    /**
     * An array of actions (ordered) to take place after a policy completes processing.
     */
    postActions?: Array<PolicyPostActions> | null | undefined;
    /**
     * A policy configuration option that allows for reassinging tasks to delgated users. This level of delegation refers to the individual delegates users set on their account.
     */
    reassignTasksToDelegates?: boolean | undefined;
    /**
     * The rules field.
     */
    rules?: Array<Rule> | null | undefined;
};

/** @internal */
export const PolicyPolicyType$ = z.nativeEnum(PolicyPolicyType);

/** @internal */
export namespace Policy$ {
    export type Inbound = {
        createdAt?: string | undefined;
        deletedAt?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        policySteps?: Record<string, PolicySteps$.Inbound> | undefined;
        policyType?: PolicyPolicyType | undefined;
        postActions?: Array<PolicyPostActions$.Inbound> | null | undefined;
        reassignTasksToDelegates?: boolean | undefined;
        rules?: Array<Rule$.Inbound> | null | undefined;
        systemBuiltin?: boolean | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Policy, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            deletedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            id: z.string().optional(),
            policySteps: z.record(PolicySteps$.inboundSchema).optional(),
            policyType: PolicyPolicyType$.optional(),
            postActions: z.nullable(z.array(PolicyPostActions$.inboundSchema)).optional(),
            reassignTasksToDelegates: z.boolean().optional(),
            rules: z.nullable(z.array(Rule$.inboundSchema)).optional(),
            systemBuiltin: z.boolean().optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.policySteps === undefined ? null : { policySteps: v.policySteps }),
                ...(v.policyType === undefined ? null : { policyType: v.policyType }),
                ...(v.postActions === undefined ? null : { postActions: v.postActions }),
                ...(v.reassignTasksToDelegates === undefined
                    ? null
                    : { reassignTasksToDelegates: v.reassignTasksToDelegates }),
                ...(v.rules === undefined ? null : { rules: v.rules }),
                ...(v.systemBuiltin === undefined ? null : { systemBuiltin: v.systemBuiltin }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        createdAt?: string | undefined;
        deletedAt?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        id?: string | undefined;
        policySteps?: Record<string, PolicySteps$.Outbound> | undefined;
        policyType?: PolicyPolicyType | undefined;
        postActions?: Array<PolicyPostActions$.Outbound> | null | undefined;
        reassignTasksToDelegates?: boolean | undefined;
        rules?: Array<Rule$.Outbound> | null | undefined;
        systemBuiltin?: boolean | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Policy> = z
        .object({
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            deletedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            id: z.string().optional(),
            policySteps: z.record(PolicySteps$.outboundSchema).optional(),
            policyType: PolicyPolicyType$.optional(),
            postActions: z.nullable(z.array(PolicyPostActions$.outboundSchema)).optional(),
            reassignTasksToDelegates: z.boolean().optional(),
            rules: z.nullable(z.array(Rule$.outboundSchema)).optional(),
            systemBuiltin: z.boolean().optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.policySteps === undefined ? null : { policySteps: v.policySteps }),
                ...(v.policyType === undefined ? null : { policyType: v.policyType }),
                ...(v.postActions === undefined ? null : { postActions: v.postActions }),
                ...(v.reassignTasksToDelegates === undefined
                    ? null
                    : { reassignTasksToDelegates: v.reassignTasksToDelegates }),
                ...(v.rules === undefined ? null : { rules: v.rules }),
                ...(v.systemBuiltin === undefined ? null : { systemBuiltin: v.systemBuiltin }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}

/** @internal */
export namespace PolicyInput$ {
    export type Inbound = {
        description?: string | undefined;
        displayName?: string | undefined;
        policySteps?: Record<string, PolicySteps$.Inbound> | undefined;
        policyType?: PolicyPolicyType | undefined;
        postActions?: Array<PolicyPostActions$.Inbound> | null | undefined;
        reassignTasksToDelegates?: boolean | undefined;
        rules?: Array<Rule$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<PolicyInput, z.ZodTypeDef, Inbound> = z
        .object({
            description: z.string().optional(),
            displayName: z.string().optional(),
            policySteps: z.record(PolicySteps$.inboundSchema).optional(),
            policyType: PolicyPolicyType$.optional(),
            postActions: z.nullable(z.array(PolicyPostActions$.inboundSchema)).optional(),
            reassignTasksToDelegates: z.boolean().optional(),
            rules: z.nullable(z.array(Rule$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.policySteps === undefined ? null : { policySteps: v.policySteps }),
                ...(v.policyType === undefined ? null : { policyType: v.policyType }),
                ...(v.postActions === undefined ? null : { postActions: v.postActions }),
                ...(v.reassignTasksToDelegates === undefined
                    ? null
                    : { reassignTasksToDelegates: v.reassignTasksToDelegates }),
                ...(v.rules === undefined ? null : { rules: v.rules }),
            };
        });

    export type Outbound = {
        description?: string | undefined;
        displayName?: string | undefined;
        policySteps?: Record<string, PolicySteps$.Outbound> | undefined;
        policyType?: PolicyPolicyType | undefined;
        postActions?: Array<PolicyPostActions$.Outbound> | null | undefined;
        reassignTasksToDelegates?: boolean | undefined;
        rules?: Array<Rule$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PolicyInput> = z
        .object({
            description: z.string().optional(),
            displayName: z.string().optional(),
            policySteps: z.record(PolicySteps$.outboundSchema).optional(),
            policyType: PolicyPolicyType$.optional(),
            postActions: z.nullable(z.array(PolicyPostActions$.outboundSchema)).optional(),
            reassignTasksToDelegates: z.boolean().optional(),
            rules: z.nullable(z.array(Rule$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.policySteps === undefined ? null : { policySteps: v.policySteps }),
                ...(v.policyType === undefined ? null : { policyType: v.policyType }),
                ...(v.postActions === undefined ? null : { postActions: v.postActions }),
                ...(v.reassignTasksToDelegates === undefined
                    ? null
                    : { reassignTasksToDelegates: v.reassignTasksToDelegates }),
                ...(v.rules === undefined ? null : { rules: v.rules }),
            };
        });
}
