import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * No fields needed; this just indicates the trigger should run immediately
 */
export type RunImmediately = {};
/** @internal */
export declare const RunImmediately$inboundSchema: z.ZodType<RunImmediately, z.ZodTypeDef, unknown>;
/** @internal */
export type RunImmediately$Outbound = {};
/** @internal */
export declare const RunImmediately$outboundSchema: z.ZodType<RunImmediately$Outbound, z.ZodTypeDef, RunImmediately>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RunImmediately$ {
    /** @deprecated use `RunImmediately$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RunImmediately, z.ZodTypeDef, unknown>;
    /** @deprecated use `RunImmediately$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RunImmediately$Outbound, z.ZodTypeDef, RunImmediately>;
    /** @deprecated use `RunImmediately$Outbound` instead. */
    type Outbound = RunImmediately$Outbound;
}
export declare function runImmediatelyToJSON(runImmediately: RunImmediately): string;
export declare function runImmediatelyFromJSON(jsonString: string): SafeParseResult<RunImmediately, SDKValidationError>;
