import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FormInput, FormInput$Outbound } from "./forminput.js";
/**
 * The FormTrigger message.
 */
export type FormTrigger = {
    form?: FormInput | null | undefined;
};
/** @internal */
export declare const FormTrigger$inboundSchema: z.ZodType<FormTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type FormTrigger$Outbound = {
    form?: FormInput$Outbound | null | undefined;
};
/** @internal */
export declare const FormTrigger$outboundSchema: z.ZodType<FormTrigger$Outbound, z.ZodTypeDef, FormTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace FormTrigger$ {
    /** @deprecated use `FormTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<FormTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `FormTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<FormTrigger$Outbound, z.ZodTypeDef, FormTrigger>;
    /** @deprecated use `FormTrigger$Outbound` instead. */
    type Outbound = FormTrigger$Outbound;
}
export declare function formTriggerToJSON(formTrigger: FormTrigger): string;
export declare function formTriggerFromJSON(jsonString: string): SafeParseResult<FormTrigger, SDKValidationError>;
