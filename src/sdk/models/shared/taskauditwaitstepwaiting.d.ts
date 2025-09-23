import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitStepWaiting message.
 */
export type TaskAuditWaitStepWaiting = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepWaiting$inboundSchema: z.ZodType<TaskAuditWaitStepWaiting, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitStepWaiting$Outbound = {
    condition?: string | null | undefined;
    stepId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepWaiting$outboundSchema: z.ZodType<TaskAuditWaitStepWaiting$Outbound, z.ZodTypeDef, TaskAuditWaitStepWaiting>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitStepWaiting$ {
    /** @deprecated use `TaskAuditWaitStepWaiting$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitStepWaiting, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitStepWaiting$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitStepWaiting$Outbound, z.ZodTypeDef, TaskAuditWaitStepWaiting>;
    /** @deprecated use `TaskAuditWaitStepWaiting$Outbound` instead. */
    type Outbound = TaskAuditWaitStepWaiting$Outbound;
}
export declare function taskAuditWaitStepWaitingToJSON(taskAuditWaitStepWaiting: TaskAuditWaitStepWaiting): string;
export declare function taskAuditWaitStepWaitingFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitStepWaiting, SDKValidationError>;
