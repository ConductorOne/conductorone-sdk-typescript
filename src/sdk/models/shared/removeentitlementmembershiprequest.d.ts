import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveEntitlementMembershipRequest message.
 */
export type RemoveEntitlementMembershipRequest = {
    /**
     * The appUserId field.
     */
    appUserId?: string | null | undefined;
};
/** @internal */
export declare const RemoveEntitlementMembershipRequest$inboundSchema: z.ZodType<RemoveEntitlementMembershipRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveEntitlementMembershipRequest$Outbound = {
    appUserId?: string | null | undefined;
};
/** @internal */
export declare const RemoveEntitlementMembershipRequest$outboundSchema: z.ZodType<RemoveEntitlementMembershipRequest$Outbound, z.ZodTypeDef, RemoveEntitlementMembershipRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveEntitlementMembershipRequest$ {
    /** @deprecated use `RemoveEntitlementMembershipRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveEntitlementMembershipRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveEntitlementMembershipRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveEntitlementMembershipRequest$Outbound, z.ZodTypeDef, RemoveEntitlementMembershipRequest>;
    /** @deprecated use `RemoveEntitlementMembershipRequest$Outbound` instead. */
    type Outbound = RemoveEntitlementMembershipRequest$Outbound;
}
export declare function removeEntitlementMembershipRequestToJSON(removeEntitlementMembershipRequest: RemoveEntitlementMembershipRequest): string;
export declare function removeEntitlementMembershipRequestFromJSON(jsonString: string): SafeParseResult<RemoveEntitlementMembershipRequest, SDKValidationError>;
