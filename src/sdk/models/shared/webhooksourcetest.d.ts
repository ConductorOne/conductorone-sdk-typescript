import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSourceTest message.
 */
export type WebhookSourceTest = {};
/** @internal */
export declare const WebhookSourceTest$inboundSchema: z.ZodType<WebhookSourceTest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSourceTest$Outbound = {};
/** @internal */
export declare const WebhookSourceTest$outboundSchema: z.ZodType<WebhookSourceTest$Outbound, z.ZodTypeDef, WebhookSourceTest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSourceTest$ {
    /** @deprecated use `WebhookSourceTest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSourceTest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSourceTest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSourceTest$Outbound, z.ZodTypeDef, WebhookSourceTest>;
    /** @deprecated use `WebhookSourceTest$Outbound` instead. */
    type Outbound = WebhookSourceTest$Outbound;
}
export declare function webhookSourceTestToJSON(webhookSourceTest: WebhookSourceTest): string;
export declare function webhookSourceTestFromJSON(jsonString: string): SafeParseResult<WebhookSourceTest, SDKValidationError>;
