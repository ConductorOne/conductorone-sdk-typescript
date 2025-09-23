import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * SInt32Rules describes the constraints applied to `sint32` values
 */
export type SInt32Rules = {
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
export declare const SInt32Rules$inboundSchema: z.ZodType<SInt32Rules, z.ZodTypeDef, unknown>;
/** @internal */
export type SInt32Rules$Outbound = {
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
export declare const SInt32Rules$outboundSchema: z.ZodType<SInt32Rules$Outbound, z.ZodTypeDef, SInt32Rules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SInt32Rules$ {
    /** @deprecated use `SInt32Rules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SInt32Rules, z.ZodTypeDef, unknown>;
    /** @deprecated use `SInt32Rules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SInt32Rules$Outbound, z.ZodTypeDef, SInt32Rules>;
    /** @deprecated use `SInt32Rules$Outbound` instead. */
    type Outbound = SInt32Rules$Outbound;
}
export declare function sInt32RulesToJSON(sInt32Rules: SInt32Rules): string;
export declare function sInt32RulesFromJSON(jsonString: string): SafeParseResult<SInt32Rules, SDKValidationError>;
