import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RunDelayed message.
 */
export type RunDelayed = {
    /**
     * The coldStartDelayDays field.
     */
    coldStartDelayDays: number;
};
/** @internal */
export declare const RunDelayed$inboundSchema: z.ZodType<RunDelayed, z.ZodTypeDef, unknown>;
/** @internal */
export type RunDelayed$Outbound = {
    coldStartDelayDays: number;
};
/** @internal */
export declare const RunDelayed$outboundSchema: z.ZodType<RunDelayed$Outbound, z.ZodTypeDef, RunDelayed>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RunDelayed$ {
    /** @deprecated use `RunDelayed$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RunDelayed, z.ZodTypeDef, unknown>;
    /** @deprecated use `RunDelayed$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RunDelayed$Outbound, z.ZodTypeDef, RunDelayed>;
    /** @deprecated use `RunDelayed$Outbound` instead. */
    type Outbound = RunDelayed$Outbound;
}
export declare function runDelayedToJSON(runDelayed: RunDelayed): string;
export declare function runDelayedFromJSON(jsonString: string): SafeParseResult<RunDelayed, SDKValidationError>;
