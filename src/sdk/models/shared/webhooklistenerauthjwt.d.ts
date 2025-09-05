import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookListenerAuthJWT message.
 */
export type WebhookListenerAuthJWT = {
    /**
     * The jwksUrl field.
     */
    jwksUrl?: string | null | undefined;
};
/** @internal */
export declare const WebhookListenerAuthJWT$inboundSchema: z.ZodType<WebhookListenerAuthJWT, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookListenerAuthJWT$Outbound = {
    jwksUrl?: string | null | undefined;
};
/** @internal */
export declare const WebhookListenerAuthJWT$outboundSchema: z.ZodType<WebhookListenerAuthJWT$Outbound, z.ZodTypeDef, WebhookListenerAuthJWT>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookListenerAuthJWT$ {
    /** @deprecated use `WebhookListenerAuthJWT$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookListenerAuthJWT, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookListenerAuthJWT$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookListenerAuthJWT$Outbound, z.ZodTypeDef, WebhookListenerAuthJWT>;
    /** @deprecated use `WebhookListenerAuthJWT$Outbound` instead. */
    type Outbound = WebhookListenerAuthJWT$Outbound;
}
export declare function webhookListenerAuthJWTToJSON(webhookListenerAuthJWT: WebhookListenerAuthJWT): string;
export declare function webhookListenerAuthJWTFromJSON(jsonString: string): SafeParseResult<WebhookListenerAuthJWT, SDKValidationError>;
