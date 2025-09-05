import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SlackNotifications message.
 */
export type SlackNotifications = {
    /**
     * The channelId field.
     */
    channelId?: string | null | undefined;
    /**
     * The channelName field.
     */
    channelName?: string | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
};
/** @internal */
export declare const SlackNotifications$inboundSchema: z.ZodType<SlackNotifications, z.ZodTypeDef, unknown>;
/** @internal */
export type SlackNotifications$Outbound = {
    channelId?: string | null | undefined;
    channelName?: string | null | undefined;
    enabled?: boolean | null | undefined;
};
/** @internal */
export declare const SlackNotifications$outboundSchema: z.ZodType<SlackNotifications$Outbound, z.ZodTypeDef, SlackNotifications>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SlackNotifications$ {
    /** @deprecated use `SlackNotifications$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SlackNotifications, z.ZodTypeDef, unknown>;
    /** @deprecated use `SlackNotifications$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SlackNotifications$Outbound, z.ZodTypeDef, SlackNotifications>;
    /** @deprecated use `SlackNotifications$Outbound` instead. */
    type Outbound = SlackNotifications$Outbound;
}
export declare function slackNotificationsToJSON(slackNotifications: SlackNotifications): string;
export declare function slackNotificationsFromJSON(jsonString: string): SafeParseResult<SlackNotifications, SDKValidationError>;
