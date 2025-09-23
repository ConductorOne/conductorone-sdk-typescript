import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserView, AppEntitlementUserView$Outbound } from "./appentitlementuserview.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * The AppEntitlementWithUserBinding message.
 */
export type AppEntitlementWithUserBinding = {
    appEntitlementUserBinding?: AppEntitlementUserView | null | undefined;
    entitlement?: AppEntitlementView | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithUserBinding$inboundSchema: z.ZodType<AppEntitlementWithUserBinding, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementWithUserBinding$Outbound = {
    appEntitlementUserBinding?: AppEntitlementUserView$Outbound | null | undefined;
    entitlement?: AppEntitlementView$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithUserBinding$outboundSchema: z.ZodType<AppEntitlementWithUserBinding$Outbound, z.ZodTypeDef, AppEntitlementWithUserBinding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementWithUserBinding$ {
    /** @deprecated use `AppEntitlementWithUserBinding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementWithUserBinding, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementWithUserBinding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementWithUserBinding$Outbound, z.ZodTypeDef, AppEntitlementWithUserBinding>;
    /** @deprecated use `AppEntitlementWithUserBinding$Outbound` instead. */
    type Outbound = AppEntitlementWithUserBinding$Outbound;
}
export declare function appEntitlementWithUserBindingToJSON(appEntitlementWithUserBinding: AppEntitlementWithUserBinding): string;
export declare function appEntitlementWithUserBindingFromJSON(jsonString: string): SafeParseResult<AppEntitlementWithUserBinding, SDKValidationError>;
