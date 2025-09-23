import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WaitForDuration message.
 */
export type WaitForDuration = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const WaitForDuration$inboundSchema: z.ZodType<WaitForDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitForDuration$Outbound = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const WaitForDuration$outboundSchema: z.ZodType<WaitForDuration$Outbound, z.ZodTypeDef, WaitForDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitForDuration$ {
    /** @deprecated use `WaitForDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitForDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitForDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitForDuration$Outbound, z.ZodTypeDef, WaitForDuration>;
    /** @deprecated use `WaitForDuration$Outbound` instead. */
    type Outbound = WaitForDuration$Outbound;
}
export declare function waitForDurationToJSON(waitForDuration: WaitForDuration): string;
export declare function waitForDurationFromJSON(jsonString: string): SafeParseResult<WaitForDuration, SDKValidationError>;
