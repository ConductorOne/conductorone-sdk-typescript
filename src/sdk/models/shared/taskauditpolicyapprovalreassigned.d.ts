import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The TaskAuditPolicyApprovalReassigned message.
 */
export type TaskAuditPolicyApprovalReassigned = {
    /**
     * The newPolicyStepId field.
     */
    newPolicyStepId?: string | null | undefined;
    /**
     * The newUsers field.
     */
    newUsers?: Array<string> | null | undefined;
    /**
     * The oldPolicyStepId field.
     */
    oldPolicyStepId?: string | null | undefined;
    /**
     * The users field.
     */
    users?: Array<User> | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyApprovalReassigned$inboundSchema: z.ZodType<TaskAuditPolicyApprovalReassigned, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditPolicyApprovalReassigned$Outbound = {
    newPolicyStepId?: string | null | undefined;
    newUsers?: Array<string> | null | undefined;
    oldPolicyStepId?: string | null | undefined;
    users?: Array<User$Outbound> | null | undefined;
};
/** @internal */
export declare const TaskAuditPolicyApprovalReassigned$outboundSchema: z.ZodType<TaskAuditPolicyApprovalReassigned$Outbound, z.ZodTypeDef, TaskAuditPolicyApprovalReassigned>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditPolicyApprovalReassigned$ {
    /** @deprecated use `TaskAuditPolicyApprovalReassigned$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditPolicyApprovalReassigned, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditPolicyApprovalReassigned$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditPolicyApprovalReassigned$Outbound, z.ZodTypeDef, TaskAuditPolicyApprovalReassigned>;
    /** @deprecated use `TaskAuditPolicyApprovalReassigned$Outbound` instead. */
    type Outbound = TaskAuditPolicyApprovalReassigned$Outbound;
}
export declare function taskAuditPolicyApprovalReassignedToJSON(taskAuditPolicyApprovalReassigned: TaskAuditPolicyApprovalReassigned): string;
export declare function taskAuditPolicyApprovalReassignedFromJSON(jsonString: string): SafeParseResult<TaskAuditPolicyApprovalReassigned, SDKValidationError>;
