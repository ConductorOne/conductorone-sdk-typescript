import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditApprovalAutoAcceptedByPolicy message.
 */
export type TaskAuditApprovalAutoAcceptedByPolicy = {};
/** @internal */
export declare const TaskAuditApprovalAutoAcceptedByPolicy$inboundSchema: z.ZodType<TaskAuditApprovalAutoAcceptedByPolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditApprovalAutoAcceptedByPolicy$Outbound = {};
/** @internal */
export declare const TaskAuditApprovalAutoAcceptedByPolicy$outboundSchema: z.ZodType<TaskAuditApprovalAutoAcceptedByPolicy$Outbound, z.ZodTypeDef, TaskAuditApprovalAutoAcceptedByPolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditApprovalAutoAcceptedByPolicy$ {
    /** @deprecated use `TaskAuditApprovalAutoAcceptedByPolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditApprovalAutoAcceptedByPolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditApprovalAutoAcceptedByPolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditApprovalAutoAcceptedByPolicy$Outbound, z.ZodTypeDef, TaskAuditApprovalAutoAcceptedByPolicy>;
    /** @deprecated use `TaskAuditApprovalAutoAcceptedByPolicy$Outbound` instead. */
    type Outbound = TaskAuditApprovalAutoAcceptedByPolicy$Outbound;
}
export declare function taskAuditApprovalAutoAcceptedByPolicyToJSON(taskAuditApprovalAutoAcceptedByPolicy: TaskAuditApprovalAutoAcceptedByPolicy): string;
export declare function taskAuditApprovalAutoAcceptedByPolicyFromJSON(jsonString: string): SafeParseResult<TaskAuditApprovalAutoAcceptedByPolicy, SDKValidationError>;
