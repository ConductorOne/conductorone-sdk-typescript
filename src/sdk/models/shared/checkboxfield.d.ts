import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The CheckboxField message.
 */
export type CheckboxField = {};
/** @internal */
export declare const CheckboxField$inboundSchema: z.ZodType<CheckboxField, z.ZodTypeDef, unknown>;
/** @internal */
export type CheckboxField$Outbound = {};
/** @internal */
export declare const CheckboxField$outboundSchema: z.ZodType<CheckboxField$Outbound, z.ZodTypeDef, CheckboxField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CheckboxField$ {
    /** @deprecated use `CheckboxField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CheckboxField, z.ZodTypeDef, unknown>;
    /** @deprecated use `CheckboxField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CheckboxField$Outbound, z.ZodTypeDef, CheckboxField>;
    /** @deprecated use `CheckboxField$Outbound` instead. */
    type Outbound = CheckboxField$Outbound;
}
export declare function checkboxFieldToJSON(checkboxField: CheckboxField): string;
export declare function checkboxFieldFromJSON(jsonString: string): SafeParseResult<CheckboxField, SDKValidationError>;
