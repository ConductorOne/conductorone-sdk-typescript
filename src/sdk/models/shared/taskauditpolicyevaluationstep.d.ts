import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditPolicyEvaluationStep message.
 */
export type TaskAuditPolicyEvaluationStep = {
    /**
     * The stepComment field.
     */
    stepComment?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyEvaluationStep$inboundSchema: z.ZodType<TaskAuditPolicyEvaluationStep, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditPolicyEvaluationStep$Outbound = {
    stepComment?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyEvaluationStep$outboundSchema: z.ZodType<TaskAuditPolicyEvaluationStep$Outbound, z.ZodTypeDef, TaskAuditPolicyEvaluationStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditPolicyEvaluationStep$ {
    /** @deprecated use `TaskAuditPolicyEvaluationStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditPolicyEvaluationStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditPolicyEvaluationStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditPolicyEvaluationStep$Outbound, z.ZodTypeDef, TaskAuditPolicyEvaluationStep>;
    /** @deprecated use `TaskAuditPolicyEvaluationStep$Outbound` instead. */
    type Outbound = TaskAuditPolicyEvaluationStep$Outbound;
}
export declare function taskAuditPolicyEvaluationStepToJSON(taskAuditPolicyEvaluationStep: TaskAuditPolicyEvaluationStep): string;
export declare function taskAuditPolicyEvaluationStepFromJSON(jsonString: string): SafeParseResult<TaskAuditPolicyEvaluationStep, SDKValidationError>;
