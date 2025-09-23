import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { RunDelayed, RunDelayed$Outbound } from "./rundelayed.js";
import { RunImmediately, RunImmediately$Outbound } from "./runimmediately.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
export declare const TargetedAppUserTypes: {
    readonly AppUserTypeUnspecified: "APP_USER_TYPE_UNSPECIFIED";
    readonly AppUserTypeUser: "APP_USER_TYPE_USER";
    readonly AppUserTypeServiceAccount: "APP_USER_TYPE_SERVICE_ACCOUNT";
    readonly AppUserTypeSystemAccount: "APP_USER_TYPE_SYSTEM_ACCOUNT";
};
export type TargetedAppUserTypes = OpenEnum<typeof TargetedAppUserTypes>;
/**
 * The UsageBasedRevocationTrigger message.
 *
 * @remarks
 *
 * This message contains a oneof named cold_start_schedule. Only a single field of the following list may be set at a time:
 *   - runImmediately
 *   - runDelayed
 */
export type UsageBasedRevocationTrigger = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    enabledAt?: Date | null | undefined;
    /**
     * The excludedGroupRefs field.
     */
    excludedGroupRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The excludedUserRefs field.
     */
    excludedUserRefs?: Array<UserRef> | null | undefined;
    /**
     * The includeUsersWithNoActivity field.
     */
    includeUsersWithNoActivity?: boolean | null | undefined;
    runDelayed?: RunDelayed | null | undefined;
    runImmediately?: RunImmediately | null | undefined;
    /**
     * The targetedAppUserTypes field.
     */
    targetedAppUserTypes?: Array<TargetedAppUserTypes> | null | undefined;
    /**
     * The targetedEntitlementRefs field.
     */
    targetedEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The unusedForDays field.
     */
    unusedForDays?: number | null | undefined;
};
/** @internal */
export declare const TargetedAppUserTypes$inboundSchema: z.ZodType<TargetedAppUserTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TargetedAppUserTypes$outboundSchema: z.ZodType<TargetedAppUserTypes, z.ZodTypeDef, TargetedAppUserTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TargetedAppUserTypes$ {
    /** @deprecated use `TargetedAppUserTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TargetedAppUserTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `TargetedAppUserTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TargetedAppUserTypes, z.ZodTypeDef, TargetedAppUserTypes>;
}
/** @internal */
export declare const UsageBasedRevocationTrigger$inboundSchema: z.ZodType<UsageBasedRevocationTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type UsageBasedRevocationTrigger$Outbound = {
    appId?: string | null | undefined;
    enabledAt?: string | null | undefined;
    excludedGroupRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    excludedUserRefs?: Array<UserRef$Outbound> | null | undefined;
    includeUsersWithNoActivity?: boolean | null | undefined;
    runDelayed?: RunDelayed$Outbound | null | undefined;
    runImmediately?: RunImmediately$Outbound | null | undefined;
    targetedAppUserTypes?: Array<string> | null | undefined;
    targetedEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    unusedForDays?: number | null | undefined;
};
/** @internal */
export declare const UsageBasedRevocationTrigger$outboundSchema: z.ZodType<UsageBasedRevocationTrigger$Outbound, z.ZodTypeDef, UsageBasedRevocationTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UsageBasedRevocationTrigger$ {
    /** @deprecated use `UsageBasedRevocationTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UsageBasedRevocationTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `UsageBasedRevocationTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UsageBasedRevocationTrigger$Outbound, z.ZodTypeDef, UsageBasedRevocationTrigger>;
    /** @deprecated use `UsageBasedRevocationTrigger$Outbound` instead. */
    type Outbound = UsageBasedRevocationTrigger$Outbound;
}
export declare function usageBasedRevocationTriggerToJSON(usageBasedRevocationTrigger: UsageBasedRevocationTrigger): string;
export declare function usageBasedRevocationTriggerFromJSON(jsonString: string): SafeParseResult<UsageBasedRevocationTrigger, SDKValidationError>;
