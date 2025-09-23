import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entitlementGroup field.
 */
export declare const AppEntitlementMonitorBindingEntitlementGroup: {
    readonly EntitlementGroupUnspecified: "ENTITLEMENT_GROUP_UNSPECIFIED";
    readonly EntitlementGroupA: "ENTITLEMENT_GROUP_A";
    readonly EntitlementGroupB: "ENTITLEMENT_GROUP_B";
};
/**
 * The entitlementGroup field.
 */
export type AppEntitlementMonitorBindingEntitlementGroup = OpenEnum<typeof AppEntitlementMonitorBindingEntitlementGroup>;
/**
 * The AppEntitlementMonitorBinding message.
 */
export type AppEntitlementMonitorBinding = {
    /**
     * The appEntitlementId field.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The entitlementGroup field.
     */
    entitlementGroup?: AppEntitlementMonitorBindingEntitlementGroup | null | undefined;
    /**
     * The monitorId field.
     */
    monitorId?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementMonitorBindingEntitlementGroup$inboundSchema: z.ZodType<AppEntitlementMonitorBindingEntitlementGroup, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppEntitlementMonitorBindingEntitlementGroup$outboundSchema: z.ZodType<AppEntitlementMonitorBindingEntitlementGroup, z.ZodTypeDef, AppEntitlementMonitorBindingEntitlementGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementMonitorBindingEntitlementGroup$ {
    /** @deprecated use `AppEntitlementMonitorBindingEntitlementGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementMonitorBindingEntitlementGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementMonitorBindingEntitlementGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementMonitorBindingEntitlementGroup, z.ZodTypeDef, AppEntitlementMonitorBindingEntitlementGroup>;
}
/** @internal */
export declare const AppEntitlementMonitorBinding$inboundSchema: z.ZodType<AppEntitlementMonitorBinding, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementMonitorBinding$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    entitlementGroup?: string | null | undefined;
    monitorId?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementMonitorBinding$outboundSchema: z.ZodType<AppEntitlementMonitorBinding$Outbound, z.ZodTypeDef, AppEntitlementMonitorBinding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementMonitorBinding$ {
    /** @deprecated use `AppEntitlementMonitorBinding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementMonitorBinding, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementMonitorBinding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementMonitorBinding$Outbound, z.ZodTypeDef, AppEntitlementMonitorBinding>;
    /** @deprecated use `AppEntitlementMonitorBinding$Outbound` instead. */
    type Outbound = AppEntitlementMonitorBinding$Outbound;
}
export declare function appEntitlementMonitorBindingToJSON(appEntitlementMonitorBinding: AppEntitlementMonitorBinding): string;
export declare function appEntitlementMonitorBindingFromJSON(jsonString: string): SafeParseResult<AppEntitlementMonitorBinding, SDKValidationError>;
