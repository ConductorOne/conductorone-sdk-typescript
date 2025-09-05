import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlement, AppEntitlement$Outbound } from "./appentitlement.js";
/**
 * The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.
 */
export type AppEntitlementView = {
    appEntitlement?: AppEntitlement | null | undefined;
    /**
     * JSONPATH expression indicating the location of the App object in the  array.
     */
    appPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the App Resource Type object in the expanded array.
     */
    appResourcePath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the App Resource object in the  array.
     */
    appResourceTypePath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementView$inboundSchema: z.ZodType<AppEntitlementView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementView$Outbound = {
    appEntitlement?: AppEntitlement$Outbound | null | undefined;
    appPath?: string | null | undefined;
    appResourcePath?: string | null | undefined;
    appResourceTypePath?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementView$outboundSchema: z.ZodType<AppEntitlementView$Outbound, z.ZodTypeDef, AppEntitlementView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementView$ {
    /** @deprecated use `AppEntitlementView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementView$Outbound, z.ZodTypeDef, AppEntitlementView>;
    /** @deprecated use `AppEntitlementView$Outbound` instead. */
    type Outbound = AppEntitlementView$Outbound;
}
export declare function appEntitlementViewToJSON(appEntitlementView: AppEntitlementView): string;
export declare function appEntitlementViewFromJSON(jsonString: string): SafeParseResult<AppEntitlementView, SDKValidationError>;
