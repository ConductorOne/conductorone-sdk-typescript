import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksServiceListResponse message.
 */
export type WebhooksServiceListResponse = {
    /**
     * The list field.
     */
    list?: Array<Webhook1> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const WebhooksServiceListResponse$inboundSchema: z.ZodType<WebhooksServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceListResponse$Outbound = {
    list?: Array<Webhook1$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const WebhooksServiceListResponse$outboundSchema: z.ZodType<WebhooksServiceListResponse$Outbound, z.ZodTypeDef, WebhooksServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceListResponse$ {
    /** @deprecated use `WebhooksServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceListResponse$Outbound, z.ZodTypeDef, WebhooksServiceListResponse>;
    /** @deprecated use `WebhooksServiceListResponse$Outbound` instead. */
    type Outbound = WebhooksServiceListResponse$Outbound;
}
export declare function webhooksServiceListResponseToJSON(webhooksServiceListResponse: WebhooksServiceListResponse): string;
export declare function webhooksServiceListResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceListResponse, SDKValidationError>;
