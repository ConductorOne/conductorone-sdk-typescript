import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request message for adding an app entitlement owner.
 */
export type AddAppEntitlementOwnerRequest = {
    /**
     * The user_id field for the user to add as an owner of the app entitlement.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const AddAppEntitlementOwnerRequest$inboundSchema: z.ZodType<AddAppEntitlementOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppEntitlementOwnerRequest$Outbound = {
    userId?: string | null | undefined;
};
/** @internal */
export declare const AddAppEntitlementOwnerRequest$outboundSchema: z.ZodType<AddAppEntitlementOwnerRequest$Outbound, z.ZodTypeDef, AddAppEntitlementOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppEntitlementOwnerRequest$ {
    /** @deprecated use `AddAppEntitlementOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppEntitlementOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppEntitlementOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppEntitlementOwnerRequest$Outbound, z.ZodTypeDef, AddAppEntitlementOwnerRequest>;
    /** @deprecated use `AddAppEntitlementOwnerRequest$Outbound` instead. */
    type Outbound = AddAppEntitlementOwnerRequest$Outbound;
}
export declare function addAppEntitlementOwnerRequestToJSON(addAppEntitlementOwnerRequest: AddAppEntitlementOwnerRequest): string;
export declare function addAppEntitlementOwnerRequestFromJSON(jsonString: string): SafeParseResult<AddAppEntitlementOwnerRequest, SDKValidationError>;
