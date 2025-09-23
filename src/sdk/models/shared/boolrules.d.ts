import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * BoolRules describes the constraints applied to `bool` values
 */
export type BoolRules = {
    /**
     * Const specifies that this field must be exactly the specified value
     */
    const?: boolean | null | undefined;
};
/** @internal */
export declare const BoolRules$inboundSchema: z.ZodType<BoolRules, z.ZodTypeDef, unknown>;
/** @internal */
export type BoolRules$Outbound = {
    const?: boolean | null | undefined;
};
/** @internal */
export declare const BoolRules$outboundSchema: z.ZodType<BoolRules$Outbound, z.ZodTypeDef, BoolRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BoolRules$ {
    /** @deprecated use `BoolRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BoolRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `BoolRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BoolRules$Outbound, z.ZodTypeDef, BoolRules>;
    /** @deprecated use `BoolRules$Outbound` instead. */
    type Outbound = BoolRules$Outbound;
}
export declare function boolRulesToJSON(boolRules: BoolRules): string;
export declare function boolRulesFromJSON(jsonString: string): SafeParseResult<BoolRules, SDKValidationError>;
