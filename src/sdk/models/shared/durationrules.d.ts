import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * DurationRules describe the constraints applied exclusively to the
 *
 * @remarks
 *  `google.protobuf.Duration` well-known type
 */
export type DurationRules = {
    const?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    /**
     * In specifies that this field must be equal to one of the specified
     *
     * @remarks
     *  values
     */
    in?: Array<string> | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    /**
     * NotIn specifies that this field cannot be equal to one of the specified
     *
     * @remarks
     *  values
     */
    notIn?: Array<string> | null | undefined;
    /**
     * Required specifies that this field must be set
     */
    required?: boolean | null | undefined;
};
/** @internal */
export declare const DurationRules$inboundSchema: z.ZodType<DurationRules, z.ZodTypeDef, unknown>;
/** @internal */
export type DurationRules$Outbound = {
    const?: string | null | undefined;
    gt?: string | null | undefined;
    gte?: string | null | undefined;
    in?: Array<string> | null | undefined;
    lt?: string | null | undefined;
    lte?: string | null | undefined;
    notIn?: Array<string> | null | undefined;
    required?: boolean | null | undefined;
};
/** @internal */
export declare const DurationRules$outboundSchema: z.ZodType<DurationRules$Outbound, z.ZodTypeDef, DurationRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DurationRules$ {
    /** @deprecated use `DurationRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DurationRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `DurationRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DurationRules$Outbound, z.ZodTypeDef, DurationRules>;
    /** @deprecated use `DurationRules$Outbound` instead. */
    type Outbound = DurationRules$Outbound;
}
export declare function durationRulesToJSON(durationRules: DurationRules): string;
export declare function durationRulesFromJSON(jsonString: string): SafeParseResult<DurationRules, SDKValidationError>;
