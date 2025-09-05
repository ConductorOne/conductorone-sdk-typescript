import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConditionSucceeded, ConditionSucceeded$Outbound } from "./conditionsucceeded.js";
import { ConditionTimedOut, ConditionTimedOut$Outbound } from "./conditiontimedout.js";
import { SkippedAction, SkippedAction$Outbound } from "./skippedaction.js";
import { WaitConditionInstance, WaitConditionInstance$Outbound } from "./waitconditioninstance.js";
import { WaitUntilTimeInstance, WaitUntilTimeInstance$Outbound } from "./waituntiltimeinstance.js";
/**
 * The state field.
 */
export declare const WaitInstanceState: {
    readonly WaitInstanceStateUnspecified: "WAIT_INSTANCE_STATE_UNSPECIFIED";
    readonly WaitInstanceStateWaiting: "WAIT_INSTANCE_STATE_WAITING";
    readonly WaitInstanceStateCompleted: "WAIT_INSTANCE_STATE_COMPLETED";
    readonly WaitInstanceStateTimedOut: "WAIT_INSTANCE_STATE_TIMED_OUT";
};
/**
 * The state field.
 */
export type WaitInstanceState = OpenEnum<typeof WaitInstanceState>;
/**
 * Used by the policy engine to describe an instantiated wait step.
 *
 * @remarks
 *
 * This message contains a oneof named until. Only a single field of the following list may be set at a time:
 *   - condition
 *   - untilTime
 *
 * This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
 *   - succeeded
 *   - timedOut
 *   - skipped
 */
export type WaitInstance = {
    /**
     * The comment to post on first failed check.
     */
    commentOnFirstWait?: string | null | undefined;
    /**
     * The comment to post if we timeout.
     */
    commentOnTimeout?: string | null | undefined;
    condition?: WaitConditionInstance | null | undefined;
    /**
     * The name field.
     */
    name?: string | null | undefined;
    skipped?: SkippedAction | null | undefined;
    startedWaitingAt?: Date | null | undefined;
    /**
     * The state field.
     */
    state?: WaitInstanceState | null | undefined;
    succeeded?: ConditionSucceeded | null | undefined;
    timedOut?: ConditionTimedOut | null | undefined;
    timeout?: Date | null | undefined;
    timeoutDuration?: string | null | undefined;
    untilTime?: WaitUntilTimeInstance | null | undefined;
};
/** @internal */
export declare const WaitInstanceState$inboundSchema: z.ZodType<WaitInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WaitInstanceState$outboundSchema: z.ZodType<WaitInstanceState, z.ZodTypeDef, WaitInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitInstanceState$ {
    /** @deprecated use `WaitInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitInstanceState, z.ZodTypeDef, WaitInstanceState>;
}
/** @internal */
export declare const WaitInstance$inboundSchema: z.ZodType<WaitInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitInstance$Outbound = {
    commentOnFirstWait?: string | null | undefined;
    commentOnTimeout?: string | null | undefined;
    condition?: WaitConditionInstance$Outbound | null | undefined;
    name?: string | null | undefined;
    skipped?: SkippedAction$Outbound | null | undefined;
    startedWaitingAt?: string | null | undefined;
    state?: string | null | undefined;
    succeeded?: ConditionSucceeded$Outbound | null | undefined;
    timedOut?: ConditionTimedOut$Outbound | null | undefined;
    timeout?: string | null | undefined;
    timeoutDuration?: string | null | undefined;
    untilTime?: WaitUntilTimeInstance$Outbound | null | undefined;
};
/** @internal */
export declare const WaitInstance$outboundSchema: z.ZodType<WaitInstance$Outbound, z.ZodTypeDef, WaitInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitInstance$ {
    /** @deprecated use `WaitInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitInstance$Outbound, z.ZodTypeDef, WaitInstance>;
    /** @deprecated use `WaitInstance$Outbound` instead. */
    type Outbound = WaitInstance$Outbound;
}
export declare function waitInstanceToJSON(waitInstance: WaitInstance): string;
export declare function waitInstanceFromJSON(jsonString: string): SafeParseResult<WaitInstance, SDKValidationError>;
