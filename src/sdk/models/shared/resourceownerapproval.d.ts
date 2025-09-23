import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The resource owner approval allows configuration of the approval step when the target approvers are the resource owners.
 */
export type ResourceOwnerApproval = {
    /**
     * Configuration to allow self approval if the target user is an resource owner during this step.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * Configuration to allow a fallback if the resource owner cannot be identified.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the resource owner cannot be identified.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ResourceOwnerApproval$inboundSchema: z.ZodType<ResourceOwnerApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type ResourceOwnerApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ResourceOwnerApproval$outboundSchema: z.ZodType<ResourceOwnerApproval$Outbound, z.ZodTypeDef, ResourceOwnerApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResourceOwnerApproval$ {
    /** @deprecated use `ResourceOwnerApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResourceOwnerApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResourceOwnerApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResourceOwnerApproval$Outbound, z.ZodTypeDef, ResourceOwnerApproval>;
    /** @deprecated use `ResourceOwnerApproval$Outbound` instead. */
    type Outbound = ResourceOwnerApproval$Outbound;
}
export declare function resourceOwnerApprovalToJSON(resourceOwnerApproval: ResourceOwnerApproval): string;
export declare function resourceOwnerApprovalFromJSON(jsonString: string): SafeParseResult<ResourceOwnerApproval, SDKValidationError>;
