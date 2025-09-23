import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ReplacePolicy message.
 */
export type ReplacePolicy = {
    /**
     * The policyId field.
     */
    policyId?: string | null | undefined;
};
/** @internal */
export declare const ReplacePolicy$inboundSchema: z.ZodType<ReplacePolicy, z.ZodTypeDef, unknown>;
/** @internal */
export type ReplacePolicy$Outbound = {
    policyId?: string | null | undefined;
};
/** @internal */
export declare const ReplacePolicy$outboundSchema: z.ZodType<ReplacePolicy$Outbound, z.ZodTypeDef, ReplacePolicy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ReplacePolicy$ {
    /** @deprecated use `ReplacePolicy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ReplacePolicy, z.ZodTypeDef, unknown>;
    /** @deprecated use `ReplacePolicy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ReplacePolicy$Outbound, z.ZodTypeDef, ReplacePolicy>;
    /** @deprecated use `ReplacePolicy$Outbound` instead. */
    type Outbound = ReplacePolicy$Outbound;
}
export declare function replacePolicyToJSON(replacePolicy: ReplacePolicy): string;
export declare function replacePolicyFromJSON(jsonString: string): SafeParseResult<ReplacePolicy, SDKValidationError>;
