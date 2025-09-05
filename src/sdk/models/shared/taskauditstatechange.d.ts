import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The previousState field.
 */
export declare const PreviousState: {
    readonly TaskStateUnspecified: "TASK_STATE_UNSPECIFIED";
    readonly TaskStateOpen: "TASK_STATE_OPEN";
    readonly TaskStateClosed: "TASK_STATE_CLOSED";
};
/**
 * The previousState field.
 */
export type PreviousState = OpenEnum<typeof PreviousState>;
/**
 * The TaskAuditStateChange message.
 */
export type TaskAuditStateChange = {
    /**
     * The previousState field.
     */
    previousState?: PreviousState | null | undefined;
};
/** @internal */
export declare const PreviousState$inboundSchema: z.ZodType<PreviousState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PreviousState$outboundSchema: z.ZodType<PreviousState, z.ZodTypeDef, PreviousState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PreviousState$ {
    /** @deprecated use `PreviousState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PreviousState, z.ZodTypeDef, unknown>;
    /** @deprecated use `PreviousState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PreviousState, z.ZodTypeDef, PreviousState>;
}
/** @internal */
export declare const TaskAuditStateChange$inboundSchema: z.ZodType<TaskAuditStateChange, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditStateChange$Outbound = {
    previousState?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditStateChange$outboundSchema: z.ZodType<TaskAuditStateChange$Outbound, z.ZodTypeDef, TaskAuditStateChange>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditStateChange$ {
    /** @deprecated use `TaskAuditStateChange$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditStateChange, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditStateChange$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditStateChange$Outbound, z.ZodTypeDef, TaskAuditStateChange>;
    /** @deprecated use `TaskAuditStateChange$Outbound` instead. */
    type Outbound = TaskAuditStateChange$Outbound;
}
export declare function taskAuditStateChangeToJSON(taskAuditStateChange: TaskAuditStateChange): string;
export declare function taskAuditStateChangeFromJSON(jsonString: string): SafeParseResult<TaskAuditStateChange, SDKValidationError>;
