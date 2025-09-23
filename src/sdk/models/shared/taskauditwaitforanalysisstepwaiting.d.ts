import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitForAnalysisStepWaiting message.
 */
export type TaskAuditWaitForAnalysisStepWaiting = {
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepWaiting$inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepWaiting, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitForAnalysisStepWaiting$Outbound = {
    stepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepWaiting$outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepWaiting$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepWaiting>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitForAnalysisStepWaiting$ {
    /** @deprecated use `TaskAuditWaitForAnalysisStepWaiting$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepWaiting, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepWaiting$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepWaiting$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepWaiting>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepWaiting$Outbound` instead. */
    type Outbound = TaskAuditWaitForAnalysisStepWaiting$Outbound;
}
export declare function taskAuditWaitForAnalysisStepWaitingToJSON(taskAuditWaitForAnalysisStepWaiting: TaskAuditWaitForAnalysisStepWaiting): string;
export declare function taskAuditWaitForAnalysisStepWaitingFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitForAnalysisStepWaiting, SDKValidationError>;
