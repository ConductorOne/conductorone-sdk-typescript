import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBinding, AppEntitlementUserBinding$Outbound } from "./appentitlementuserbinding.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * The AppEntitlementWithUserBindings message represents an app entitlement and its associated user bindings.
 */
export type AppEntitlementWithUserBindings = {
    /**
     * An array of AppEntitlementUserBinding objects which represent the relationships that give app users access to the specific app entitlement.
     */
    appEntitlementUserBindings?: Array<AppEntitlementUserBinding> | null | undefined;
    entitlement?: AppEntitlementView | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithUserBindings$inboundSchema: z.ZodType<AppEntitlementWithUserBindings, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementWithUserBindings$Outbound = {
    appEntitlementUserBindings?: Array<AppEntitlementUserBinding$Outbound> | null | undefined;
    entitlement?: AppEntitlementView$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementWithUserBindings$outboundSchema: z.ZodType<AppEntitlementWithUserBindings$Outbound, z.ZodTypeDef, AppEntitlementWithUserBindings>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementWithUserBindings$ {
    /** @deprecated use `AppEntitlementWithUserBindings$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementWithUserBindings, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementWithUserBindings$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementWithUserBindings$Outbound, z.ZodTypeDef, AppEntitlementWithUserBindings>;
    /** @deprecated use `AppEntitlementWithUserBindings$Outbound` instead. */
    type Outbound = AppEntitlementWithUserBindings$Outbound;
}
export declare function appEntitlementWithUserBindingsToJSON(appEntitlementWithUserBindings: AppEntitlementWithUserBindings): string;
export declare function appEntitlementWithUserBindingsFromJSON(jsonString: string): SafeParseResult<AppEntitlementWithUserBindings, SDKValidationError>;
