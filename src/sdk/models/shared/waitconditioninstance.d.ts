import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Used by the policy engine to describe an instantiated condition to wait on.
 */
export type WaitConditionInstance = {
    /**
     * The condition that has to be true for this wait condition instance to continue.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const WaitConditionInstance$inboundSchema: z.ZodType<WaitConditionInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitConditionInstance$Outbound = {
    condition?: string | null | undefined;
};
/** @internal */
export declare const WaitConditionInstance$outboundSchema: z.ZodType<WaitConditionInstance$Outbound, z.ZodTypeDef, WaitConditionInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitConditionInstance$ {
    /** @deprecated use `WaitConditionInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitConditionInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitConditionInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitConditionInstance$Outbound, z.ZodTypeDef, WaitConditionInstance>;
    /** @deprecated use `WaitConditionInstance$Outbound` instead. */
    type Outbound = WaitConditionInstance$Outbound;
}
export declare function waitConditionInstanceToJSON(waitConditionInstance: WaitConditionInstance): string;
export declare function waitConditionInstanceFromJSON(jsonString: string): SafeParseResult<WaitConditionInstance, SDKValidationError>;
