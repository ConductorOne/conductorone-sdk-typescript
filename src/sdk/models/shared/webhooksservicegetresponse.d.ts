import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksServiceGetResponse message.
 */
export type WebhooksServiceGetResponse = {
    webhook?: Webhook1 | null | undefined;
};
/** @internal */
export declare const WebhooksServiceGetResponse$inboundSchema: z.ZodType<WebhooksServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceGetResponse$Outbound = {
    webhook?: Webhook1$Outbound | null | undefined;
};
/** @internal */
export declare const WebhooksServiceGetResponse$outboundSchema: z.ZodType<WebhooksServiceGetResponse$Outbound, z.ZodTypeDef, WebhooksServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceGetResponse$ {
    /** @deprecated use `WebhooksServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceGetResponse$Outbound, z.ZodTypeDef, WebhooksServiceGetResponse>;
    /** @deprecated use `WebhooksServiceGetResponse$Outbound` instead. */
    type Outbound = WebhooksServiceGetResponse$Outbound;
}
export declare function webhooksServiceGetResponseToJSON(webhooksServiceGetResponse: WebhooksServiceGetResponse): string;
export declare function webhooksServiceGetResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceGetResponse, SDKValidationError>;
