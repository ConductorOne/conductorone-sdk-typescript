import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppRef message.
 */
export type AppRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const AppRef$inboundSchema: z.ZodType<AppRef, z.ZodTypeDef, unknown>;
/** @internal */
export type AppRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const AppRef$outboundSchema: z.ZodType<AppRef$Outbound, z.ZodTypeDef, AppRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppRef$ {
    /** @deprecated use `AppRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppRef$Outbound, z.ZodTypeDef, AppRef>;
    /** @deprecated use `AppRef$Outbound` instead. */
    type Outbound = AppRef$Outbound;
}
export declare function appRefToJSON(appRef: AppRef): string;
export declare function appRefFromJSON(jsonString: string): SafeParseResult<AppRef, SDKValidationError>;
