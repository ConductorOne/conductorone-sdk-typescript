import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWaitStepSuccess message.
 */
export type TaskAuditWaitStepSuccess = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
    /**
     * The stepId field.
     */
    stepId?: string | null | undefined;
    succeededAt?: Date | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepSuccess$inboundSchema: z.ZodType<TaskAuditWaitStepSuccess, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWaitStepSuccess$Outbound = {
    condition?: string | null | undefined;
    stepId?: string | null | undefined;
    succeededAt?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWaitStepSuccess$outboundSchema: z.ZodType<TaskAuditWaitStepSuccess$Outbound, z.ZodTypeDef, TaskAuditWaitStepSuccess>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWaitStepSuccess$ {
    /** @deprecated use `TaskAuditWaitStepSuccess$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWaitStepSuccess, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWaitStepSuccess$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWaitStepSuccess$Outbound, z.ZodTypeDef, TaskAuditWaitStepSuccess>;
    /** @deprecated use `TaskAuditWaitStepSuccess$Outbound` instead. */
    type Outbound = TaskAuditWaitStepSuccess$Outbound;
}
export declare function taskAuditWaitStepSuccessToJSON(taskAuditWaitStepSuccess: TaskAuditWaitStepSuccess): string;
export declare function taskAuditWaitStepSuccessFromJSON(jsonString: string): SafeParseResult<TaskAuditWaitStepSuccess, SDKValidationError>;
