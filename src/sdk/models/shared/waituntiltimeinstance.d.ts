import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WaitUntilTimeInstance message.
 */
export type WaitUntilTimeInstance = {
    durationIfExists?: string | null | undefined;
    untilTime?: Date | null | undefined;
};
/** @internal */
export declare const WaitUntilTimeInstance$inboundSchema: z.ZodType<WaitUntilTimeInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitUntilTimeInstance$Outbound = {
    durationIfExists?: string | null | undefined;
    untilTime?: string | null | undefined;
};
/** @internal */
export declare const WaitUntilTimeInstance$outboundSchema: z.ZodType<WaitUntilTimeInstance$Outbound, z.ZodTypeDef, WaitUntilTimeInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitUntilTimeInstance$ {
    /** @deprecated use `WaitUntilTimeInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitUntilTimeInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitUntilTimeInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitUntilTimeInstance$Outbound, z.ZodTypeDef, WaitUntilTimeInstance>;
    /** @deprecated use `WaitUntilTimeInstance$Outbound` instead. */
    type Outbound = WaitUntilTimeInstance$Outbound;
}
export declare function waitUntilTimeInstanceToJSON(waitUntilTimeInstance: WaitUntilTimeInstance): string;
export declare function waitUntilTimeInstanceFromJSON(jsonString: string): SafeParseResult<WaitUntilTimeInstance, SDKValidationError>;
