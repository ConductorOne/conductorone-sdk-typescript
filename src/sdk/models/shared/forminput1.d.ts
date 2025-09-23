import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FormInput, FormInput$Outbound } from "./forminput.js";
/**
 * The Form message.
 */
export type FormInput1 = {
    form?: FormInput | null | undefined;
};
/** @internal */
export declare const FormInput1$inboundSchema: z.ZodType<FormInput1, z.ZodTypeDef, unknown>;
/** @internal */
export type FormInput1$Outbound = {
    form?: FormInput$Outbound | null | undefined;
};
/** @internal */
export declare const FormInput1$outboundSchema: z.ZodType<FormInput1$Outbound, z.ZodTypeDef, FormInput1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormInput1$ {
    /** @deprecated use `FormInput1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormInput1, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormInput1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormInput1$Outbound, z.ZodTypeDef, FormInput1>;
    /** @deprecated use `FormInput1$Outbound` instead. */
    type Outbound = FormInput1$Outbound;
}
export declare function formInput1ToJSON(formInput1: FormInput1): string;
export declare function formInput1FromJSON(jsonString: string): SafeParseResult<FormInput1, SDKValidationError>;
