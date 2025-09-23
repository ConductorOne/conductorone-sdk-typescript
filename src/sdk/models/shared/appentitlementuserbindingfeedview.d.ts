import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBindingFeed, AppEntitlementUserBindingFeed$Outbound } from "./appentitlementuserbindingfeed.js";
/**
 * The AppEntitlementUserBindingFeedView message.
 */
export type AppEntitlementUserBindingFeedView = {
    /**
     * The appPath field.
     */
    appPath?: string | null | undefined;
    /**
     * The appUserPath field.
     */
    appUserPath?: string | null | undefined;
    /**
     * The entitlementPath field.
     */
    entitlementPath?: string | null | undefined;
    feed?: AppEntitlementUserBindingFeed | null | undefined;
    /**
     * The ticketPath field.
     */
    ticketPath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingFeedView$inboundSchema: z.ZodType<AppEntitlementUserBindingFeedView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBindingFeedView$Outbound = {
    appPath?: string | null | undefined;
    appUserPath?: string | null | undefined;
    entitlementPath?: string | null | undefined;
    feed?: AppEntitlementUserBindingFeed$Outbound | null | undefined;
    ticketPath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingFeedView$outboundSchema: z.ZodType<AppEntitlementUserBindingFeedView$Outbound, z.ZodTypeDef, AppEntitlementUserBindingFeedView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBindingFeedView$ {
    /** @deprecated use `AppEntitlementUserBindingFeedView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBindingFeedView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBindingFeedView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBindingFeedView$Outbound, z.ZodTypeDef, AppEntitlementUserBindingFeedView>;
    /** @deprecated use `AppEntitlementUserBindingFeedView$Outbound` instead. */
    type Outbound = AppEntitlementUserBindingFeedView$Outbound;
}
export declare function appEntitlementUserBindingFeedViewToJSON(appEntitlementUserBindingFeedView: AppEntitlementUserBindingFeedView): string;
export declare function appEntitlementUserBindingFeedViewFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBindingFeedView, SDKValidationError>;
