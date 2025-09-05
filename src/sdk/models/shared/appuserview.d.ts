import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUser, AppUser$Outbound } from "./appuser.js";
/**
 * The AppUserView contains an app user as well as paths for apps, identity users, and last usage in expanded arrays.
 */
export type AppUserView = {
    /**
     * JSONPATH expression indicating where the app is expanded in expanded arrays indicated in the request.
     */
    appPath?: string | null | undefined;
    appUser?: AppUser | null | undefined;
    /**
     * JSONPATH expression indicating where the identity user is expanded in expanded arrays indicated in the request.
     */
    identityUserPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating where the last usage information is expanded in expanded arrays indicated in the request.
     */
    lastUsagePath?: string | null | undefined;
};
/** @internal */
export declare const AppUserView$inboundSchema: z.ZodType<AppUserView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserView$Outbound = {
    appPath?: string | null | undefined;
    appUser?: AppUser$Outbound | null | undefined;
    identityUserPath?: string | null | undefined;
    lastUsagePath?: string | null | undefined;
};
/** @internal */
export declare const AppUserView$outboundSchema: z.ZodType<AppUserView$Outbound, z.ZodTypeDef, AppUserView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserView$ {
    /** @deprecated use `AppUserView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserView$Outbound, z.ZodTypeDef, AppUserView>;
    /** @deprecated use `AppUserView$Outbound` instead. */
    type Outbound = AppUserView$Outbound;
}
export declare function appUserViewToJSON(appUserView: AppUserView): string;
export declare function appUserViewFromJSON(jsonString: string): SafeParseResult<AppUserView, SDKValidationError>;
