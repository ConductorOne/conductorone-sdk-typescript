import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entitlementGroup field.
 */
export declare const GetAppEntitlementMonitorBindingRequestEntitlementGroup: {
    readonly EntitlementGroupUnspecified: "ENTITLEMENT_GROUP_UNSPECIFIED";
    readonly EntitlementGroupA: "ENTITLEMENT_GROUP_A";
    readonly EntitlementGroupB: "ENTITLEMENT_GROUP_B";
};
/**
 * The entitlementGroup field.
 */
export type GetAppEntitlementMonitorBindingRequestEntitlementGroup = OpenEnum<typeof GetAppEntitlementMonitorBindingRequestEntitlementGroup>;
/**
 * The GetAppEntitlementMonitorBindingRequest message.
 */
export type GetAppEntitlementMonitorBindingRequest = {
    /**
     * The appEntitlementId field.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The entitlementGroup field.
     */
    entitlementGroup?: GetAppEntitlementMonitorBindingRequestEntitlementGroup | null | undefined;
    /**
     * The monitorId field.
     */
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementMonitorBindingRequestEntitlementGroup$inboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, unknown>;
/** @internal */
export declare const GetAppEntitlementMonitorBindingRequestEntitlementGroup$outboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, GetAppEntitlementMonitorBindingRequestEntitlementGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementMonitorBindingRequestEntitlementGroup$ {
    /** @deprecated use `GetAppEntitlementMonitorBindingRequestEntitlementGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementMonitorBindingRequestEntitlementGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, GetAppEntitlementMonitorBindingRequestEntitlementGroup>;
}
/** @internal */
export declare const GetAppEntitlementMonitorBindingRequest$inboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAppEntitlementMonitorBindingRequest$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    entitlementGroup?: string | null | undefined;
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const GetAppEntitlementMonitorBindingRequest$outboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, GetAppEntitlementMonitorBindingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAppEntitlementMonitorBindingRequest$ {
    /** @deprecated use `GetAppEntitlementMonitorBindingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAppEntitlementMonitorBindingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, GetAppEntitlementMonitorBindingRequest>;
    /** @deprecated use `GetAppEntitlementMonitorBindingRequest$Outbound` instead. */
    type Outbound = GetAppEntitlementMonitorBindingRequest$Outbound;
}
export declare function getAppEntitlementMonitorBindingRequestToJSON(getAppEntitlementMonitorBindingRequest: GetAppEntitlementMonitorBindingRequest): string;
export declare function getAppEntitlementMonitorBindingRequestFromJSON(jsonString: string): SafeParseResult<GetAppEntitlementMonitorBindingRequest, SDKValidationError>;
