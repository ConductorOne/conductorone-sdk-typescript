import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementInput, AppEntitlementInput$Outbound } from "./appentitlement.js";
import { AppEntitlementExpandMask, AppEntitlementExpandMask$Outbound } from "./appentitlementexpandmask.js";
/**
 * The UpdateAppEntitlementRequest message contains the app entitlement and the fields to be updated.
 */
export type UpdateAppEntitlementRequest = {
    entitlement?: AppEntitlementInput | null | undefined;
    expandMask?: AppEntitlementExpandMask | null | undefined;
    /**
     * Flag to indicate that access request defaults, if any are applied to these entitlements, should be overridden.
     */
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppEntitlementRequest$inboundSchema: z.ZodType<UpdateAppEntitlementRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateAppEntitlementRequest$Outbound = {
    entitlement?: AppEntitlementInput$Outbound | null | undefined;
    expandMask?: AppEntitlementExpandMask$Outbound | null | undefined;
    overrideAccessRequestsDefaults?: boolean | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateAppEntitlementRequest$outboundSchema: z.ZodType<UpdateAppEntitlementRequest$Outbound, z.ZodTypeDef, UpdateAppEntitlementRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateAppEntitlementRequest$ {
    /** @deprecated use `UpdateAppEntitlementRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateAppEntitlementRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateAppEntitlementRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateAppEntitlementRequest$Outbound, z.ZodTypeDef, UpdateAppEntitlementRequest>;
    /** @deprecated use `UpdateAppEntitlementRequest$Outbound` instead. */
    type Outbound = UpdateAppEntitlementRequest$Outbound;
}
export declare function updateAppEntitlementRequestToJSON(updateAppEntitlementRequest: UpdateAppEntitlementRequest): string;
export declare function updateAppEntitlementRequestFromJSON(jsonString: string): SafeParseResult<UpdateAppEntitlementRequest, SDKValidationError>;
