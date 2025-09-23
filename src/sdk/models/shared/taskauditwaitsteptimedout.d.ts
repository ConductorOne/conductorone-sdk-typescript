import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitStepTimedOut message.
 */
export type TaskAuditWaitStepTimedOut = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
    timedOutAt?: Date | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepTimedOut$inboundSchema: z.ZodType<TaskAuditWaitStepTimedOut, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitStepTimedOut$Outbound = {
    condition?: string | null | undefined;
    stepId?: string | null | undefined;
    timedOutAt?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepTimedOut$outboundSchema: z.ZodType<TaskAuditWaitStepTimedOut$Outbound, z.ZodTypeDef, TaskAuditWaitStepTimedOut>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitStepTimedOut$ {
    /** @deprecated use `TaskAuditWaitStepTimedOut$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitStepTimedOut, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitStepTimedOut$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitStepTimedOut$Outbound, z.ZodTypeDef, TaskAuditWaitStepTimedOut>;
    /** @deprecated use `TaskAuditWaitStepTimedOut$Outbound` instead. */
    type Outbound = TaskAuditWaitStepTimedOut$Outbound;
}
export declare function taskAuditWaitStepTimedOutToJSON(taskAuditWaitStepTimedOut: TaskAuditWaitStepTimedOut): string;
export declare function taskAuditWaitStepTimedOutFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitStepTimedOut, SDKValidationError>;
