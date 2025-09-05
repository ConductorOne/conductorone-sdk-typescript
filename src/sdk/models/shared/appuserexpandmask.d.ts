import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppUserExpandMask message contains a list of paths to expand in the response.
 */
export type AppUserExpandMask = {
    /**
     * The paths to expand in the response. May be any combination of "*", "identity_user_id", "app_id", and "last_usage".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppUserExpandMask$inboundSchema: z.ZodType<AppUserExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppUserExpandMask$outboundSchema: z.ZodType<AppUserExpandMask$Outbound, z.ZodTypeDef, AppUserExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserExpandMask$ {
    /** @deprecated use `AppUserExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserExpandMask$Outbound, z.ZodTypeDef, AppUserExpandMask>;
    /** @deprecated use `AppUserExpandMask$Outbound` instead. */
    type Outbound = AppUserExpandMask$Outbound;
}
export declare function appUserExpandMaskToJSON(appUserExpandMask: AppUserExpandMask): string;
export declare function appUserExpandMaskFromJSON(jsonString: string): SafeParseResult<AppUserExpandMask, SDKValidationError>;
