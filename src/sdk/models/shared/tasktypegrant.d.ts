import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskGrantSource, TaskGrantSource$Outbound } from "./taskgrantsource.js";
/**
 * The outcome of the grant.
 */
export declare const TaskTypeGrantOutcome: {
    readonly GrantOutcomeUnspecified: "GRANT_OUTCOME_UNSPECIFIED";
    readonly GrantOutcomeGranted: "GRANT_OUTCOME_GRANTED";
    readonly GrantOutcomeDenied: "GRANT_OUTCOME_DENIED";
    readonly GrantOutcomeError: "GRANT_OUTCOME_ERROR";
    readonly GrantOutcomeCancelled: "GRANT_OUTCOME_CANCELLED";
    readonly GrantOutcomeWaitTimedOut: "GRANT_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome of the grant.
 */
export type TaskTypeGrantOutcome = OpenEnum<typeof TaskTypeGrantOutcome>;
/**
 * The TaskTypeGrant message indicates that a task is a grant task and all related details.
 */
export type TaskTypeGrant = {
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
    grantDuration?: string | null | undefined;
    /**
     * The ID of the user.
     */
    identityUserId?: string | null | undefined;
    /**
     * The outcome of the grant.
     */
    outcome?: TaskTypeGrantOutcome | null | undefined;
    outcomeTime?: Date | null | undefined;
    source?: TaskGrantSource | null | undefined;
};
/** @internal */
export declare const TaskTypeGrantOutcome$inboundSchema: z.ZodType<TaskTypeGrantOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskTypeGrantOutcome$outboundSchema: z.ZodType<TaskTypeGrantOutcome, z.ZodTypeDef, TaskTypeGrantOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeGrantOutcome$ {
    /** @deprecated use `TaskTypeGrantOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeGrantOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeGrantOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeGrantOutcome, z.ZodTypeDef, TaskTypeGrantOutcome>;
}
/** @internal */
export declare const TaskTypeGrant$inboundSchema: z.ZodType<TaskTypeGrant, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeGrant$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    grantDuration?: string | null | undefined;
    identityUserId?: string | null | undefined;
    outcome?: string | null | undefined;
    outcomeTime?: string | null | undefined;
    source?: TaskGrantSource$Outbound | null | undefined;
};
/** @internal */
export declare const TaskTypeGrant$outboundSchema: z.ZodType<TaskTypeGrant$Outbound, z.ZodTypeDef, TaskTypeGrant>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeGrant$ {
    /** @deprecated use `TaskTypeGrant$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeGrant, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeGrant$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeGrant$Outbound, z.ZodTypeDef, TaskTypeGrant>;
    /** @deprecated use `TaskTypeGrant$Outbound` instead. */
    type Outbound = TaskTypeGrant$Outbound;
}
export declare function taskTypeGrantToJSON(taskTypeGrant: TaskTypeGrant): string;
export declare function taskTypeGrantFromJSON(jsonString: string): SafeParseResult<TaskTypeGrant, SDKValidationError>;
