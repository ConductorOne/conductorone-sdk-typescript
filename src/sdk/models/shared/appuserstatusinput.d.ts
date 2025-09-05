import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The satus of the applicaiton user.
 */
export type AppUserStatusInput = {};
/** @internal */
export declare const AppUserStatusInput$inboundSchema: z.ZodType<AppUserStatusInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserStatusInput$Outbound = {};
/** @internal */
export declare const AppUserStatusInput$outboundSchema: z.ZodType<AppUserStatusInput$Outbound, z.ZodTypeDef, AppUserStatusInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserStatusInput$ {
    /** @deprecated use `AppUserStatusInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserStatusInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserStatusInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserStatusInput$Outbound, z.ZodTypeDef, AppUserStatusInput>;
    /** @deprecated use `AppUserStatusInput$Outbound` instead. */
    type Outbound = AppUserStatusInput$Outbound;
}
export declare function appUserStatusInputToJSON(appUserStatusInput: AppUserStatusInput): string;
export declare function appUserStatusInputFromJSON(jsonString: string): SafeParseResult<AppUserStatusInput, SDKValidationError>;
