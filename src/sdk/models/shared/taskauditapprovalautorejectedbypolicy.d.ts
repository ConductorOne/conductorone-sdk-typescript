import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditApprovalAutoRejectedByPolicy message.
 */
export type TaskAuditApprovalAutoRejectedByPolicy = {};
/** @internal */
export declare const TaskAuditApprovalAutoRejectedByPolicy$inboundSchema: z.ZodType<TaskAuditApprovalAutoRejectedByPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditApprovalAutoRejectedByPolicy$Outbound = {};
/** @internal */
export declare const TaskAuditApprovalAutoRejectedByPolicy$outboundSchema: z.ZodType<TaskAuditApprovalAutoRejectedByPolicy$Outbound, z.ZodTypeDef, TaskAuditApprovalAutoRejectedByPolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditApprovalAutoRejectedByPolicy$ {
    /** @deprecated use `TaskAuditApprovalAutoRejectedByPolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditApprovalAutoRejectedByPolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditApprovalAutoRejectedByPolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditApprovalAutoRejectedByPolicy$Outbound, z.ZodTypeDef, TaskAuditApprovalAutoRejectedByPolicy>;
    /** @deprecated use `TaskAuditApprovalAutoRejectedByPolicy$Outbound` instead. */
    type Outbound = TaskAuditApprovalAutoRejectedByPolicy$Outbound;
}
export declare function taskAuditApprovalAutoRejectedByPolicyToJSON(taskAuditApprovalAutoRejectedByPolicy: TaskAuditApprovalAutoRejectedByPolicy): string;
export declare function taskAuditApprovalAutoRejectedByPolicyFromJSON(jsonString: string): SafeParseResult<TaskAuditApprovalAutoRejectedByPolicy, SDKValidationError>;
