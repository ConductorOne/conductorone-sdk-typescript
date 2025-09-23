import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PasswordField message.
 */
export type PasswordField = {};
/** @internal */
export declare const PasswordField$inboundSchema: z.ZodType<PasswordField, z.ZodTypeDef, unknown>;
/** @internal */
export type PasswordField$Outbound = {};
/** @internal */
export declare const PasswordField$outboundSchema: z.ZodType<PasswordField$Outbound, z.ZodTypeDef, PasswordField>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PasswordField$ {
    /** @deprecated use `PasswordField$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PasswordField, z.ZodTypeDef, unknown>;
    /** @deprecated use `PasswordField$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PasswordField$Outbound, z.ZodTypeDef, PasswordField>;
    /** @deprecated use `PasswordField$Outbound` instead. */
    type Outbound = PasswordField$Outbound;
}
export declare function passwordFieldToJSON(passwordField: PasswordField): string;
export declare function passwordFieldFromJSON(jsonString: string): SafeParseResult<PasswordField, SDKValidationError>;
