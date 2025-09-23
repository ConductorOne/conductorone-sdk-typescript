import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksServiceUpdateRequest message contains the webhook object to update and a field mask to indicate which fields to update. It uses URL value for input.
 */
export type WebhooksServiceUpdateRequest = {
    updateMask?: string | null | undefined;
    webhook?: Webhook1 | null | undefined;
};
/** @internal */
export declare const WebhooksServiceUpdateRequest$inboundSchema: z.ZodType<WebhooksServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceUpdateRequest$Outbound = {
    updateMask?: string | null | undefined;
    webhook?: Webhook1$Outbound | null | undefined;
};
/** @internal */
export declare const WebhooksServiceUpdateRequest$outboundSchema: z.ZodType<WebhooksServiceUpdateRequest$Outbound, z.ZodTypeDef, WebhooksServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceUpdateRequest$ {
    /** @deprecated use `WebhooksServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceUpdateRequest$Outbound, z.ZodTypeDef, WebhooksServiceUpdateRequest>;
    /** @deprecated use `WebhooksServiceUpdateRequest$Outbound` instead. */
    type Outbound = WebhooksServiceUpdateRequest$Outbound;
}
export declare function webhooksServiceUpdateRequestToJSON(webhooksServiceUpdateRequest: WebhooksServiceUpdateRequest): string;
export declare function webhooksServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<WebhooksServiceUpdateRequest, SDKValidationError>;
