import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * AnyRules describe constraints applied exclusively to the
 *
 * @remarks
 *  `google.protobuf.Any` well-known type
 */
export type AnyRules = {
    /**
     * In specifies that this field's `type_url` must be equal to one of the
     *
     * @remarks
     *  specified values.
     */
    in?: Array<string> | null | undefined;
    /**
     * NotIn specifies that this field's `type_url` must not be equal to any of
     *
     * @remarks
     *  the specified values.
     */
    notIn?: Array<string> | null | undefined;
    /**
     * Required specifies that this field must be set
     */
    required?: boolean | null | undefined;
};
/** @internal */
export declare const AnyRules$inboundSchema: z.ZodType<AnyRules, z.ZodTypeDef, unknown>;
/** @internal */
export type AnyRules$Outbound = {
    in?: Array<string> | null | undefined;
    notIn?: Array<string> | null | undefined;
    required?: boolean | null | undefined;
};
/** @internal */
export declare const AnyRules$outboundSchema: z.ZodType<AnyRules$Outbound, z.ZodTypeDef, AnyRules>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AnyRules$ {
    /** @deprecated use `AnyRules$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AnyRules, z.ZodTypeDef, unknown>;
    /** @deprecated use `AnyRules$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AnyRules$Outbound, z.ZodTypeDef, AnyRules>;
    /** @deprecated use `AnyRules$Outbound` instead. */
    type Outbound = AnyRules$Outbound;
}
export declare function anyRulesToJSON(anyRules: AnyRules): string;
export declare function anyRulesFromJSON(jsonString: string): SafeParseResult<AnyRules, SDKValidationError>;
