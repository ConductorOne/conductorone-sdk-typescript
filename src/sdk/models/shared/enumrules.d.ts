import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * EnumRules describe the constraints applied to enum values
 */
export type EnumRules = {
    /**
     * Const specifies that this field must be exactly the specified value
     */
    const?: number | null | undefined;
    /**
     * DefinedOnly specifies that this field must be only one of the defined
     *
     * @remarks
     *  values for this enum, failing on any undefined value.
     */
    definedOnly?: boolean | null | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     *
     * @remarks
     *  values
     */
    in?: Array<number> | null | undefined;
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     *
     * @remarks
     *  values
     */
    notIn?: Array<number> | null | undefined;
};
/** @internal */
export declare const EnumRules$inboundSchema: z.ZodType<EnumRules, z.ZodTypeDef, unknown>;
/** @internal */
export type EnumRules$Outbound = {
    const?: number | null | undefined;
    definedOnly?: boolean | null | undefined;
    in?: Array<number> | null | undefined;
    notIn?: Array<number> | null | undefined;
};
/** @internal */
export declare const EnumRules$outboundSchema: z.ZodType<EnumRules$Outbound, z.ZodTypeDef, EnumRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EnumRules$ {
    /** @deprecated use `EnumRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EnumRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `EnumRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EnumRules$Outbound, z.ZodTypeDef, EnumRules>;
    /** @deprecated use `EnumRules$Outbound` instead. */
    type Outbound = EnumRules$Outbound;
}
export declare function enumRulesToJSON(enumRules: EnumRules): string;
export declare function enumRulesFromJSON(jsonString: string): SafeParseResult<EnumRules, SDKValidationError>;
