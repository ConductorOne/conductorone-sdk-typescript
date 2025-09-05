import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entitlementGroup field.
 */
export declare const EntitlementGroup: {
    readonly EntitlementGroupUnspecified: "ENTITLEMENT_GROUP_UNSPECIFIED";
    readonly EntitlementGroupA: "ENTITLEMENT_GROUP_A";
    readonly EntitlementGroupB: "ENTITLEMENT_GROUP_B";
};
/**
 * The entitlementGroup field.
 */
export type EntitlementGroup = OpenEnum<typeof EntitlementGroup>;
/**
 * The DeleteAppEntitlementMonitorBindingRequest message.
 */
export type DeleteAppEntitlementMonitorBindingRequest = {
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
    entitlementGroup?: EntitlementGroup | null | undefined;
    /**
     * The monitorId field.
     */
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const EntitlementGroup$inboundSchema: z.ZodType<EntitlementGroup, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EntitlementGroup$outboundSchema: z.ZodType<EntitlementGroup, z.ZodTypeDef, EntitlementGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntitlementGroup$ {
    /** @deprecated use `EntitlementGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntitlementGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntitlementGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntitlementGroup, z.ZodTypeDef, EntitlementGroup>;
}
/** @internal */
export declare const DeleteAppEntitlementMonitorBindingRequest$inboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementMonitorBindingRequest$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    entitlementGroup?: string | null | undefined;
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const DeleteAppEntitlementMonitorBindingRequest$outboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementMonitorBindingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementMonitorBindingRequest$ {
    /** @deprecated use `DeleteAppEntitlementMonitorBindingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementMonitorBindingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementMonitorBindingRequest>;
    /** @deprecated use `DeleteAppEntitlementMonitorBindingRequest$Outbound` instead. */
    type Outbound = DeleteAppEntitlementMonitorBindingRequest$Outbound;
}
export declare function deleteAppEntitlementMonitorBindingRequestToJSON(deleteAppEntitlementMonitorBindingRequest: DeleteAppEntitlementMonitorBindingRequest): string;
export declare function deleteAppEntitlementMonitorBindingRequestFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementMonitorBindingRequest, SDKValidationError>;
