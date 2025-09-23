import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditReassignmentListError message.
 */
export type TaskAuditReassignmentListError = {
    /**
     * The errorMessage field.
     */
    errorMessage?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditReassignmentListError$inboundSchema: z.ZodType<TaskAuditReassignmentListError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditReassignmentListError$Outbound = {
    errorMessage?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditReassignmentListError$outboundSchema: z.ZodType<TaskAuditReassignmentListError$Outbound, z.ZodTypeDef, TaskAuditReassignmentListError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditReassignmentListError$ {
    /** @deprecated use `TaskAuditReassignmentListError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditReassignmentListError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditReassignmentListError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditReassignmentListError$Outbound, z.ZodTypeDef, TaskAuditReassignmentListError>;
    /** @deprecated use `TaskAuditReassignmentListError$Outbound` instead. */
    type Outbound = TaskAuditReassignmentListError$Outbound;
}
export declare function taskAuditReassignmentListErrorToJSON(taskAuditReassignmentListError: TaskAuditReassignmentListError): string;
export declare function taskAuditReassignmentListErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditReassignmentListError, SDKValidationError>;
