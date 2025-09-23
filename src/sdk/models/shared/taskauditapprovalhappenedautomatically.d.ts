import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditApprovalHappenedAutomatically message.
 */
export type TaskAuditApprovalHappenedAutomatically = {};
/** @internal */
export declare const TaskAuditApprovalHappenedAutomatically$inboundSchema: z.ZodType<TaskAuditApprovalHappenedAutomatically, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditApprovalHappenedAutomatically$Outbound = {};
/** @internal */
export declare const TaskAuditApprovalHappenedAutomatically$outboundSchema: z.ZodType<TaskAuditApprovalHappenedAutomatically$Outbound, z.ZodTypeDef, TaskAuditApprovalHappenedAutomatically>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditApprovalHappenedAutomatically$ {
    /** @deprecated use `TaskAuditApprovalHappenedAutomatically$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditApprovalHappenedAutomatically, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditApprovalHappenedAutomatically$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditApprovalHappenedAutomatically$Outbound, z.ZodTypeDef, TaskAuditApprovalHappenedAutomatically>;
    /** @deprecated use `TaskAuditApprovalHappenedAutomatically$Outbound` instead. */
    type Outbound = TaskAuditApprovalHappenedAutomatically$Outbound;
}
export declare function taskAuditApprovalHappenedAutomaticallyToJSON(taskAuditApprovalHappenedAutomatically: TaskAuditApprovalHappenedAutomatically): string;
export declare function taskAuditApprovalHappenedAutomaticallyFromJSON(jsonString: string): SafeParseResult<TaskAuditApprovalHappenedAutomatically, SDKValidationError>;
