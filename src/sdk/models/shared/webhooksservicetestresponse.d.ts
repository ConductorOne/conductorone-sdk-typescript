import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WebhookInstance, WebhookInstance$Outbound } from "./webhookinstance.js";
/**
 * The WebhooksServiceTestResponse message.
 */
export type WebhooksServiceTestResponse = {
    webhook?: WebhookInstance | null | undefined;
};
/** @internal */
export declare const WebhooksServiceTestResponse$inboundSchema: z.ZodType<WebhooksServiceTestResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceTestResponse$Outbound = {
    webhook?: WebhookInstance$Outbound | null | undefined;
};
/** @internal */
export declare const WebhooksServiceTestResponse$outboundSchema: z.ZodType<WebhooksServiceTestResponse$Outbound, z.ZodTypeDef, WebhooksServiceTestResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceTestResponse$ {
    /** @deprecated use `WebhooksServiceTestResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceTestResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceTestResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceTestResponse$Outbound, z.ZodTypeDef, WebhooksServiceTestResponse>;
    /** @deprecated use `WebhooksServiceTestResponse$Outbound` instead. */
    type Outbound = WebhooksServiceTestResponse$Outbound;
}
export declare function webhooksServiceTestResponseToJSON(webhooksServiceTestResponse: WebhooksServiceTestResponse): string;
export declare function webhooksServiceTestResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceTestResponse, SDKValidationError>;
