import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { AppUser, AppUser$Outbound } from "./appuser.js";
import { GrantReason, GrantReason$Outbound } from "./grantreason.js";
import { User, User$Outbound } from "./user.js";
/**
 * The AppEntitlementWithExpired message.
 */
export type AppEntitlementWithExpired = {
    /**
     * The appEntitlementId field.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    appUser?: AppUser | null | undefined;
    /**
     * The appUserId field.
     */
    appUserId?: string | null | undefined;
    discovered?: Date | null | undefined;
    expired?: Date | null | undefined;
    /**
     * The grantReasons field.
     */
    grantReasons?: Array<GrantReason> | null | undefined;
    /**
     * The grantSources field.
     */
    grantSources?: Array<AppEntitlementRef> | null | undefined;
    user?: User | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithExpired$inboundSchema: z.ZodType<AppEntitlementWithExpired, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementWithExpired$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUser?: AppUser$Outbound | null | undefined;
    appUserId?: string | null | undefined;
    discovered?: string | null | undefined;
    expired?: string | null | undefined;
    grantReasons?: Array<GrantReason$Outbound> | null | undefined;
    grantSources?: Array<AppEntitlementRef$Outbound> | null | undefined;
    user?: User$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithExpired$outboundSchema: z.ZodType<AppEntitlementWithExpired$Outbound, z.ZodTypeDef, AppEntitlementWithExpired>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementWithExpired$ {
    /** @deprecated use `AppEntitlementWithExpired$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementWithExpired, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementWithExpired$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementWithExpired$Outbound, z.ZodTypeDef, AppEntitlementWithExpired>;
    /** @deprecated use `AppEntitlementWithExpired$Outbound` instead. */
    type Outbound = AppEntitlementWithExpired$Outbound;
}
export declare function appEntitlementWithExpiredToJSON(appEntitlementWithExpired: AppEntitlementWithExpired): string;
export declare function appEntitlementWithExpiredFromJSON(jsonString: string): SafeParseResult<AppEntitlementWithExpired, SDKValidationError>;
