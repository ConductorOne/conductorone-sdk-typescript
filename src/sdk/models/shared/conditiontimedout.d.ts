import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ConditionTimedOut message.
 */
export type ConditionTimedOut = {
    timedOutAt?: Date | null | undefined;
};
/** @internal */
export declare const ConditionTimedOut$inboundSchema: z.ZodType<ConditionTimedOut, z.ZodTypeDef, unknown>;
/** @internal */
export type ConditionTimedOut$Outbound = {
    timedOutAt?: string | null | undefined;
};
/** @internal */
export declare const ConditionTimedOut$outboundSchema: z.ZodType<ConditionTimedOut$Outbound, z.ZodTypeDef, ConditionTimedOut>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConditionTimedOut$ {
    /** @deprecated use `ConditionTimedOut$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConditionTimedOut, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConditionTimedOut$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConditionTimedOut$Outbound, z.ZodTypeDef, ConditionTimedOut>;
    /** @deprecated use `ConditionTimedOut$Outbound` instead. */
    type Outbound = ConditionTimedOut$Outbound;
}
export declare function conditionTimedOutToJSON(conditionTimedOut: ConditionTimedOut): string;
export declare function conditionTimedOutFromJSON(jsonString: string): SafeParseResult<ConditionTimedOut, SDKValidationError>;
