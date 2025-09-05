import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EmailNotifications, EmailNotifications$Outbound } from "./emailnotifications.js";
import { SlackNotifications, SlackNotifications$Outbound } from "./slacknotifications.js";
/**
 * The NotificationConfig message.
 */
export type NotificationConfig = {
    emailNotifications?: EmailNotifications | null | undefined;
    slackNotifications?: SlackNotifications | null | undefined;
};
/** @internal */
export declare const NotificationConfig$inboundSchema: z.ZodType<NotificationConfig, z.ZodTypeDef, unknown>;
/** @internal */
export type NotificationConfig$Outbound = {
    emailNotifications?: EmailNotifications$Outbound | null | undefined;
    slackNotifications?: SlackNotifications$Outbound | null | undefined;
};
/** @internal */
export declare const NotificationConfig$outboundSchema: z.ZodType<NotificationConfig$Outbound, z.ZodTypeDef, NotificationConfig>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace NotificationConfig$ {
    /** @deprecated use `NotificationConfig$inboundSchema` instead. */
    const inboundSchema: z.ZodType<NotificationConfig, z.ZodTypeDef, unknown>;
    /** @deprecated use `NotificationConfig$outboundSchema` instead. */
    const outboundSchema: z.ZodType<NotificationConfig$Outbound, z.ZodTypeDef, NotificationConfig>;
    /** @deprecated use `NotificationConfig$Outbound` instead. */
    type Outbound = NotificationConfig$Outbound;
}
export declare function notificationConfigToJSON(notificationConfig: NotificationConfig): string;
export declare function notificationConfigFromJSON(jsonString: string): SafeParseResult<NotificationConfig, SDKValidationError>;
