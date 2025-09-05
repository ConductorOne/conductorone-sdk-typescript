import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditNewTask message.
 */
export type TaskAuditNewTask = {};
/** @internal */
export declare const TaskAuditNewTask$inboundSchema: z.ZodType<TaskAuditNewTask, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditNewTask$Outbound = {};
/** @internal */
export declare const TaskAuditNewTask$outboundSchema: z.ZodType<TaskAuditNewTask$Outbound, z.ZodTypeDef, TaskAuditNewTask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditNewTask$ {
    /** @deprecated use `TaskAuditNewTask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditNewTask, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditNewTask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditNewTask$Outbound, z.ZodTypeDef, TaskAuditNewTask>;
    /** @deprecated use `TaskAuditNewTask$Outbound` instead. */
    type Outbound = TaskAuditNewTask$Outbound;
}
export declare function taskAuditNewTaskToJSON(taskAuditNewTask: TaskAuditNewTask): string;
export declare function taskAuditNewTaskFromJSON(jsonString: string): SafeParseResult<TaskAuditNewTask, SDKValidationError>;
