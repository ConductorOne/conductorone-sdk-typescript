import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The entitlement owner approval allows configuration of the approval step when the target approvers are the entitlement owners.
 */
export type EntitlementOwnerApproval = {
    /**
     * Configuration to allow self approval if the target user is an entitlement owner during this step.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * Configuration to allow a fallback if the entitlement owner cannot be identified.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the entitlement owner cannot be identified.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const EntitlementOwnerApproval$inboundSchema: z.ZodType<EntitlementOwnerApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type EntitlementOwnerApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const EntitlementOwnerApproval$outboundSchema: z.ZodType<EntitlementOwnerApproval$Outbound, z.ZodTypeDef, EntitlementOwnerApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EntitlementOwnerApproval$ {
    /** @deprecated use `EntitlementOwnerApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EntitlementOwnerApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `EntitlementOwnerApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EntitlementOwnerApproval$Outbound, z.ZodTypeDef, EntitlementOwnerApproval>;
    /** @deprecated use `EntitlementOwnerApproval$Outbound` instead. */
    type Outbound = EntitlementOwnerApproval$Outbound;
}
export declare function entitlementOwnerApprovalToJSON(entitlementOwnerApproval: EntitlementOwnerApproval): string;
export declare function entitlementOwnerApprovalFromJSON(jsonString: string): SafeParseResult<EntitlementOwnerApproval, SDKValidationError>;
