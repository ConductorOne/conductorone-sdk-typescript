import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * UInt64Rules describes the constraints applied to `uint64` values
 */
export type UInt64Rules = {
    /**
     * Const specifies that this field must be exactly the specified value
     */
    const?: string | null | undefined;
    /**
     * Gt specifies that this field must be greater than the specified value,
     *
     * @remarks
     *  exclusive. If the value of Gt is larger than a specified Lt or Lte, the
     *  range is reversed.
     */
    gt?: string | null | undefined;
    /**
     * Gte specifies that this field must be greater than or equal to the
     *
     * @remarks
     *  specified value, inclusive. If the value of Gte is larger than a
     *  specified Lt or Lte, the range is reversed.
     */
    gte?: string | null | undefined;
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
    in?: Array<string> | null | undefined;
    /**
     * Lt specifies that this field must be less than the specified value,
     *
     * @remarks
     *  exclusive
     */
    lt?: string | null | undefined;
    /**
     * Lte specifies that this field must be less than or equal to the
     *
     * @remarks
     *  specified value, inclusive
     */
    lte?: string | null | undefined;
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     *
     * @remarks
     *  values
     */
    notIn?: Array<string> | null | undefined;
};
/** @internal */
export declare const UInt64Rules$inboundSchema: z.ZodType<UInt64Rules, z.ZodTypeDef, unknown>;
/** @internal */
export type UInt64Rules$Outbound = {
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
export declare const UInt64Rules$outboundSchema: z.ZodType<UInt64Rules$Outbound, z.ZodTypeDef, UInt64Rules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UInt64Rules$ {
    /** @deprecated use `UInt64Rules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UInt64Rules, z.ZodTypeDef, unknown>;
    /** @deprecated use `UInt64Rules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UInt64Rules$Outbound, z.ZodTypeDef, UInt64Rules>;
    /** @deprecated use `UInt64Rules$Outbound` instead. */
    type Outbound = UInt64Rules$Outbound;
}
export declare function uInt64RulesToJSON(uInt64Rules: UInt64Rules): string;
export declare function uInt64RulesFromJSON(jsonString: string): SafeParseResult<UInt64Rules, SDKValidationError>;
