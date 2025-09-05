import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskRevokeSource, TaskRevokeSource$Outbound } from "./taskrevokesource.js";
/**
 * The outcome of the revoke.
 */
export declare const TaskTypeRevokeOutcome: {
    readonly RevokeOutcomeUnspecified: "REVOKE_OUTCOME_UNSPECIFIED";
    readonly RevokeOutcomeRevoked: "REVOKE_OUTCOME_REVOKED";
    readonly RevokeOutcomeDenied: "REVOKE_OUTCOME_DENIED";
    readonly RevokeOutcomeError: "REVOKE_OUTCOME_ERROR";
    readonly RevokeOutcomeCancelled: "REVOKE_OUTCOME_CANCELLED";
    readonly RevokeOutcomeWaitTimedOut: "REVOKE_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome of the revoke.
 */
export type TaskTypeRevokeOutcome = OpenEnum<typeof TaskTypeRevokeOutcome>;
/**
 * The TaskTypeRevoke message indicates that a task is a revoke task and all related details.
 */
export type TaskTypeRevoke = {
    /**
     * The ID of the app entitlement.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user.
     */
    appUserId?: string | null | undefined;
    /**
     * The ID of the user.
     */
    identityUserId?: string | null | undefined;
    /**
     * The outcome of the revoke.
     */
    outcome?: TaskTypeRevokeOutcome | null | undefined;
    outcomeTime?: Date | null | undefined;
    source?: TaskRevokeSource | null | undefined;
};
/** @internal */
export declare const TaskTypeRevokeOutcome$inboundSchema: z.ZodType<TaskTypeRevokeOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskTypeRevokeOutcome$outboundSchema: z.ZodType<TaskTypeRevokeOutcome, z.ZodTypeDef, TaskTypeRevokeOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeRevokeOutcome$ {
    /** @deprecated use `TaskTypeRevokeOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeRevokeOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeRevokeOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeRevokeOutcome, z.ZodTypeDef, TaskTypeRevokeOutcome>;
}
/** @internal */
export declare const TaskTypeRevoke$inboundSchema: z.ZodType<TaskTypeRevoke, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeRevoke$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    identityUserId?: string | null | undefined;
    outcome?: string | null | undefined;
    outcomeTime?: string | null | undefined;
    source?: TaskRevokeSource$Outbound | null | undefined;
};
/** @internal */
export declare const TaskTypeRevoke$outboundSchema: z.ZodType<TaskTypeRevoke$Outbound, z.ZodTypeDef, TaskTypeRevoke>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeRevoke$ {
    /** @deprecated use `TaskTypeRevoke$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeRevoke, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeRevoke$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeRevoke$Outbound, z.ZodTypeDef, TaskTypeRevoke>;
    /** @deprecated use `TaskTypeRevoke$Outbound` instead. */
    type Outbound = TaskTypeRevoke$Outbound;
}
export declare function taskTypeRevokeToJSON(taskTypeRevoke: TaskTypeRevoke): string;
export declare function taskTypeRevokeFromJSON(jsonString: string): SafeParseResult<TaskTypeRevoke, SDKValidationError>;
