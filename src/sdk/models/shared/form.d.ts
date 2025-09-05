import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { FormInput, FormInput$Outbound } from "./forminput.js";
/**
 * The Form message.
 */
export type Form = {
    form?: FormInput | null | undefined;
};
/** @internal */
export declare const Form$inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
/** @internal */
export type Form$Outbound = {
    form?: FormInput$Outbound | null | undefined;
};
/** @internal */
export declare const Form$outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Form$ {
    /** @deprecated use `Form$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Form, z.ZodTypeDef, unknown>;
    /** @deprecated use `Form$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Form$Outbound, z.ZodTypeDef, Form>;
    /** @deprecated use `Form$Outbound` instead. */
    type Outbound = Form$Outbound;
}
export declare function formToJSON(form: Form): string;
export declare function formFromJSON(jsonString: string): SafeParseResult<Form, SDKValidationError>;
