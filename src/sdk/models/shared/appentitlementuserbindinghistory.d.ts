import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementUserBindingHistory message.
 */
export type AppEntitlementUserBindingHistory = {
    /**
     * The ID of the app entitlement that the app user has access to
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app associated with the app entitlement
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user that has access to the app entitlement
     */
    appUserId?: string | null | undefined;
    grantedAt?: Date | null | undefined;
    revokedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingHistory$inboundSchema: z.ZodType<AppEntitlementUserBindingHistory, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBindingHistory$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    grantedAt?: string | null | undefined;
    revokedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBindingHistory$outboundSchema: z.ZodType<AppEntitlementUserBindingHistory$Outbound, z.ZodTypeDef, AppEntitlementUserBindingHistory>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBindingHistory$ {
    /** @deprecated use `AppEntitlementUserBindingHistory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBindingHistory, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBindingHistory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBindingHistory$Outbound, z.ZodTypeDef, AppEntitlementUserBindingHistory>;
    /** @deprecated use `AppEntitlementUserBindingHistory$Outbound` instead. */
    type Outbound = AppEntitlementUserBindingHistory$Outbound;
}
export declare function appEntitlementUserBindingHistoryToJSON(appEntitlementUserBindingHistory: AppEntitlementUserBindingHistory): string;
export declare function appEntitlementUserBindingHistoryFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBindingHistory, SDKValidationError>;
