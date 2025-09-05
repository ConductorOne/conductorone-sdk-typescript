import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The AppEntitlementUserBinding represents the relationship that gives an app user access to an app entitlement
 */
export type AppEntitlementUserBinding = {
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
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    deprovisionAt?: Date | null | undefined;
    /**
     * The grantSources field.
     */
    grantSources?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBinding$inboundSchema: z.ZodType<AppEntitlementUserBinding, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementUserBinding$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    deprovisionAt?: string | null | undefined;
    grantSources?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const AppEntitlementUserBinding$outboundSchema: z.ZodType<AppEntitlementUserBinding$Outbound, z.ZodTypeDef, AppEntitlementUserBinding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementUserBinding$ {
    /** @deprecated use `AppEntitlementUserBinding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementUserBinding, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementUserBinding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementUserBinding$Outbound, z.ZodTypeDef, AppEntitlementUserBinding>;
    /** @deprecated use `AppEntitlementUserBinding$Outbound` instead. */
    type Outbound = AppEntitlementUserBinding$Outbound;
}
export declare function appEntitlementUserBindingToJSON(appEntitlementUserBinding: AppEntitlementUserBinding): string;
export declare function appEntitlementUserBindingFromJSON(jsonString: string): SafeParseResult<AppEntitlementUserBinding, SDKValidationError>;
