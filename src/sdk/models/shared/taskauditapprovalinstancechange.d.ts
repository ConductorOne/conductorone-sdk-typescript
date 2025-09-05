import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ApprovalInstance, ApprovalInstance$Outbound } from "./approvalinstance.js";
/**
 * The TaskAuditApprovalInstanceChange message.
 */
export type TaskAuditApprovalInstanceChange = {
    instance?: ApprovalInstance | null | undefined;
};
/** @internal */
export declare const TaskAuditApprovalInstanceChange$inboundSchema: z.ZodType<TaskAuditApprovalInstanceChange, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditApprovalInstanceChange$Outbound = {
    instance?: ApprovalInstance$Outbound | null | undefined;
};
/** @internal */
export declare const TaskAuditApprovalInstanceChange$outboundSchema: z.ZodType<TaskAuditApprovalInstanceChange$Outbound, z.ZodTypeDef, TaskAuditApprovalInstanceChange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditApprovalInstanceChange$ {
    /** @deprecated use `TaskAuditApprovalInstanceChange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditApprovalInstanceChange, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditApprovalInstanceChange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditApprovalInstanceChange$Outbound, z.ZodTypeDef, TaskAuditApprovalInstanceChange>;
    /** @deprecated use `TaskAuditApprovalInstanceChange$Outbound` instead. */
    type Outbound = TaskAuditApprovalInstanceChange$Outbound;
}
export declare function taskAuditApprovalInstanceChangeToJSON(taskAuditApprovalInstanceChange: TaskAuditApprovalInstanceChange): string;
export declare function taskAuditApprovalInstanceChangeFromJSON(jsonString: string): SafeParseResult<TaskAuditApprovalInstanceChange, SDKValidationError>;
