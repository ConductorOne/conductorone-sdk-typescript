import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitStepUntilTime message.
 */
export type TaskAuditWaitStepUntilTime = {
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
    untilTime?: Date | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepUntilTime$inboundSchema: z.ZodType<TaskAuditWaitStepUntilTime, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitStepUntilTime$Outbound = {
    stepId?: string | null | undefined;
    untilTime?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepUntilTime$outboundSchema: z.ZodType<TaskAuditWaitStepUntilTime$Outbound, z.ZodTypeDef, TaskAuditWaitStepUntilTime>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitStepUntilTime$ {
    /** @deprecated use `TaskAuditWaitStepUntilTime$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitStepUntilTime, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitStepUntilTime$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitStepUntilTime$Outbound, z.ZodTypeDef, TaskAuditWaitStepUntilTime>;
    /** @deprecated use `TaskAuditWaitStepUntilTime$Outbound` instead. */
    type Outbound = TaskAuditWaitStepUntilTime$Outbound;
}
export declare function taskAuditWaitStepUntilTimeToJSON(taskAuditWaitStepUntilTime: TaskAuditWaitStepUntilTime): string;
export declare function taskAuditWaitStepUntilTimeFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitStepUntilTime, SDKValidationError>;
