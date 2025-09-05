import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Int64Rules, Int64Rules$Outbound } from "./int64rules.js";
import { NumberField, NumberField$Outbound } from "./numberfield.js";
/**
 * The Int64Field message.
 *
 * @remarks
 *
 * This message contains a oneof named view. Only a single field of the following list may be set at a time:
 *   - numberField
 *
 * This message contains a oneof named _default_value. Only a single field of the following list may be set at a time:
 *   - defaultValue
 *
 * This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
 *   - rules
 */
export type Int64Field = {
    /**
     * The defaultValue field.
     *
     * @remarks
     * This field is part of the `_default_value` oneof.
     * See the documentation for `c1.api.form.v1.Int64Field` for more details.
     */
    defaultValue?: number | null | undefined;
    numberField?: NumberField | null | undefined;
    /**
     * The placeholder field.
     */
    placeholder?: string | null | undefined;
    rules?: Int64Rules | null | undefined;
};
/** @internal */
export declare const Int64Field$inboundSchema: z.ZodType<Int64Field, z.ZodTypeDef, unknown>;
/** @internal */
export type Int64Field$Outbound = {
    defaultValue?: string | null | undefined;
    numberField?: NumberField$Outbound | null | undefined;
    placeholder?: string | null | undefined;
    rules?: Int64Rules$Outbound | null | undefined;
};
/** @internal */
export declare const Int64Field$outboundSchema: z.ZodType<Int64Field$Outbound, z.ZodTypeDef, Int64Field>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Int64Field$ {
    /** @deprecated use `Int64Field$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Int64Field, z.ZodTypeDef, unknown>;
    /** @deprecated use `Int64Field$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Int64Field$Outbound, z.ZodTypeDef, Int64Field>;
    /** @deprecated use `Int64Field$Outbound` instead. */
    type Outbound = Int64Field$Outbound;
}
export declare function int64FieldToJSON(int64Field: Int64Field): string;
export declare function int64FieldFromJSON(jsonString: string): SafeParseResult<Int64Field, SDKValidationError>;
