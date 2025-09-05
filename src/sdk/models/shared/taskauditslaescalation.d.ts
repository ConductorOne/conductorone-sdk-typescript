import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditSLAEscalation message.
 */
export type TaskAuditSLAEscalation = {
    /**
     * The message field.
     */
    message?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditSLAEscalation$inboundSchema: z.ZodType<TaskAuditSLAEscalation, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditSLAEscalation$Outbound = {
    message?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditSLAEscalation$outboundSchema: z.ZodType<TaskAuditSLAEscalation$Outbound, z.ZodTypeDef, TaskAuditSLAEscalation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditSLAEscalation$ {
    /** @deprecated use `TaskAuditSLAEscalation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditSLAEscalation, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditSLAEscalation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditSLAEscalation$Outbound, z.ZodTypeDef, TaskAuditSLAEscalation>;
    /** @deprecated use `TaskAuditSLAEscalation$Outbound` instead. */
    type Outbound = TaskAuditSLAEscalation$Outbound;
}
export declare function taskAuditSLAEscalationToJSON(taskAuditSLAEscalation: TaskAuditSLAEscalation): string;
export declare function taskAuditSLAEscalationFromJSON(jsonString: string): SafeParseResult<TaskAuditSLAEscalation, SDKValidationError>;
