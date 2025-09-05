import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { AppUserView, AppUserView$Outbound } from "./appuserview.js";
/**
 * The AppEntitlementUserView (aka grant view) describes the relationship between an app user and an entitlement. They have more recently been referred to as grants.
 */
export type AppEntitlementUserView = {
    appEntitlementUserBindingCreatedAt?: Date | null | undefined;
    appEntitlementUserBindingDeprovisionAt?: Date | null | undefined;
    appUser?: AppUserView | null | undefined;
    /**
     * List of sources for the grant, ie. groups, roles, etc.
     */
    grantSources?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserView$inboundSchema: z.ZodType<AppEntitlementUserView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserView$Outbound = {
    appEntitlementUserBindingCreatedAt?: string | null | undefined;
    appEntitlementUserBindingDeprovisionAt?: string | null | undefined;
    appUser?: AppUserView$Outbound | null | undefined;
    grantSources?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserView$outboundSchema: z.ZodType<AppEntitlementUserView$Outbound, z.ZodTypeDef, AppEntitlementUserView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserView$ {
    /** @deprecated use `AppEntitlementUserView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserView$Outbound, z.ZodTypeDef, AppEntitlementUserView>;
    /** @deprecated use `AppEntitlementUserView$Outbound` instead. */
    type Outbound = AppEntitlementUserView$Outbound;
}
export declare function appEntitlementUserViewToJSON(appEntitlementUserView: AppEntitlementUserView): string;
export declare function appEntitlementUserViewFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserView, SDKValidationError>;
