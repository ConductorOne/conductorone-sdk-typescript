import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request message for removing an app entitlement owner.
 */
export type RemoveAppEntitlementOwnerRequest = {};
/** @internal */
export declare const RemoveAppEntitlementOwnerRequest$inboundSchema: z.ZodType<RemoveAppEntitlementOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppEntitlementOwnerRequest$Outbound = {};
/** @internal */
export declare const RemoveAppEntitlementOwnerRequest$outboundSchema: z.ZodType<RemoveAppEntitlementOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppEntitlementOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppEntitlementOwnerRequest$ {
    /** @deprecated use `RemoveAppEntitlementOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppEntitlementOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppEntitlementOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppEntitlementOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppEntitlementOwnerRequest>;
    /** @deprecated use `RemoveAppEntitlementOwnerRequest$Outbound` instead. */
    type Outbound = RemoveAppEntitlementOwnerRequest$Outbound;
}
export declare function removeAppEntitlementOwnerRequestToJSON(removeAppEntitlementOwnerRequest: RemoveAppEntitlementOwnerRequest): string;
export declare function removeAppEntitlementOwnerRequestFromJSON(jsonString: string): SafeParseResult<RemoveAppEntitlementOwnerRequest, SDKValidationError>;
