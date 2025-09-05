import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveEntitlementMembershipResponse message.
 */
export type RemoveEntitlementMembershipResponse = {
    /**
     * The ID of the revoke task created to remove the user from the entitlement, if the entitlement is an access profile (aka. catalog).
     *
     * @remarks
     *  It's aka. the JML task.
     */
    revokeTaskId?: string | null | undefined;
};
/** @internal */
export declare const RemoveEntitlementMembershipResponse$inboundSchema: z.ZodType<RemoveEntitlementMembershipResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveEntitlementMembershipResponse$Outbound = {
    revokeTaskId?: string | null | undefined;
};
/** @internal */
export declare const RemoveEntitlementMembershipResponse$outboundSchema: z.ZodType<RemoveEntitlementMembershipResponse$Outbound, z.ZodTypeDef, RemoveEntitlementMembershipResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveEntitlementMembershipResponse$ {
    /** @deprecated use `RemoveEntitlementMembershipResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveEntitlementMembershipResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveEntitlementMembershipResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveEntitlementMembershipResponse$Outbound, z.ZodTypeDef, RemoveEntitlementMembershipResponse>;
    /** @deprecated use `RemoveEntitlementMembershipResponse$Outbound` instead. */
    type Outbound = RemoveEntitlementMembershipResponse$Outbound;
}
export declare function removeEntitlementMembershipResponseToJSON(removeEntitlementMembershipResponse: RemoveEntitlementMembershipResponse): string;
export declare function removeEntitlementMembershipResponseFromJSON(jsonString: string): SafeParseResult<RemoveEntitlementMembershipResponse, SDKValidationError>;
