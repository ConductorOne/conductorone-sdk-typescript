import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The NumberField message.
 */
export type NumberField = {
    /**
     * The maxValue field.
     */
    maxValue?: number | null | undefined;
    /**
     * The minValue field.
     */
    minValue?: number | null | undefined;
    /**
     * The step field.
     */
    step?: number | null | undefined;
};
/** @internal */
export declare const NumberField$inboundSchema: z.ZodType<NumberField, z.ZodTypeDef, unknown>;
/** @internal */
export type NumberField$Outbound = {
    maxValue?: string | null | undefined;
    minValue?: string | null | undefined;
    step?: string | null | undefined;
};
/** @internal */
export declare const NumberField$outboundSchema: z.ZodType<NumberField$Outbound, z.ZodTypeDef, NumberField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NumberField$ {
    /** @deprecated use `NumberField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NumberField, z.ZodTypeDef, unknown>;
    /** @deprecated use `NumberField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NumberField$Outbound, z.ZodTypeDef, NumberField>;
    /** @deprecated use `NumberField$Outbound` instead. */
    type Outbound = NumberField$Outbound;
}
export declare function numberFieldToJSON(numberField: NumberField): string;
export declare function numberFieldFromJSON(jsonString: string): SafeParseResult<NumberField, SDKValidationError>;
