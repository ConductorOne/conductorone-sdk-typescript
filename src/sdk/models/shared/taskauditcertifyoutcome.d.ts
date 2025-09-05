import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome field.
 */
export declare const TaskAuditCertifyOutcomeOutcome: {
    readonly CertifyOutcomeUnspecified: "CERTIFY_OUTCOME_UNSPECIFIED";
    readonly CertifyOutcomeCertified: "CERTIFY_OUTCOME_CERTIFIED";
    readonly CertifyOutcomeDecertified: "CERTIFY_OUTCOME_DECERTIFIED";
    readonly CertifyOutcomeError: "CERTIFY_OUTCOME_ERROR";
    readonly CertifyOutcomeCancelled: "CERTIFY_OUTCOME_CANCELLED";
    readonly CertifyOutcomeWaitTimedOut: "CERTIFY_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome field.
 */
export type TaskAuditCertifyOutcomeOutcome = OpenEnum<typeof TaskAuditCertifyOutcomeOutcome>;
/**
 * The TaskAuditCertifyOutcome message.
 */
export type TaskAuditCertifyOutcome = {
    /**
     * The outcome field.
     */
    outcome?: TaskAuditCertifyOutcomeOutcome | null | undefined;
};
/** @internal */
export declare const TaskAuditCertifyOutcomeOutcome$inboundSchema: z.ZodType<TaskAuditCertifyOutcomeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskAuditCertifyOutcomeOutcome$outboundSchema: z.ZodType<TaskAuditCertifyOutcomeOutcome, z.ZodTypeDef, TaskAuditCertifyOutcomeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditCertifyOutcomeOutcome$ {
    /** @deprecated use `TaskAuditCertifyOutcomeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditCertifyOutcomeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditCertifyOutcomeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditCertifyOutcomeOutcome, z.ZodTypeDef, TaskAuditCertifyOutcomeOutcome>;
}
/** @internal */
export declare const TaskAuditCertifyOutcome$inboundSchema: z.ZodType<TaskAuditCertifyOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditCertifyOutcome$Outbound = {
    outcome?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditCertifyOutcome$outboundSchema: z.ZodType<TaskAuditCertifyOutcome$Outbound, z.ZodTypeDef, TaskAuditCertifyOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditCertifyOutcome$ {
    /** @deprecated use `TaskAuditCertifyOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditCertifyOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditCertifyOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditCertifyOutcome$Outbound, z.ZodTypeDef, TaskAuditCertifyOutcome>;
    /** @deprecated use `TaskAuditCertifyOutcome$Outbound` instead. */
    type Outbound = TaskAuditCertifyOutcome$Outbound;
}
export declare function taskAuditCertifyOutcomeToJSON(taskAuditCertifyOutcome: TaskAuditCertifyOutcome): string;
export declare function taskAuditCertifyOutcomeFromJSON(jsonString: string): SafeParseResult<TaskAuditCertifyOutcome, SDKValidationError>;
