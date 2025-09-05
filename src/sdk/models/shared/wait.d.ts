import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WaitCondition, WaitCondition$Outbound } from "./waitcondition.js";
import { WaitDuration, WaitDuration$Outbound } from "./waitduration.js";
import { WaitUntilTime, WaitUntilTime$Outbound } from "./waituntiltime.js";
/**
 * Define a Wait step for a policy to wait on a condition to be met.
 *
 * @remarks
 *
 * This message contains a oneof named until. Only a single field of the following list may be set at a time:
 *   - condition
 *   - duration
 *   - untilTime
 */
export type Wait = {
    /**
     * The comment to post on first failed check.
     */
    commentOnFirstWait?: string | null | undefined;
    /**
     * The comment to post if we timeout.
     */
    commentOnTimeout?: string | null | undefined;
    condition?: WaitCondition | null | undefined;
    duration?: WaitDuration | null | undefined;
    /**
     * The name of our condition to show on the task details page
     */
    name?: string | null | undefined;
    timeoutDuration?: string | null | undefined;
    untilTime?: WaitUntilTime | null | undefined;
};
/** @internal */
export declare const Wait$inboundSchema: z.ZodType<Wait, z.ZodTypeDef, unknown>;
/** @internal */
export type Wait$Outbound = {
    commentOnFirstWait?: string | null | undefined;
    commentOnTimeout?: string | null | undefined;
    condition?: WaitCondition$Outbound | null | undefined;
    duration?: WaitDuration$Outbound | null | undefined;
    name?: string | null | undefined;
    timeoutDuration?: string | null | undefined;
    untilTime?: WaitUntilTime$Outbound | null | undefined;
};
/** @internal */
export declare const Wait$outboundSchema: z.ZodType<Wait$Outbound, z.ZodTypeDef, Wait>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Wait$ {
    /** @deprecated use `Wait$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Wait, z.ZodTypeDef, unknown>;
    /** @deprecated use `Wait$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Wait$Outbound, z.ZodTypeDef, Wait>;
    /** @deprecated use `Wait$Outbound` instead. */
    type Outbound = Wait$Outbound;
}
export declare function waitToJSON(wait: Wait): string;
export declare function waitFromJSON(jsonString: string): SafeParseResult<Wait, SDKValidationError>;
