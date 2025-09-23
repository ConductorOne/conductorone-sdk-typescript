import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementProxy message.
 *
 * @remarks
 *
 * This message contains a oneof named _implicit. Only a single field of the following list may be set at a time:
 *   - implicit
 */
export type AppEntitlementProxy = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The dstAppEntitlementId field.
     */
    dstAppEntitlementId?: string | null | undefined;
    /**
     * The dstAppId field.
     */
    dstAppId?: string | null | undefined;
    /**
     * If true, the binding doesn't not exist yet and is from the list of the entitlements from the parent app.
     *
     * @remarks
     *  typically the IdP that handles provisioning for the app instead of C1s connector.
     * This field is part of the `_implicit` oneof.
     * See the documentation for `c1.api.app.v1.AppEntitlementProxy` for more details.
     */
    implicit?: boolean | null | undefined;
    /**
     * The srcAppEntitlementId field.
     */
    srcAppEntitlementId?: string | null | undefined;
    /**
     * The srcAppId field.
     */
    srcAppId?: string | null | undefined;
    /**
     * The systemBuiltin field.
     */
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxy$inboundSchema: z.ZodType<AppEntitlementProxy, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementProxy$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    dstAppEntitlementId?: string | null | undefined;
    dstAppId?: string | null | undefined;
    implicit?: boolean | null | undefined;
    srcAppEntitlementId?: string | null | undefined;
    srcAppId?: string | null | undefined;
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementProxy$outboundSchema: z.ZodType<AppEntitlementProxy$Outbound, z.ZodTypeDef, AppEntitlementProxy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementProxy$ {
    /** @deprecated use `AppEntitlementProxy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementProxy, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementProxy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementProxy$Outbound, z.ZodTypeDef, AppEntitlementProxy>;
    /** @deprecated use `AppEntitlementProxy$Outbound` instead. */
    type Outbound = AppEntitlementProxy$Outbound;
}
export declare function appEntitlementProxyToJSON(appEntitlementProxy: AppEntitlementProxy): string;
export declare function appEntitlementProxyFromJSON(jsonString: string): SafeParseResult<AppEntitlementProxy, SDKValidationError>;
