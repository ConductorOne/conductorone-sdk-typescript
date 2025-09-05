import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BoolRules, BoolRules$Outbound } from "./boolrules.js";
import { CheckboxField, CheckboxField$Outbound } from "./checkboxfield.js";
/**
 * The BoolField message.
 *
 * @remarks
 *
 * This message contains a oneof named view. Only a single field of the following list may be set at a time:
 *   - checkboxField
 *
 * This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
 *   - rules
 */
export type BoolField = {
    checkboxField?: CheckboxField | null | undefined;
    /**
     * The defaultValue field.
     */
    defaultValue?: boolean | null | undefined;
    rules?: BoolRules | null | undefined;
};
/** @internal */
export declare const BoolField$inboundSchema: z.ZodType<BoolField, z.ZodTypeDef, unknown>;
/** @internal */
export type BoolField$Outbound = {
    checkboxField?: CheckboxField$Outbound | null | undefined;
    defaultValue?: boolean | null | undefined;
    rules?: BoolRules$Outbound | null | undefined;
};
/** @internal */
export declare const BoolField$outboundSchema: z.ZodType<BoolField$Outbound, z.ZodTypeDef, BoolField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BoolField$ {
    /** @deprecated use `BoolField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BoolField, z.ZodTypeDef, unknown>;
    /** @deprecated use `BoolField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BoolField$Outbound, z.ZodTypeDef, BoolField>;
    /** @deprecated use `BoolField$Outbound` instead. */
    type Outbound = BoolField$Outbound;
}
export declare function boolFieldToJSON(boolField: BoolField): string;
export declare function boolFieldFromJSON(jsonString: string): SafeParseResult<BoolField, SDKValidationError>;
