import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
import { PolicyStep, PolicyStep$Outbound } from "./policystep.js";
import { PolicyStepInstance, PolicyStepInstance$Outbound } from "./policystepinstance.js";
/**
 * A policy instance is an object that contains a reference to the policy it was created from, the currently executing step, the next steps, and the history of previously completed steps.
 */
export type PolicyInstance = {
    current?: PolicyStepInstance | null | undefined;
    /**
     * An array of steps that were previously processed by the ticket with their outcomes set, in order.
     */
    history?: Array<PolicyStepInstance> | null | undefined;
    /**
     * An array of steps that will be processed by the ticket, in order.
     */
    next?: Array<PolicyStep> | null | undefined;
    policy?: Policy | null | undefined;
};
/** @internal */
export declare const PolicyInstance$inboundSchema: z.ZodType<PolicyInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyInstance$Outbound = {
    current?: PolicyStepInstance$Outbound | null | undefined;
    history?: Array<PolicyStepInstance$Outbound> | null | undefined;
    next?: Array<PolicyStep$Outbound> | null | undefined;
    policy?: Policy$Outbound | null | undefined;
};
/** @internal */
export declare const PolicyInstance$outboundSchema: z.ZodType<PolicyInstance$Outbound, z.ZodTypeDef, PolicyInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyInstance$ {
    /** @deprecated use `PolicyInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyInstance$Outbound, z.ZodTypeDef, PolicyInstance>;
    /** @deprecated use `PolicyInstance$Outbound` instead. */
    type Outbound = PolicyInstance$Outbound;
}
export declare function policyInstanceToJSON(policyInstance: PolicyInstance): string;
export declare function policyInstanceFromJSON(jsonString: string): SafeParseResult<PolicyInstance, SDKValidationError>;
