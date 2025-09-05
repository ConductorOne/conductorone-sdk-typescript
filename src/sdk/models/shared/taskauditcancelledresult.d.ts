import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditCancelledResult message.
 */
export type TaskAuditCancelledResult = {};
/** @internal */
export declare const TaskAuditCancelledResult$inboundSchema: z.ZodType<TaskAuditCancelledResult, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditCancelledResult$Outbound = {};
/** @internal */
export declare const TaskAuditCancelledResult$outboundSchema: z.ZodType<TaskAuditCancelledResult$Outbound, z.ZodTypeDef, TaskAuditCancelledResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditCancelledResult$ {
    /** @deprecated use `TaskAuditCancelledResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditCancelledResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditCancelledResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditCancelledResult$Outbound, z.ZodTypeDef, TaskAuditCancelledResult>;
    /** @deprecated use `TaskAuditCancelledResult$Outbound` instead. */
    type Outbound = TaskAuditCancelledResult$Outbound;
}
export declare function taskAuditCancelledResultToJSON(taskAuditCancelledResult: TaskAuditCancelledResult): string;
export declare function taskAuditCancelledResultFromJSON(jsonString: string): SafeParseResult<TaskAuditCancelledResult, SDKValidationError>;
