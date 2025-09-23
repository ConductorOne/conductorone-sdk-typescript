import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PasswordField, PasswordField$Outbound } from "./passwordfield.js";
import { StringRules, StringRules$Outbound } from "./stringrules.js";
import { TextField, TextField$Outbound } from "./textfield.js";
/**
 * The StringField message.
 *
 * @remarks
 *
 * This message contains a oneof named view. Only a single field of the following list may be set at a time:
 *   - textField
 *   - passwordField
 *
 * This message contains a oneof named _rules. Only a single field of the following list may be set at a time:
 *   - rules
 */
export type StringField = {
    /**
     * The defaultValue field.
     */
    defaultValue?: string | null | undefined;
    passwordField?: PasswordField | null | undefined;
    /**
     * The placeholder field.
     */
    placeholder?: string | null | undefined;
    rules?: StringRules | null | undefined;
    textField?: TextField | null | undefined;
};
/** @internal */
export declare const StringField$inboundSchema: z.ZodType<StringField, z.ZodTypeDef, unknown>;
/** @internal */
export type StringField$Outbound = {
    defaultValue?: string | null | undefined;
    passwordField?: PasswordField$Outbound | null | undefined;
    placeholder?: string | null | undefined;
    rules?: StringRules$Outbound | null | undefined;
    textField?: TextField$Outbound | null | undefined;
};
/** @internal */
export declare const StringField$outboundSchema: z.ZodType<StringField$Outbound, z.ZodTypeDef, StringField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StringField$ {
    /** @deprecated use `StringField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StringField, z.ZodTypeDef, unknown>;
    /** @deprecated use `StringField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StringField$Outbound, z.ZodTypeDef, StringField>;
    /** @deprecated use `StringField$Outbound` instead. */
    type Outbound = StringField$Outbound;
}
export declare function stringFieldToJSON(stringField: StringField): string;
export declare function stringFieldFromJSON(jsonString: string): SafeParseResult<StringField, SDKValidationError>;
