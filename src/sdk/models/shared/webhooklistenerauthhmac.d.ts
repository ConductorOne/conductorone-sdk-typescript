import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookListenerAuthHMAC message.
 */
export type WebhookListenerAuthHMAC = {};
/** @internal */
export declare const WebhookListenerAuthHMAC$inboundSchema: z.ZodType<WebhookListenerAuthHMAC, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookListenerAuthHMAC$Outbound = {};
/** @internal */
export declare const WebhookListenerAuthHMAC$outboundSchema: z.ZodType<WebhookListenerAuthHMAC$Outbound, z.ZodTypeDef, WebhookListenerAuthHMAC>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookListenerAuthHMAC$ {
    /** @deprecated use `WebhookListenerAuthHMAC$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookListenerAuthHMAC, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookListenerAuthHMAC$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookListenerAuthHMAC$Outbound, z.ZodTypeDef, WebhookListenerAuthHMAC>;
    /** @deprecated use `WebhookListenerAuthHMAC$Outbound` instead. */
    type Outbound = WebhookListenerAuthHMAC$Outbound;
}
export declare function webhookListenerAuthHMACToJSON(webhookListenerAuthHMAC: WebhookListenerAuthHMAC): string;
export declare function webhookListenerAuthHMACFromJSON(jsonString: string): SafeParseResult<WebhookListenerAuthHMAC, SDKValidationError>;
