import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditExpressionPolicyStepError message.
 */
export type TaskAuditExpressionPolicyStepError = {
    /**
     * The error field.
     */
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExpressionPolicyStepError$inboundSchema: z.ZodType<TaskAuditExpressionPolicyStepError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditExpressionPolicyStepError$Outbound = {
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditExpressionPolicyStepError$outboundSchema: z.ZodType<TaskAuditExpressionPolicyStepError$Outbound, z.ZodTypeDef, TaskAuditExpressionPolicyStepError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditExpressionPolicyStepError$ {
    /** @deprecated use `TaskAuditExpressionPolicyStepError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditExpressionPolicyStepError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditExpressionPolicyStepError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditExpressionPolicyStepError$Outbound, z.ZodTypeDef, TaskAuditExpressionPolicyStepError>;
    /** @deprecated use `TaskAuditExpressionPolicyStepError$Outbound` instead. */
    type Outbound = TaskAuditExpressionPolicyStepError$Outbound;
}
export declare function taskAuditExpressionPolicyStepErrorToJSON(taskAuditExpressionPolicyStepError: TaskAuditExpressionPolicyStepError): string;
export declare function taskAuditExpressionPolicyStepErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditExpressionPolicyStepError, SDKValidationError>;
