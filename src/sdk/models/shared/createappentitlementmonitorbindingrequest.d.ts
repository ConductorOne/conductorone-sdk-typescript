import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entitlementGroup field.
 */
export declare const CreateAppEntitlementMonitorBindingRequestEntitlementGroup: {
    readonly EntitlementGroupUnspecified: "ENTITLEMENT_GROUP_UNSPECIFIED";
    readonly EntitlementGroupA: "ENTITLEMENT_GROUP_A";
    readonly EntitlementGroupB: "ENTITLEMENT_GROUP_B";
};
/**
 * The entitlementGroup field.
 */
export type CreateAppEntitlementMonitorBindingRequestEntitlementGroup = OpenEnum<typeof CreateAppEntitlementMonitorBindingRequestEntitlementGroup>;
/**
 * The CreateAppEntitlementMonitorBindingRequest message.
 */
export type CreateAppEntitlementMonitorBindingRequest = {
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
    entitlementGroup?: CreateAppEntitlementMonitorBindingRequestEntitlementGroup | null | undefined;
    /**
     * The monitorId field.
     */
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementMonitorBindingRequestEntitlementGroup$inboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CreateAppEntitlementMonitorBindingRequestEntitlementGroup$outboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, CreateAppEntitlementMonitorBindingRequestEntitlementGroup>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementMonitorBindingRequestEntitlementGroup$ {
    /** @deprecated use `CreateAppEntitlementMonitorBindingRequestEntitlementGroup$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementMonitorBindingRequestEntitlementGroup$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequestEntitlementGroup, z.ZodTypeDef, CreateAppEntitlementMonitorBindingRequestEntitlementGroup>;
}
/** @internal */
export declare const CreateAppEntitlementMonitorBindingRequest$inboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateAppEntitlementMonitorBindingRequest$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    entitlementGroup?: string | null | undefined;
    monitorId?: string | null | undefined;
};
/** @internal */
export declare const CreateAppEntitlementMonitorBindingRequest$outboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementMonitorBindingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateAppEntitlementMonitorBindingRequest$ {
    /** @deprecated use `CreateAppEntitlementMonitorBindingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateAppEntitlementMonitorBindingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateAppEntitlementMonitorBindingRequest$Outbound, z.ZodTypeDef, CreateAppEntitlementMonitorBindingRequest>;
    /** @deprecated use `CreateAppEntitlementMonitorBindingRequest$Outbound` instead. */
    type Outbound = CreateAppEntitlementMonitorBindingRequest$Outbound;
}
export declare function createAppEntitlementMonitorBindingRequestToJSON(createAppEntitlementMonitorBindingRequest: CreateAppEntitlementMonitorBindingRequest): string;
export declare function createAppEntitlementMonitorBindingRequestFromJSON(jsonString: string): SafeParseResult<CreateAppEntitlementMonitorBindingRequest, SDKValidationError>;
