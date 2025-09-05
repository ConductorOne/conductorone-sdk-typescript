import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The empty response message for removing an app entitlement owner.
 */
export type RemoveAppEntitlementOwnerResponse = {};
/** @internal */
export declare const RemoveAppEntitlementOwnerResponse$inboundSchema: z.ZodType<RemoveAppEntitlementOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppEntitlementOwnerResponse$Outbound = {};
/** @internal */
export declare const RemoveAppEntitlementOwnerResponse$outboundSchema: z.ZodType<RemoveAppEntitlementOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppEntitlementOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppEntitlementOwnerResponse$ {
    /** @deprecated use `RemoveAppEntitlementOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppEntitlementOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppEntitlementOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppEntitlementOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppEntitlementOwnerResponse>;
    /** @deprecated use `RemoveAppEntitlementOwnerResponse$Outbound` instead. */
    type Outbound = RemoveAppEntitlementOwnerResponse$Outbound;
}
export declare function removeAppEntitlementOwnerResponseToJSON(removeAppEntitlementOwnerResponse: RemoveAppEntitlementOwnerResponse): string;
export declare function removeAppEntitlementOwnerResponseFromJSON(jsonString: string): SafeParseResult<RemoveAppEntitlementOwnerResponse, SDKValidationError>;
