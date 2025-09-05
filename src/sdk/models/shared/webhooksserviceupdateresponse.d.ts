import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksServiceUpdateResponse message.
 */
export type WebhooksServiceUpdateResponse = {
    webhook?: Webhook1 | null | undefined;
};
/** @internal */
export declare const WebhooksServiceUpdateResponse$inboundSchema: z.ZodType<WebhooksServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceUpdateResponse$Outbound = {
    webhook?: Webhook1$Outbound | null | undefined;
};
/** @internal */
export declare const WebhooksServiceUpdateResponse$outboundSchema: z.ZodType<WebhooksServiceUpdateResponse$Outbound, z.ZodTypeDef, WebhooksServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceUpdateResponse$ {
    /** @deprecated use `WebhooksServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceUpdateResponse$Outbound, z.ZodTypeDef, WebhooksServiceUpdateResponse>;
    /** @deprecated use `WebhooksServiceUpdateResponse$Outbound` instead. */
    type Outbound = WebhooksServiceUpdateResponse$Outbound;
}
export declare function webhooksServiceUpdateResponseToJSON(webhooksServiceUpdateResponse: WebhooksServiceUpdateResponse): string;
export declare function webhooksServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceUpdateResponse, SDKValidationError>;
