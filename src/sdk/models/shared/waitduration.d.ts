import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WaitDuration message.
 */
export type WaitDuration = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const WaitDuration$inboundSchema: z.ZodType<WaitDuration, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitDuration$Outbound = {
    duration?: string | null | undefined;
};
/** @internal */
export declare const WaitDuration$outboundSchema: z.ZodType<WaitDuration$Outbound, z.ZodTypeDef, WaitDuration>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitDuration$ {
    /** @deprecated use `WaitDuration$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitDuration, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitDuration$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitDuration$Outbound, z.ZodTypeDef, WaitDuration>;
    /** @deprecated use `WaitDuration$Outbound` instead. */
    type Outbound = WaitDuration$Outbound;
}
export declare function waitDurationToJSON(waitDuration: WaitDuration): string;
export declare function waitDurationFromJSON(jsonString: string): SafeParseResult<WaitDuration, SDKValidationError>;
