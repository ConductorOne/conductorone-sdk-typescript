import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitForAnalysisStepTimedOut message.
 */
export type TaskAuditWaitForAnalysisStepTimedOut = {
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
    timedOutAt?: Date | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepTimedOut$inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepTimedOut, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitForAnalysisStepTimedOut$Outbound = {
    stepId?: string | null | undefined;
    timedOutAt?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepTimedOut$outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepTimedOut$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepTimedOut>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitForAnalysisStepTimedOut$ {
    /** @deprecated use `TaskAuditWaitForAnalysisStepTimedOut$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepTimedOut, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepTimedOut$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepTimedOut$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepTimedOut>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepTimedOut$Outbound` instead. */
    type Outbound = TaskAuditWaitForAnalysisStepTimedOut$Outbound;
}
export declare function taskAuditWaitForAnalysisStepTimedOutToJSON(taskAuditWaitForAnalysisStepTimedOut: TaskAuditWaitForAnalysisStepTimedOut): string;
export declare function taskAuditWaitForAnalysisStepTimedOutFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitForAnalysisStepTimedOut, SDKValidationError>;
