import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TextField message.
 */
export type TextField = {
    /**
     * The multiline field.
     */
    multiline?: boolean | null | undefined;
};
/** @internal */
export declare const TextField$inboundSchema: z.ZodType<TextField, z.ZodTypeDef, unknown>;
/** @internal */
export type TextField$Outbound = {
    multiline?: boolean | null | undefined;
};
/** @internal */
export declare const TextField$outboundSchema: z.ZodType<TextField$Outbound, z.ZodTypeDef, TextField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TextField$ {
    /** @deprecated use `TextField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TextField, z.ZodTypeDef, unknown>;
    /** @deprecated use `TextField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TextField$Outbound, z.ZodTypeDef, TextField>;
    /** @deprecated use `TextField$Outbound` instead. */
    type Outbound = TextField$Outbound;
}
export declare function textFieldToJSON(textField: TextField): string;
export declare function textFieldFromJSON(jsonString: string): SafeParseResult<TextField, SDKValidationError>;
