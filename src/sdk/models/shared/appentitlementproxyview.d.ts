import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementProxy, AppEntitlementProxy$Outbound } from "./appentitlementproxy.js";
/**
 * The AppEntitlementProxyView message.
 */
export type AppEntitlementProxyView = {
    appProxyEntitlement?: AppEntitlementProxy | null | undefined;
    /**
     * The dstAppEntitlementPath field.
     */
    dstAppEntitlementPath?: string | null | undefined;
    /**
     * The dstAppPath field.
     */
    dstAppPath?: string | null | undefined;
    /**
     * The srcAppEntitlementPath field.
     */
    srcAppEntitlementPath?: string | null | undefined;
    /**
     * The srcAppPath field.
     */
    srcAppPath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxyView$inboundSchema: z.ZodType<AppEntitlementProxyView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementProxyView$Outbound = {
    appProxyEntitlement?: AppEntitlementProxy$Outbound | null | undefined;
    dstAppEntitlementPath?: string | null | undefined;
    dstAppPath?: string | null | undefined;
    srcAppEntitlementPath?: string | null | undefined;
    srcAppPath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxyView$outboundSchema: z.ZodType<AppEntitlementProxyView$Outbound, z.ZodTypeDef, AppEntitlementProxyView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementProxyView$ {
    /** @deprecated use `AppEntitlementProxyView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementProxyView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementProxyView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementProxyView$Outbound, z.ZodTypeDef, AppEntitlementProxyView>;
    /** @deprecated use `AppEntitlementProxyView$Outbound` instead. */
    type Outbound = AppEntitlementProxyView$Outbound;
}
export declare function appEntitlementProxyViewToJSON(appEntitlementProxyView: AppEntitlementProxyView): string;
export declare function appEntitlementProxyViewFromJSON(jsonString: string): SafeParseResult<AppEntitlementProxyView, SDKValidationError>;
