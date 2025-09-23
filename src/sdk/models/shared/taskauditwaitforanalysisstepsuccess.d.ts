import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitForAnalysisStepSuccess message.
 */
export type TaskAuditWaitForAnalysisStepSuccess = {
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
    succeededAt?: Date | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepSuccess$inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepSuccess, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitForAnalysisStepSuccess$Outbound = {
    stepId?: string | null | undefined;
    succeededAt?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitForAnalysisStepSuccess$outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepSuccess$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepSuccess>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitForAnalysisStepSuccess$ {
    /** @deprecated use `TaskAuditWaitForAnalysisStepSuccess$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepSuccess, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepSuccess$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitForAnalysisStepSuccess$Outbound, z.ZodTypeDef, TaskAuditWaitForAnalysisStepSuccess>;
    /** @deprecated use `TaskAuditWaitForAnalysisStepSuccess$Outbound` instead. */
    type Outbound = TaskAuditWaitForAnalysisStepSuccess$Outbound;
}
export declare function taskAuditWaitForAnalysisStepSuccessToJSON(taskAuditWaitForAnalysisStepSuccess: TaskAuditWaitForAnalysisStepSuccess): string;
export declare function taskAuditWaitForAnalysisStepSuccessFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitForAnalysisStepSuccess, SDKValidationError>;
