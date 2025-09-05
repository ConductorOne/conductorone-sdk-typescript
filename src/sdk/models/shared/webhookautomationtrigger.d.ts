import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WebhookListenerAuthHMAC, WebhookListenerAuthHMAC$Outbound } from "./webhooklistenerauthhmac.js";
import { WebhookListenerAuthJWT, WebhookListenerAuthJWT$Outbound } from "./webhooklistenerauthjwt.js";
/**
 * The WebhookAutomationTrigger message.
 *
 * @remarks
 *
 * This message contains a oneof named auth_config. Only a single field of the following list may be set at a time:
 *   - jwt
 *   - hmac
 */
export type WebhookAutomationTrigger = {
    hmac?: WebhookListenerAuthHMAC | null | undefined;
    jwt?: WebhookListenerAuthJWT | null | undefined;
    /**
     * Optional existing listener ID (hidden field from frontend)
     */
    listenerId?: string | null | undefined;
};
/** @internal */
export declare const WebhookAutomationTrigger$inboundSchema: z.ZodType<WebhookAutomationTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookAutomationTrigger$Outbound = {
    hmac?: WebhookListenerAuthHMAC$Outbound | null | undefined;
    jwt?: WebhookListenerAuthJWT$Outbound | null | undefined;
    listenerId?: string | null | undefined;
};
/** @internal */
export declare const WebhookAutomationTrigger$outboundSchema: z.ZodType<WebhookAutomationTrigger$Outbound, z.ZodTypeDef, WebhookAutomationTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookAutomationTrigger$ {
    /** @deprecated use `WebhookAutomationTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookAutomationTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookAutomationTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookAutomationTrigger$Outbound, z.ZodTypeDef, WebhookAutomationTrigger>;
    /** @deprecated use `WebhookAutomationTrigger$Outbound` instead. */
    type Outbound = WebhookAutomationTrigger$Outbound;
}
export declare function webhookAutomationTriggerToJSON(webhookAutomationTrigger: WebhookAutomationTrigger): string;
export declare function webhookAutomationTriggerFromJSON(jsonString: string): SafeParseResult<WebhookAutomationTrigger, SDKValidationError>;
