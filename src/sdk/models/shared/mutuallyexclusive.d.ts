import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The MutuallyExclusive message.
 */
export type MutuallyExclusive = {};
/** @internal */
export declare const MutuallyExclusive$inboundSchema: z.ZodType<MutuallyExclusive, z.ZodTypeDef, unknown>;
/** @internal */
export type MutuallyExclusive$Outbound = {};
/** @internal */
export declare const MutuallyExclusive$outboundSchema: z.ZodType<MutuallyExclusive$Outbound, z.ZodTypeDef, MutuallyExclusive>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace MutuallyExclusive$ {
    /** @deprecated use `MutuallyExclusive$inboundSchema` instead. */
    const inboundSchema: z.ZodType<MutuallyExclusive, z.ZodTypeDef, unknown>;
    /** @deprecated use `MutuallyExclusive$outboundSchema` instead. */
    const outboundSchema: z.ZodType<MutuallyExclusive$Outbound, z.ZodTypeDef, MutuallyExclusive>;
    /** @deprecated use `MutuallyExclusive$Outbound` instead. */
    type Outbound = MutuallyExclusive$Outbound;
}
export declare function mutuallyExclusiveToJSON(mutuallyExclusive: MutuallyExclusive): string;
export declare function mutuallyExclusiveFromJSON(jsonString: string): SafeParseResult<MutuallyExclusive, SDKValidationError>;
