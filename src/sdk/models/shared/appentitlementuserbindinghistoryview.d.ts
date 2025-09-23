import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBindingHistory, AppEntitlementUserBindingHistory$Outbound } from "./appentitlementuserbindinghistory.js";
/**
 * The AppEntitlementUserBindingHistoryView message.
 */
export type AppEntitlementUserBindingHistoryView = {
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
    history?: AppEntitlementUserBindingHistory | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingHistoryView$inboundSchema: z.ZodType<AppEntitlementUserBindingHistoryView, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBindingHistoryView$Outbound = {
    appPath?: string | null | undefined;
    appUserPath?: string | null | undefined;
    entitlementPath?: string | null | undefined;
    history?: AppEntitlementUserBindingHistory$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingHistoryView$outboundSchema: z.ZodType<AppEntitlementUserBindingHistoryView$Outbound, z.ZodTypeDef, AppEntitlementUserBindingHistoryView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBindingHistoryView$ {
    /** @deprecated use `AppEntitlementUserBindingHistoryView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBindingHistoryView, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBindingHistoryView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBindingHistoryView$Outbound, z.ZodTypeDef, AppEntitlementUserBindingHistoryView>;
    /** @deprecated use `AppEntitlementUserBindingHistoryView$Outbound` instead. */
    type Outbound = AppEntitlementUserBindingHistoryView$Outbound;
}
export declare function appEntitlementUserBindingHistoryViewToJSON(appEntitlementUserBindingHistoryView: AppEntitlementUserBindingHistoryView): string;
export declare function appEntitlementUserBindingHistoryViewFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBindingHistoryView, SDKValidationError>;
