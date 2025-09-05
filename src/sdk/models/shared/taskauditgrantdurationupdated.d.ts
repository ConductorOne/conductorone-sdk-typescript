import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditGrantDurationUpdated message.
 */
export type TaskAuditGrantDurationUpdated = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditGrantDurationUpdated$inboundSchema: z.ZodType<TaskAuditGrantDurationUpdated, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditGrantDurationUpdated$Outbound = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditGrantDurationUpdated$outboundSchema: z.ZodType<TaskAuditGrantDurationUpdated$Outbound, z.ZodTypeDef, TaskAuditGrantDurationUpdated>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditGrantDurationUpdated$ {
    /** @deprecated use `TaskAuditGrantDurationUpdated$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditGrantDurationUpdated, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditGrantDurationUpdated$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditGrantDurationUpdated$Outbound, z.ZodTypeDef, TaskAuditGrantDurationUpdated>;
    /** @deprecated use `TaskAuditGrantDurationUpdated$Outbound` instead. */
    type Outbound = TaskAuditGrantDurationUpdated$Outbound;
}
export declare function taskAuditGrantDurationUpdatedToJSON(taskAuditGrantDurationUpdated: TaskAuditGrantDurationUpdated): string;
export declare function taskAuditGrantDurationUpdatedFromJSON(jsonString: string): SafeParseResult<TaskAuditGrantDurationUpdated, SDKValidationError>;
