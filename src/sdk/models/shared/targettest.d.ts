import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Target for testing a provider
 */
export type TargetTest = {};
/** @internal */
export declare const TargetTest$inboundSchema: z.ZodType<TargetTest, z.ZodTypeDef, unknown>;
/** @internal */
export type TargetTest$Outbound = {};
/** @internal */
export declare const TargetTest$outboundSchema: z.ZodType<TargetTest$Outbound, z.ZodTypeDef, TargetTest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TargetTest$ {
    /** @deprecated use `TargetTest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TargetTest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TargetTest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TargetTest$Outbound, z.ZodTypeDef, TargetTest>;
    /** @deprecated use `TargetTest$Outbound` instead. */
    type Outbound = TargetTest$Outbound;
}
export declare function targetTestToJSON(targetTest: TargetTest): string;
export declare function targetTestFromJSON(jsonString: string): SafeParseResult<TargetTest, SDKValidationError>;
