import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditComment message.
 */
export type TaskAuditComment = {
    /**
     * The comment field.
     */
    comment?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The updatedBy field.
     */
    updatedBy?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditComment$inboundSchema: z.ZodType<TaskAuditComment, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditComment$Outbound = {
    comment?: string | null | undefined;
    updatedAt?: string | null | undefined;
    updatedBy?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditComment$outboundSchema: z.ZodType<TaskAuditComment$Outbound, z.ZodTypeDef, TaskAuditComment>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditComment$ {
    /** @deprecated use `TaskAuditComment$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditComment, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditComment$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditComment$Outbound, z.ZodTypeDef, TaskAuditComment>;
    /** @deprecated use `TaskAuditComment$Outbound` instead. */
    type Outbound = TaskAuditComment$Outbound;
}
export declare function taskAuditCommentToJSON(taskAuditComment: TaskAuditComment): string;
export declare function taskAuditCommentFromJSON(jsonString: string): SafeParseResult<TaskAuditComment, SDKValidationError>;
