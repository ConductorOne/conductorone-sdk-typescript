import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSpec message.
 */
export type WebhookSpec = {
    /**
     * The destination field.
     */
    destination?: string | null | undefined;
};
/** @internal */
export declare const WebhookSpec$inboundSchema: z.ZodType<WebhookSpec, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSpec$Outbound = {
    destination?: string | null | undefined;
};
/** @internal */
export declare const WebhookSpec$outboundSchema: z.ZodType<WebhookSpec$Outbound, z.ZodTypeDef, WebhookSpec>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSpec$ {
    /** @deprecated use `WebhookSpec$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSpec, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSpec$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSpec$Outbound, z.ZodTypeDef, WebhookSpec>;
    /** @deprecated use `WebhookSpec$Outbound` instead. */
    type Outbound = WebhookSpec$Outbound;
}
export declare function webhookSpecToJSON(webhookSpec: WebhookSpec): string;
export declare function webhookSpecFromJSON(jsonString: string): SafeParseResult<WebhookSpec, SDKValidationError>;
