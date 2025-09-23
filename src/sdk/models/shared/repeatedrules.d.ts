import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FieldRules, FieldRules$Outbound } from "./fieldrules.js";
/**
 * RepeatedRules describe the constraints applied to `repeated` values
 */
export type RepeatedRules = {
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     *
     * @remarks
     *  evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | null | undefined;
    items?: FieldRules | null | undefined;
    /**
     * MaxItems specifies that this field must have the specified number of
     *
     * @remarks
     *  items at a maximum
     */
    maxItems?: string | null | undefined;
    /**
     * MinItems specifies that this field must have the specified number of
     *
     * @remarks
     *  items at a minimum
     */
    minItems?: string | null | undefined;
    /**
     * Unique specifies that all elements in this field must be unique. This
     *
     * @remarks
     *  contraint is only applicable to scalar and enum types (messages are not
     *  supported).
     */
    unique?: boolean | null | undefined;
};
/** @internal */
export declare const RepeatedRules$inboundSchema: z.ZodType<RepeatedRules, z.ZodTypeDef, unknown>;
/** @internal */
export type RepeatedRules$Outbound = {
    ignoreEmpty?: boolean | null | undefined;
    items?: FieldRules$Outbound | null | undefined;
    maxItems?: string | null | undefined;
    minItems?: string | null | undefined;
    unique?: boolean | null | undefined;
};
/** @internal */
export declare const RepeatedRules$outboundSchema: z.ZodType<RepeatedRules$Outbound, z.ZodTypeDef, RepeatedRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RepeatedRules$ {
    /** @deprecated use `RepeatedRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RepeatedRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `RepeatedRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RepeatedRules$Outbound, z.ZodTypeDef, RepeatedRules>;
    /** @deprecated use `RepeatedRules$Outbound` instead. */
    type Outbound = RepeatedRules$Outbound;
}
export declare function repeatedRulesToJSON(repeatedRules: RepeatedRules): string;
export declare function repeatedRulesFromJSON(jsonString: string): SafeParseResult<RepeatedRules, SDKValidationError>;
