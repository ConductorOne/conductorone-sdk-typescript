import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksServiceCreateResponse message.
 */
export type WebhooksServiceCreateResponse = {
    webhook?: Webhook1 | null | undefined;
};
/** @internal */
export declare const WebhooksServiceCreateResponse$inboundSchema: z.ZodType<WebhooksServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceCreateResponse$Outbound = {
    webhook?: Webhook1$Outbound | null | undefined;
};
/** @internal */
export declare const WebhooksServiceCreateResponse$outboundSchema: z.ZodType<WebhooksServiceCreateResponse$Outbound, z.ZodTypeDef, WebhooksServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceCreateResponse$ {
    /** @deprecated use `WebhooksServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceCreateResponse$Outbound, z.ZodTypeDef, WebhooksServiceCreateResponse>;
    /** @deprecated use `WebhooksServiceCreateResponse$Outbound` instead. */
    type Outbound = WebhooksServiceCreateResponse$Outbound;
}
export declare function webhooksServiceCreateResponseToJSON(webhooksServiceCreateResponse: WebhooksServiceCreateResponse): string;
export declare function webhooksServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceCreateResponse, SDKValidationError>;
