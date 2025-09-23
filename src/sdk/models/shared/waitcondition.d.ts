import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WaitCondition message.
 */
export type WaitCondition = {
    /**
     * The condition that has to be true for this wait condition to continue.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const WaitCondition$inboundSchema: z.ZodType<WaitCondition, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitCondition$Outbound = {
    condition?: string | null | undefined;
};
/** @internal */
export declare const WaitCondition$outboundSchema: z.ZodType<WaitCondition$Outbound, z.ZodTypeDef, WaitCondition>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitCondition$ {
    /** @deprecated use `WaitCondition$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitCondition, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitCondition$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitCondition$Outbound, z.ZodTypeDef, WaitCondition>;
    /** @deprecated use `WaitCondition$Outbound` instead. */
    type Outbound = WaitCondition$Outbound;
}
export declare function waitConditionToJSON(waitCondition: WaitCondition): string;
export declare function waitConditionFromJSON(jsonString: string): SafeParseResult<WaitCondition, SDKValidationError>;
