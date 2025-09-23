import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * BytesRules describe the constraints applied to `bytes` values
 *
 * @remarks
 *
 * This message contains a oneof named well_known. Only a single field of the following list may be set at a time:
 *   - ip
 *   - ipv4
 *   - ipv6
 */
export type BytesRules = {
    /**
     * Const specifies that this field must be exactly the specified value
     */
    const?: string | null | undefined;
    /**
     * Contains specifies that this field must have the specified bytes
     *
     * @remarks
     *  anywhere in the string.
     */
    contains?: string | null | undefined;
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
     * Ip specifies that the field must be a valid IP (v4 or v6) address in
     *
     * @remarks
     *  byte format
     * This field is part of the `well_known` oneof.
     * See the documentation for `validate.BytesRules` for more details.
     */
    ip?: boolean | null | undefined;
    /**
     * Ipv4 specifies that the field must be a valid IPv4 address in byte
     *
     * @remarks
     *  format
     * This field is part of the `well_known` oneof.
     * See the documentation for `validate.BytesRules` for more details.
     */
    ipv4?: boolean | null | undefined;
    /**
     * Ipv6 specifies that the field must be a valid IPv6 address in byte
     *
     * @remarks
     *  format
     * This field is part of the `well_known` oneof.
     * See the documentation for `validate.BytesRules` for more details.
     */
    ipv6?: boolean | null | undefined;
    /**
     * Len specifies that this field must be the specified number of bytes
     */
    len?: string | null | undefined;
    /**
     * MaxLen specifies that this field must be the specified number of bytes
     *
     * @remarks
     *  at a maximum
     */
    maxLen?: string | null | undefined;
    /**
     * MinLen specifies that this field must be the specified number of bytes
     *
     * @remarks
     *  at a minimum
     */
    minLen?: string | null | undefined;
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     *
     * @remarks
     *  values
     */
    notIn?: Array<string> | null | undefined;
    /**
     * Pattern specifes that this field must match against the specified
     *
     * @remarks
     *  regular expression (RE2 syntax). The included expression should elide
     *  any delimiters.
     */
    pattern?: string | null | undefined;
    /**
     * Prefix specifies that this field must have the specified bytes at the
     *
     * @remarks
     *  beginning of the string.
     */
    prefix?: string | null | undefined;
    /**
     * Suffix specifies that this field must have the specified bytes at the
     *
     * @remarks
     *  end of the string.
     */
    suffix?: string | null | undefined;
};
/** @internal */
export declare const BytesRules$inboundSchema: z.ZodType<BytesRules, z.ZodTypeDef, unknown>;
/** @internal */
export type BytesRules$Outbound = {
    const?: string | null | undefined;
    contains?: string | null | undefined;
    ignoreEmpty?: boolean | null | undefined;
    in?: Array<string> | null | undefined;
    ip?: boolean | null | undefined;
    ipv4?: boolean | null | undefined;
    ipv6?: boolean | null | undefined;
    len?: string | null | undefined;
    maxLen?: string | null | undefined;
    minLen?: string | null | undefined;
    notIn?: Array<string> | null | undefined;
    pattern?: string | null | undefined;
    prefix?: string | null | undefined;
    suffix?: string | null | undefined;
};
/** @internal */
export declare const BytesRules$outboundSchema: z.ZodType<BytesRules$Outbound, z.ZodTypeDef, BytesRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BytesRules$ {
    /** @deprecated use `BytesRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BytesRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `BytesRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BytesRules$Outbound, z.ZodTypeDef, BytesRules>;
    /** @deprecated use `BytesRules$Outbound` instead. */
    type Outbound = BytesRules$Outbound;
}
export declare function bytesRulesToJSON(bytesRules: BytesRules): string;
export declare function bytesRulesFromJSON(jsonString: string): SafeParseResult<BytesRules, SDKValidationError>;
