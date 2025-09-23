import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Fixed32Rules describes the constraints applied to `fixed32` values
 */
export type Fixed32Rules = {
    /**
     * Const specifies that this field must be exactly the specified value
     */
    const?: number | null | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     *
     * @remarks
     *  exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     *  range is reversed.
     */
    gt?: number | null | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     *
     * @remarks
     *  specified value, inclusive. If the value of Gte is larger than a
     *  specified Lt or Lte, the range is reversed.
     */
    gte?: number | null | undefined;
    /**
     * IgnoreEmpty specifies that the validation rules of this field should be
     *
     * @remarks
     *  evaluated only if the field is not empty
     */
    ignoreEmpty?: boolean | null | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     *
     * @remarks
     *  values
     */
    in?: Array<number> | null | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     *
     * @remarks
     *  exclusive
     */
    lt?: number | null | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     *
     * @remarks
     *  specified value, inclusive
     */
    lte?: number | null | undefined;
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     *
     * @remarks
     *  values
     */
    notIn?: Array<number> | null | undefined;
};
/** @internal */
export declare const Fixed32Rules$inboundSchema: z.ZodType<Fixed32Rules, z.ZodTypeDef, unknown>;
/** @internal */
export type Fixed32Rules$Outbound = {
    const?: number | null | undefined;
    gt?: number | null | undefined;
    gte?: number | null | undefined;
    ignoreEmpty?: boolean | null | undefined;
    in?: Array<number> | null | undefined;
    lt?: number | null | undefined;
    lte?: number | null | undefined;
    notIn?: Array<number> | null | undefined;
};
/** @internal */
export declare const Fixed32Rules$outboundSchema: z.ZodType<Fixed32Rules$Outbound, z.ZodTypeDef, Fixed32Rules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Fixed32Rules$ {
    /** @deprecated use `Fixed32Rules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Fixed32Rules, z.ZodTypeDef, unknown>;
    /** @deprecated use `Fixed32Rules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Fixed32Rules$Outbound, z.ZodTypeDef, Fixed32Rules>;
    /** @deprecated use `Fixed32Rules$Outbound` instead. */
    type Outbound = Fixed32Rules$Outbound;
}
export declare function fixed32RulesToJSON(fixed32Rules: Fixed32Rules): string;
export declare function fixed32RulesFromJSON(jsonString: string): SafeParseResult<Fixed32Rules, SDKValidationError>;
