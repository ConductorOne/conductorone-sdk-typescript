import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The app entitlement expand mask allows the user to get additional information when getting responses containing app entitlement views.
 */
export type AppEntitlementExpandMask = {
    /**
     * Array of strings to describe which items to expand on the return value. Can be any combination of "*", "app_id", "app_resource_type_id", or "app_resource_id".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementExpandMask$inboundSchema: z.ZodType<AppEntitlementExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppEntitlementExpandMask$outboundSchema: z.ZodType<AppEntitlementExpandMask$Outbound, z.ZodTypeDef, AppEntitlementExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementExpandMask$ {
    /** @deprecated use `AppEntitlementExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementExpandMask$Outbound, z.ZodTypeDef, AppEntitlementExpandMask>;
    /** @deprecated use `AppEntitlementExpandMask$Outbound` instead. */
    type Outbound = AppEntitlementExpandMask$Outbound;
}
export declare function appEntitlementExpandMaskToJSON(appEntitlementExpandMask: AppEntitlementExpandMask): string;
export declare function appEntitlementExpandMaskFromJSON(jsonString: string): SafeParseResult<AppEntitlementExpandMask, SDKValidationError>;
