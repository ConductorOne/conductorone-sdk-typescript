import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The request message for setting the app entitlement owners.
 */
export type SetAppEntitlementOwnersRequest = {
    /**
     * The user_ids field for the users to set as an owner of the app entitlement.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SetAppEntitlementOwnersRequest$inboundSchema: z.ZodType<SetAppEntitlementOwnersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SetAppEntitlementOwnersRequest$Outbound = {
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SetAppEntitlementOwnersRequest$outboundSchema: z.ZodType<SetAppEntitlementOwnersRequest$Outbound, z.ZodTypeDef, SetAppEntitlementOwnersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetAppEntitlementOwnersRequest$ {
    /** @deprecated use `SetAppEntitlementOwnersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetAppEntitlementOwnersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetAppEntitlementOwnersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetAppEntitlementOwnersRequest$Outbound, z.ZodTypeDef, SetAppEntitlementOwnersRequest>;
    /** @deprecated use `SetAppEntitlementOwnersRequest$Outbound` instead. */
    type Outbound = SetAppEntitlementOwnersRequest$Outbound;
}
export declare function setAppEntitlementOwnersRequestToJSON(setAppEntitlementOwnersRequest: SetAppEntitlementOwnersRequest): string;
export declare function setAppEntitlementOwnersRequestFromJSON(jsonString: string): SafeParseResult<SetAppEntitlementOwnersRequest, SDKValidationError>;
