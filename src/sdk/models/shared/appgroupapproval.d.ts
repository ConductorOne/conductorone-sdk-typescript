import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
 */
export type AppGroupApproval = {
    /**
     * Configuration to allow self approval if the target user is a member of the group during this step.
     */
    allowSelfApproval?: boolean | null | undefined;
    /**
     * The ID of the group specified for approval.
     */
    appGroupId?: string | null | undefined;
    /**
     * The ID of the app that contains the group specified for approval.
     */
    appId?: string | null | undefined;
    /**
     * Configuration to allow a fallback if the group is empty.
     */
    fallback?: boolean | null | undefined;
    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the group is empty.
     */
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppGroupApproval$inboundSchema: z.ZodType<AppGroupApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type AppGroupApproval$Outbound = {
    allowSelfApproval?: boolean | null | undefined;
    appGroupId?: string | null | undefined;
    appId?: string | null | undefined;
    fallback?: boolean | null | undefined;
    fallbackUserIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AppGroupApproval$outboundSchema: z.ZodType<AppGroupApproval$Outbound, z.ZodTypeDef, AppGroupApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppGroupApproval$ {
    /** @deprecated use `AppGroupApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppGroupApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppGroupApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppGroupApproval$Outbound, z.ZodTypeDef, AppGroupApproval>;
    /** @deprecated use `AppGroupApproval$Outbound` instead. */
    type Outbound = AppGroupApproval$Outbound;
}
export declare function appGroupApprovalToJSON(appGroupApproval: AppGroupApproval): string;
export declare function appGroupApprovalFromJSON(jsonString: string): SafeParseResult<AppGroupApproval, SDKValidationError>;
