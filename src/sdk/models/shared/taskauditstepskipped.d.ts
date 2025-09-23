import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditStepSkipped message.
 */
export type TaskAuditStepSkipped = {
    /**
     * The skippedBy field.
     */
    skippedBy?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStepSkipped$inboundSchema: z.ZodType<TaskAuditStepSkipped, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditStepSkipped$Outbound = {
    skippedBy?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStepSkipped$outboundSchema: z.ZodType<TaskAuditStepSkipped$Outbound, z.ZodTypeDef, TaskAuditStepSkipped>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditStepSkipped$ {
    /** @deprecated use `TaskAuditStepSkipped$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditStepSkipped, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditStepSkipped$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditStepSkipped$Outbound, z.ZodTypeDef, TaskAuditStepSkipped>;
    /** @deprecated use `TaskAuditStepSkipped$Outbound` instead. */
    type Outbound = TaskAuditStepSkipped$Outbound;
}
export declare function taskAuditStepSkippedToJSON(taskAuditStepSkipped: TaskAuditStepSkipped): string;
export declare function taskAuditStepSkippedFromJSON(jsonString: string): SafeParseResult<TaskAuditStepSkipped, SDKValidationError>;
