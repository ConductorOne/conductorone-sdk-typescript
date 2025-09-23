import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * TimestampRules describe the constraints applied exclusively to the
 *
 * @remarks
 *  `google.protobuf.Timestamp` well-known type
 */
export type TimestampRules = {
    const?: Date | null | undefined;
    gt?: Date | null | undefined;
    /**
     * GtNow specifies that this must be greater than the current time. GtNow
     *
     * @remarks
     *  can only be used with the Within rule.
     */
    gtNow?: boolean | null | undefined;
    gte?: Date | null | undefined;
    lt?: Date | null | undefined;
    /**
     * LtNow specifies that this must be less than the current time. LtNow
     *
     * @remarks
     *  can only be used with the Within rule.
     */
    ltNow?: boolean | null | undefined;
    lte?: Date | null | undefined;
    /**
     * Required specifies that this field must be set
     */
    required?: boolean | null | undefined;
    within?: string | null | undefined;
};
/** @internal */
export declare const TimestampRules$inboundSchema: z.ZodType<TimestampRules, z.ZodTypeDef, unknown>;
/** @internal */
export type TimestampRules$Outbound = {
    const?: string | null | undefined;
    gt?: string | null | undefined;
    gtNow?: boolean | null | undefined;
    gte?: string | null | undefined;
    lt?: string | null | undefined;
    ltNow?: boolean | null | undefined;
    lte?: string | null | undefined;
    required?: boolean | null | undefined;
    within?: string | null | undefined;
};
/** @internal */
export declare const TimestampRules$outboundSchema: z.ZodType<TimestampRules$Outbound, z.ZodTypeDef, TimestampRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TimestampRules$ {
    /** @deprecated use `TimestampRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TimestampRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `TimestampRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TimestampRules$Outbound, z.ZodTypeDef, TimestampRules>;
    /** @deprecated use `TimestampRules$Outbound` instead. */
    type Outbound = TimestampRules$Outbound;
}
export declare function timestampRulesToJSON(timestampRules: TimestampRules): string;
export declare function timestampRulesFromJSON(jsonString: string): SafeParseResult<TimestampRules, SDKValidationError>;
