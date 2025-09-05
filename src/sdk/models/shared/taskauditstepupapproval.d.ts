import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditStepUpApproval message.
 */
export type TaskAuditStepUpApproval = {
    /**
     * The stepUpTransactionId field.
     */
    stepUpTransactionId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStepUpApproval$inboundSchema: z.ZodType<TaskAuditStepUpApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditStepUpApproval$Outbound = {
    stepUpTransactionId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStepUpApproval$outboundSchema: z.ZodType<TaskAuditStepUpApproval$Outbound, z.ZodTypeDef, TaskAuditStepUpApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditStepUpApproval$ {
    /** @deprecated use `TaskAuditStepUpApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditStepUpApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditStepUpApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditStepUpApproval$Outbound, z.ZodTypeDef, TaskAuditStepUpApproval>;
    /** @deprecated use `TaskAuditStepUpApproval$Outbound` instead. */
    type Outbound = TaskAuditStepUpApproval$Outbound;
}
export declare function taskAuditStepUpApprovalToJSON(taskAuditStepUpApproval: TaskAuditStepUpApproval): string;
export declare function taskAuditStepUpApprovalFromJSON(jsonString: string): SafeParseResult<TaskAuditStepUpApproval, SDKValidationError>;
