import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditErrorResult message.
 */
export type TaskAuditErrorResult = {
    /**
     * TODO(pquerna): expand
     */
    errorCount?: number | null | undefined;
    /**
     * The errorReason field.
     */
    errorReason?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditErrorResult$inboundSchema: z.ZodType<TaskAuditErrorResult, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditErrorResult$Outbound = {
    errorCount?: string | null | undefined;
    errorReason?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditErrorResult$outboundSchema: z.ZodType<TaskAuditErrorResult$Outbound, z.ZodTypeDef, TaskAuditErrorResult>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditErrorResult$ {
    /** @deprecated use `TaskAuditErrorResult$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditErrorResult, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditErrorResult$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditErrorResult$Outbound, z.ZodTypeDef, TaskAuditErrorResult>;
    /** @deprecated use `TaskAuditErrorResult$Outbound` instead. */
    type Outbound = TaskAuditErrorResult$Outbound;
}
export declare function taskAuditErrorResultToJSON(taskAuditErrorResult: TaskAuditErrorResult): string;
export declare function taskAuditErrorResultFromJSON(jsonString: string): SafeParseResult<TaskAuditErrorResult, SDKValidationError>;
