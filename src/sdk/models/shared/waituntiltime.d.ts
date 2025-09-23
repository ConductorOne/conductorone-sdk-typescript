import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Waits until a specific time of the day (UTC)
 */
export type WaitUntilTime = {
    /**
     * The hours field.
     */
    hours?: number | null | undefined;
    /**
     * The minutes field.
     */
    minutes?: number | null | undefined;
    /**
     * The timezone field.
     */
    timezone?: string | null | undefined;
};
/** @internal */
export declare const WaitUntilTime$inboundSchema: z.ZodType<WaitUntilTime, z.ZodTypeDef, unknown>;
/** @internal */
export type WaitUntilTime$Outbound = {
    hours?: number | null | undefined;
    minutes?: number | null | undefined;
    timezone?: string | null | undefined;
};
/** @internal */
export declare const WaitUntilTime$outboundSchema: z.ZodType<WaitUntilTime$Outbound, z.ZodTypeDef, WaitUntilTime>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WaitUntilTime$ {
    /** @deprecated use `WaitUntilTime$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WaitUntilTime, z.ZodTypeDef, unknown>;
    /** @deprecated use `WaitUntilTime$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WaitUntilTime$Outbound, z.ZodTypeDef, WaitUntilTime>;
    /** @deprecated use `WaitUntilTime$Outbound` instead. */
    type Outbound = WaitUntilTime$Outbound;
}
export declare function waitUntilTimeToJSON(waitUntilTime: WaitUntilTime): string;
export declare function waitUntilTimeFromJSON(jsonString: string): SafeParseResult<WaitUntilTime, SDKValidationError>;
