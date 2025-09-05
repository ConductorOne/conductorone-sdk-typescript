import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The empty response message for adding an app entitlement owner.
 */
export type AddAppEntitlementOwnerResponse = {};
/** @internal */
export declare const AddAppEntitlementOwnerResponse$inboundSchema: z.ZodType<AddAppEntitlementOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppEntitlementOwnerResponse$Outbound = {};
/** @internal */
export declare const AddAppEntitlementOwnerResponse$outboundSchema: z.ZodType<AddAppEntitlementOwnerResponse$Outbound, z.ZodTypeDef, AddAppEntitlementOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppEntitlementOwnerResponse$ {
    /** @deprecated use `AddAppEntitlementOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppEntitlementOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppEntitlementOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppEntitlementOwnerResponse$Outbound, z.ZodTypeDef, AddAppEntitlementOwnerResponse>;
    /** @deprecated use `AddAppEntitlementOwnerResponse$Outbound` instead. */
    type Outbound = AddAppEntitlementOwnerResponse$Outbound;
}
export declare function addAppEntitlementOwnerResponseToJSON(addAppEntitlementOwnerResponse: AddAppEntitlementOwnerResponse): string;
export declare function addAppEntitlementOwnerResponseFromJSON(jsonString: string): SafeParseResult<AddAppEntitlementOwnerResponse, SDKValidationError>;
