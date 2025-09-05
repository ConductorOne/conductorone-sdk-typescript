import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome field.
 */
export declare const TaskAuditGrantOutcomeOutcome: {
    readonly GrantOutcomeUnspecified: "GRANT_OUTCOME_UNSPECIFIED";
    readonly GrantOutcomeGranted: "GRANT_OUTCOME_GRANTED";
    readonly GrantOutcomeDenied: "GRANT_OUTCOME_DENIED";
    readonly GrantOutcomeError: "GRANT_OUTCOME_ERROR";
    readonly GrantOutcomeCancelled: "GRANT_OUTCOME_CANCELLED";
    readonly GrantOutcomeWaitTimedOut: "GRANT_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome field.
 */
export type TaskAuditGrantOutcomeOutcome = OpenEnum<typeof TaskAuditGrantOutcomeOutcome>;
/**
 * The TaskAuditGrantOutcome message.
 */
export type TaskAuditGrantOutcome = {
    /**
     * The outcome field.
     */
    outcome?: TaskAuditGrantOutcomeOutcome | null | undefined;
};
/** @internal */
export declare const TaskAuditGrantOutcomeOutcome$inboundSchema: z.ZodType<TaskAuditGrantOutcomeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskAuditGrantOutcomeOutcome$outboundSchema: z.ZodType<TaskAuditGrantOutcomeOutcome, z.ZodTypeDef, TaskAuditGrantOutcomeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditGrantOutcomeOutcome$ {
    /** @deprecated use `TaskAuditGrantOutcomeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditGrantOutcomeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditGrantOutcomeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditGrantOutcomeOutcome, z.ZodTypeDef, TaskAuditGrantOutcomeOutcome>;
}
/** @internal */
export declare const TaskAuditGrantOutcome$inboundSchema: z.ZodType<TaskAuditGrantOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditGrantOutcome$Outbound = {
    outcome?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditGrantOutcome$outboundSchema: z.ZodType<TaskAuditGrantOutcome$Outbound, z.ZodTypeDef, TaskAuditGrantOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditGrantOutcome$ {
    /** @deprecated use `TaskAuditGrantOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditGrantOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditGrantOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditGrantOutcome$Outbound, z.ZodTypeDef, TaskAuditGrantOutcome>;
    /** @deprecated use `TaskAuditGrantOutcome$Outbound` instead. */
    type Outbound = TaskAuditGrantOutcome$Outbound;
}
export declare function taskAuditGrantOutcomeToJSON(taskAuditGrantOutcome: TaskAuditGrantOutcome): string;
export declare function taskAuditGrantOutcomeFromJSON(jsonString: string): SafeParseResult<TaskAuditGrantOutcome, SDKValidationError>;
