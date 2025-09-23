import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The TaskAuditReassignedToDelegate message.
 */
export type TaskAuditReassignedToDelegate = {
    delegatedAssigneeUser?: User | null | undefined;
    /**
     * The delegatedAssigneeUserId field.
     */
    delegatedAssigneeUserId?: string | null | undefined;
    originalAssigneeUser?: User | null | undefined;
    /**
     * The originalAssigneeUserId field.
     */
    originalAssigneeUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditReassignedToDelegate$inboundSchema: z.ZodType<TaskAuditReassignedToDelegate, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditReassignedToDelegate$Outbound = {
    delegatedAssigneeUser?: User$Outbound | null | undefined;
    delegatedAssigneeUserId?: string | null | undefined;
    originalAssigneeUser?: User$Outbound | null | undefined;
    originalAssigneeUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditReassignedToDelegate$outboundSchema: z.ZodType<TaskAuditReassignedToDelegate$Outbound, z.ZodTypeDef, TaskAuditReassignedToDelegate>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditReassignedToDelegate$ {
    /** @deprecated use `TaskAuditReassignedToDelegate$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditReassignedToDelegate, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditReassignedToDelegate$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditReassignedToDelegate$Outbound, z.ZodTypeDef, TaskAuditReassignedToDelegate>;
    /** @deprecated use `TaskAuditReassignedToDelegate$Outbound` instead. */
    type Outbound = TaskAuditReassignedToDelegate$Outbound;
}
export declare function taskAuditReassignedToDelegateToJSON(taskAuditReassignedToDelegate: TaskAuditReassignedToDelegate): string;
export declare function taskAuditReassignedToDelegateFromJSON(jsonString: string): SafeParseResult<TaskAuditReassignedToDelegate, SDKValidationError>;
