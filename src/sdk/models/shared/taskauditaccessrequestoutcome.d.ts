import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome field.
 */
export declare const TaskAuditAccessRequestOutcomeOutcome: {
    readonly AccessRequestOutcomeUnspecified: "ACCESS_REQUEST_OUTCOME_UNSPECIFIED";
    readonly AccessRequestOutcomeApproved: "ACCESS_REQUEST_OUTCOME_APPROVED";
    readonly AccessRequestOutcomeDenied: "ACCESS_REQUEST_OUTCOME_DENIED";
    readonly AccessRequestOutcomeError: "ACCESS_REQUEST_OUTCOME_ERROR";
    readonly AccessRequestOutcomeCancelled: "ACCESS_REQUEST_OUTCOME_CANCELLED";
};
/**
 * The outcome field.
 */
export type TaskAuditAccessRequestOutcomeOutcome = OpenEnum<typeof TaskAuditAccessRequestOutcomeOutcome>;
/**
 * The TaskAuditAccessRequestOutcome message.
 */
export type TaskAuditAccessRequestOutcome = {
    /**
     * The outcome field.
     */
    outcome?: TaskAuditAccessRequestOutcomeOutcome | null | undefined;
};
/** @internal */
export declare const TaskAuditAccessRequestOutcomeOutcome$inboundSchema: z.ZodType<TaskAuditAccessRequestOutcomeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskAuditAccessRequestOutcomeOutcome$outboundSchema: z.ZodType<TaskAuditAccessRequestOutcomeOutcome, z.ZodTypeDef, TaskAuditAccessRequestOutcomeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditAccessRequestOutcomeOutcome$ {
    /** @deprecated use `TaskAuditAccessRequestOutcomeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditAccessRequestOutcomeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditAccessRequestOutcomeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditAccessRequestOutcomeOutcome, z.ZodTypeDef, TaskAuditAccessRequestOutcomeOutcome>;
}
/** @internal */
export declare const TaskAuditAccessRequestOutcome$inboundSchema: z.ZodType<TaskAuditAccessRequestOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditAccessRequestOutcome$Outbound = {
    outcome?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditAccessRequestOutcome$outboundSchema: z.ZodType<TaskAuditAccessRequestOutcome$Outbound, z.ZodTypeDef, TaskAuditAccessRequestOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditAccessRequestOutcome$ {
    /** @deprecated use `TaskAuditAccessRequestOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditAccessRequestOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditAccessRequestOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditAccessRequestOutcome$Outbound, z.ZodTypeDef, TaskAuditAccessRequestOutcome>;
    /** @deprecated use `TaskAuditAccessRequestOutcome$Outbound` instead. */
    type Outbound = TaskAuditAccessRequestOutcome$Outbound;
}
export declare function taskAuditAccessRequestOutcomeToJSON(taskAuditAccessRequestOutcome: TaskAuditAccessRequestOutcome): string;
export declare function taskAuditAccessRequestOutcomeFromJSON(jsonString: string): SafeParseResult<TaskAuditAccessRequestOutcome, SDKValidationError>;
