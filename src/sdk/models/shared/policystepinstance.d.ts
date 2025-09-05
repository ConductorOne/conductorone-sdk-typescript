import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AcceptInstance, AcceptInstance$Outbound } from "./acceptinstance.js";
import { ApprovalInstance, ApprovalInstance$Outbound } from "./approvalinstance.js";
import { FormInstance, FormInstance$Outbound } from "./forminstance.js";
import { ProvisionInstance, ProvisionInstance$Outbound } from "./provisioninstance.js";
import { RejectInstance, RejectInstance$Outbound } from "./rejectinstance.js";
import { WaitInstance, WaitInstance$Outbound } from "./waitinstance.js";
/**
 * The state of the step, which is either active or done.
 */
export declare const PolicyStepInstanceState: {
    readonly PolicyStepStateUnspecified: "POLICY_STEP_STATE_UNSPECIFIED";
    readonly PolicyStepStateActive: "POLICY_STEP_STATE_ACTIVE";
    readonly PolicyStepStateDone: "POLICY_STEP_STATE_DONE";
};
/**
 * The state of the step, which is either active or done.
 */
export type PolicyStepInstanceState = OpenEnum<typeof PolicyStepInstanceState>;
/**
 * The policy step instance includes a reference to an instance of a policy step that tracks state and has a unique ID.
 *
 * @remarks
 *
 * This message contains a oneof named instance. Only a single field of the following list may be set at a time:
 *   - approval
 *   - provision
 *   - accept
 *   - reject
 *   - wait
 *   - form
 */
export type PolicyStepInstance = {
    accept?: AcceptInstance | null | undefined;
    approval?: ApprovalInstance | null | undefined;
    form?: FormInstance | null | undefined;
    /**
     * The ID of the PolicyStepInstance. This is required by many action submission endpoints to indicate what step you're approving.
     */
    id?: string | null | undefined;
    /**
     * The policy generation id refers to the version of the policy that this step was created from.
     */
    policyGenerationId?: string | null | undefined;
    provision?: ProvisionInstance | null | undefined;
    reject?: RejectInstance | null | undefined;
    /**
     * The state of the step, which is either active or done.
     */
    state?: PolicyStepInstanceState | null | undefined;
    wait?: WaitInstance | null | undefined;
};
/** @internal */
export declare const PolicyStepInstanceState$inboundSchema: z.ZodType<PolicyStepInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PolicyStepInstanceState$outboundSchema: z.ZodType<PolicyStepInstanceState, z.ZodTypeDef, PolicyStepInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyStepInstanceState$ {
    /** @deprecated use `PolicyStepInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyStepInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyStepInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyStepInstanceState, z.ZodTypeDef, PolicyStepInstanceState>;
}
/** @internal */
export declare const PolicyStepInstance$inboundSchema: z.ZodType<PolicyStepInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type PolicyStepInstance$Outbound = {
    accept?: AcceptInstance$Outbound | null | undefined;
    approval?: ApprovalInstance$Outbound | null | undefined;
    form?: FormInstance$Outbound | null | undefined;
    id?: string | null | undefined;
    policyGenerationId?: string | null | undefined;
    provision?: ProvisionInstance$Outbound | null | undefined;
    reject?: RejectInstance$Outbound | null | undefined;
    state?: string | null | undefined;
    wait?: WaitInstance$Outbound | null | undefined;
};
/** @internal */
export declare const PolicyStepInstance$outboundSchema: z.ZodType<PolicyStepInstance$Outbound, z.ZodTypeDef, PolicyStepInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyStepInstance$ {
    /** @deprecated use `PolicyStepInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyStepInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyStepInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyStepInstance$Outbound, z.ZodTypeDef, PolicyStepInstance>;
    /** @deprecated use `PolicyStepInstance$Outbound` instead. */
    type Outbound = PolicyStepInstance$Outbound;
}
export declare function policyStepInstanceToJSON(policyStepInstance: PolicyStepInstance): string;
export declare function policyStepInstanceFromJSON(jsonString: string): SafeParseResult<PolicyStepInstance, SDKValidationError>;
