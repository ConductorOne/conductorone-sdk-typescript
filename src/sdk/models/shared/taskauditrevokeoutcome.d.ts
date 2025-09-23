import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome field.
 */
export declare const TaskAuditRevokeOutcomeOutcome: {
    readonly RevokeOutcomeUnspecified: "REVOKE_OUTCOME_UNSPECIFIED";
    readonly RevokeOutcomeRevoked: "REVOKE_OUTCOME_REVOKED";
    readonly RevokeOutcomeDenied: "REVOKE_OUTCOME_DENIED";
    readonly RevokeOutcomeError: "REVOKE_OUTCOME_ERROR";
    readonly RevokeOutcomeCancelled: "REVOKE_OUTCOME_CANCELLED";
    readonly RevokeOutcomeWaitTimedOut: "REVOKE_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome field.
 */
export type TaskAuditRevokeOutcomeOutcome = OpenEnum<typeof TaskAuditRevokeOutcomeOutcome>;
/**
 * The TaskAuditRevokeOutcome message.
 */
export type TaskAuditRevokeOutcome = {
    /**
     * The outcome field.
     */
    outcome?: TaskAuditRevokeOutcomeOutcome | null | undefined;
};
/** @internal */
export declare const TaskAuditRevokeOutcomeOutcome$inboundSchema: z.ZodType<TaskAuditRevokeOutcomeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskAuditRevokeOutcomeOutcome$outboundSchema: z.ZodType<TaskAuditRevokeOutcomeOutcome, z.ZodTypeDef, TaskAuditRevokeOutcomeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditRevokeOutcomeOutcome$ {
    /** @deprecated use `TaskAuditRevokeOutcomeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditRevokeOutcomeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditRevokeOutcomeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditRevokeOutcomeOutcome, z.ZodTypeDef, TaskAuditRevokeOutcomeOutcome>;
}
/** @internal */
export declare const TaskAuditRevokeOutcome$inboundSchema: z.ZodType<TaskAuditRevokeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditRevokeOutcome$Outbound = {
    outcome?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditRevokeOutcome$outboundSchema: z.ZodType<TaskAuditRevokeOutcome$Outbound, z.ZodTypeDef, TaskAuditRevokeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditRevokeOutcome$ {
    /** @deprecated use `TaskAuditRevokeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditRevokeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditRevokeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditRevokeOutcome$Outbound, z.ZodTypeDef, TaskAuditRevokeOutcome>;
    /** @deprecated use `TaskAuditRevokeOutcome$Outbound` instead. */
    type Outbound = TaskAuditRevokeOutcome$Outbound;
}
export declare function taskAuditRevokeOutcomeToJSON(taskAuditRevokeOutcome: TaskAuditRevokeOutcome): string;
export declare function taskAuditRevokeOutcomeFromJSON(jsonString: string): SafeParseResult<TaskAuditRevokeOutcome, SDKValidationError>;
