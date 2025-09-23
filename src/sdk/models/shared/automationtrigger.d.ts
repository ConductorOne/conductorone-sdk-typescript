import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserCreatedTrigger, AppUserCreatedTrigger$Outbound } from "./appusercreatedtrigger.js";
import { AppUserUpdatedTrigger, AppUserUpdatedTrigger$Outbound } from "./appuserupdatedtrigger.js";
import { FormTrigger, FormTrigger$Outbound } from "./formtrigger.js";
import { GrantDeletedTrigger, GrantDeletedTrigger$Outbound } from "./grantdeletedtrigger.js";
import { GrantFoundTrigger, GrantFoundTrigger$Outbound } from "./grantfoundtrigger.js";
import { ManualAutomationTrigger, ManualAutomationTrigger$Outbound } from "./manualautomationtrigger.js";
import { ScheduleTrigger, ScheduleTrigger$Outbound } from "./scheduletrigger.js";
import { UsageBasedRevocationTrigger, UsageBasedRevocationTrigger$Outbound } from "./usagebasedrevocationtrigger.js";
import { UserCreatedTrigger, UserCreatedTrigger$Outbound } from "./usercreatedtrigger.js";
import { UserProfileChangeTrigger, UserProfileChangeTrigger$Outbound } from "./userprofilechangetrigger.js";
import { WebhookAutomationTrigger, WebhookAutomationTrigger$Outbound } from "./webhookautomationtrigger.js";
/**
 * Automation Triggers
 *
 * @remarks
 *
 * This message contains a oneof named kind. Only a single field of the following list may be set at a time:
 *   - manual
 *   - userProfileChange
 *   - appUserCreated
 *   - appUserUpdated
 *   - usageBasedRevocation
 *   - userCreated
 *   - grantFound
 *   - grantDeleted
 *   - webhook
 *   - schedule
 *   - form
 */
export type AutomationTrigger = {
    appUserCreated?: AppUserCreatedTrigger | null | undefined;
    appUserUpdated?: AppUserUpdatedTrigger | null | undefined;
    form?: FormTrigger | null | undefined;
    grantDeleted?: GrantDeletedTrigger | null | undefined;
    grantFound?: GrantFoundTrigger | null | undefined;
    manual?: ManualAutomationTrigger | null | undefined;
    schedule?: ScheduleTrigger | null | undefined;
    usageBasedRevocation?: UsageBasedRevocationTrigger | null | undefined;
    userCreated?: UserCreatedTrigger | null | undefined;
    userProfileChange?: UserProfileChangeTrigger | null | undefined;
    webhook?: WebhookAutomationTrigger | null | undefined;
};
/** @internal */
export declare const AutomationTrigger$inboundSchema: z.ZodType<AutomationTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type AutomationTrigger$Outbound = {
    appUserCreated?: AppUserCreatedTrigger$Outbound | null | undefined;
    appUserUpdated?: AppUserUpdatedTrigger$Outbound | null | undefined;
    form?: FormTrigger$Outbound | null | undefined;
    grantDeleted?: GrantDeletedTrigger$Outbound | null | undefined;
    grantFound?: GrantFoundTrigger$Outbound | null | undefined;
    manual?: ManualAutomationTrigger$Outbound | null | undefined;
    schedule?: ScheduleTrigger$Outbound | null | undefined;
    usageBasedRevocation?: UsageBasedRevocationTrigger$Outbound | null | undefined;
    userCreated?: UserCreatedTrigger$Outbound | null | undefined;
    userProfileChange?: UserProfileChangeTrigger$Outbound | null | undefined;
    webhook?: WebhookAutomationTrigger$Outbound | null | undefined;
};
/** @internal */
export declare const AutomationTrigger$outboundSchema: z.ZodType<AutomationTrigger$Outbound, z.ZodTypeDef, AutomationTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AutomationTrigger$ {
    /** @deprecated use `AutomationTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AutomationTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `AutomationTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AutomationTrigger$Outbound, z.ZodTypeDef, AutomationTrigger>;
    /** @deprecated use `AutomationTrigger$Outbound` instead. */
    type Outbound = AutomationTrigger$Outbound;
}
export declare function automationTriggerToJSON(automationTrigger: AutomationTrigger): string;
export declare function automationTriggerFromJSON(jsonString: string): SafeParseResult<AutomationTrigger, SDKValidationError>;
