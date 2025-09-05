import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Webhook1, Webhook1$Outbound } from "./webhook1.js";
/**
 * The WebhooksSearchResponse message.
 */
export type WebhooksSearchResponse = {
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
export declare const WebhooksSearchResponse$inboundSchema: z.ZodType<WebhooksSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksSearchResponse$Outbound = {
    list?: Array<Webhook1$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const WebhooksSearchResponse$outboundSchema: z.ZodType<WebhooksSearchResponse$Outbound, z.ZodTypeDef, WebhooksSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksSearchResponse$ {
    /** @deprecated use `WebhooksSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksSearchResponse$Outbound, z.ZodTypeDef, WebhooksSearchResponse>;
    /** @deprecated use `WebhooksSearchResponse$Outbound` instead. */
    type Outbound = WebhooksSearchResponse$Outbound;
}
export declare function webhooksSearchResponseToJSON(webhooksSearchResponse: WebhooksSearchResponse): string;
export declare function webhooksSearchResponseFromJSON(jsonString: string): SafeParseResult<WebhooksSearchResponse, SDKValidationError>;
