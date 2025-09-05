import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditBulkActionError message.
 */
export type TaskAuditBulkActionError = {
    /**
     * The error field.
     */
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditBulkActionError$inboundSchema: z.ZodType<TaskAuditBulkActionError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditBulkActionError$Outbound = {
    error?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditBulkActionError$outboundSchema: z.ZodType<TaskAuditBulkActionError$Outbound, z.ZodTypeDef, TaskAuditBulkActionError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditBulkActionError$ {
    /** @deprecated use `TaskAuditBulkActionError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditBulkActionError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditBulkActionError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditBulkActionError$Outbound, z.ZodTypeDef, TaskAuditBulkActionError>;
    /** @deprecated use `TaskAuditBulkActionError$Outbound` instead. */
    type Outbound = TaskAuditBulkActionError$Outbound;
}
export declare function taskAuditBulkActionErrorToJSON(taskAuditBulkActionError: TaskAuditBulkActionError): string;
export declare function taskAuditBulkActionErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditBulkActionError, SDKValidationError>;
