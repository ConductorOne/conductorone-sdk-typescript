import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * SInt64Rules describes the constraints applied to `sint64` values
 */
export type SInt64Rules = {
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
export declare const SInt64Rules$inboundSchema: z.ZodType<SInt64Rules, z.ZodTypeDef, unknown>;
/** @internal */
export type SInt64Rules$Outbound = {
    const?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    ignoreEmpty?: boolean | null | undefined;
    in?: Array<string> | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    notIn?: Array<string> | null | undefined;
};
/** @internal */
export declare const SInt64Rules$outboundSchema: z.ZodType<SInt64Rules$Outbound, z.ZodTypeDef, SInt64Rules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SInt64Rules$ {
    /** @deprecated use `SInt64Rules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SInt64Rules, z.ZodTypeDef, unknown>;
    /** @deprecated use `SInt64Rules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SInt64Rules$Outbound, z.ZodTypeDef, SInt64Rules>;
    /** @deprecated use `SInt64Rules$Outbound` instead. */
    type Outbound = SInt64Rules$Outbound;
}
export declare function sInt64RulesToJSON(sInt64Rules: SInt64Rules): string;
export declare function sInt64RulesFromJSON(jsonString: string): SafeParseResult<SInt64Rules, SDKValidationError>;
