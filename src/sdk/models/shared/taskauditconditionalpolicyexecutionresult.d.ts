import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditConditionalPolicyExecutionResult message.
 */
export type TaskAuditConditionalPolicyExecutionResult = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
    /**
     * The conditionMatched field.
     */
    conditionMatched?: boolean | null | undefined;
    /**
     * The defaultCondition field.
     */
    defaultCondition?: boolean | null | undefined;
    /**
     * The error field.
     */
    error?: string | null | undefined;
    /**
     * The policyKey field.
     */
    policyKey?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditConditionalPolicyExecutionResult$inboundSchema: z.ZodType<TaskAuditConditionalPolicyExecutionResult, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditConditionalPolicyExecutionResult$Outbound = {
    condition?: string | null | undefined;
    conditionMatched?: boolean | null | undefined;
    defaultCondition?: boolean | null | undefined;
    error?: string | null | undefined;
    policyKey?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditConditionalPolicyExecutionResult$outboundSchema: z.ZodType<TaskAuditConditionalPolicyExecutionResult$Outbound, z.ZodTypeDef, TaskAuditConditionalPolicyExecutionResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditConditionalPolicyExecutionResult$ {
    /** @deprecated use `TaskAuditConditionalPolicyExecutionResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditConditionalPolicyExecutionResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditConditionalPolicyExecutionResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditConditionalPolicyExecutionResult$Outbound, z.ZodTypeDef, TaskAuditConditionalPolicyExecutionResult>;
    /** @deprecated use `TaskAuditConditionalPolicyExecutionResult$Outbound` instead. */
    type Outbound = TaskAuditConditionalPolicyExecutionResult$Outbound;
}
export declare function taskAuditConditionalPolicyExecutionResultToJSON(taskAuditConditionalPolicyExecutionResult: TaskAuditConditionalPolicyExecutionResult): string;
export declare function taskAuditConditionalPolicyExecutionResultFromJSON(jsonString: string): SafeParseResult<TaskAuditConditionalPolicyExecutionResult, SDKValidationError>;
