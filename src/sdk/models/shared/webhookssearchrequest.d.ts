import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WebhookRef, WebhookRef$Outbound } from "./webhookref.js";
/**
 * The WebhooksSearchRequest message.
 */
export type WebhooksSearchRequest = {
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The query field.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<WebhookRef> | null | undefined;
};
/** @internal */
export declare const WebhooksSearchRequest$inboundSchema: z.ZodType<WebhooksSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksSearchRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    refs?: Array<WebhookRef$Outbound> | null | undefined;
};
/** @internal */
export declare const WebhooksSearchRequest$outboundSchema: z.ZodType<WebhooksSearchRequest$Outbound, z.ZodTypeDef, WebhooksSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksSearchRequest$ {
    /** @deprecated use `WebhooksSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksSearchRequest$Outbound, z.ZodTypeDef, WebhooksSearchRequest>;
    /** @deprecated use `WebhooksSearchRequest$Outbound` instead. */
    type Outbound = WebhooksSearchRequest$Outbound;
}
export declare function webhooksSearchRequestToJSON(webhooksSearchRequest: WebhooksSearchRequest): string;
export declare function webhooksSearchRequestFromJSON(jsonString: string): SafeParseResult<WebhooksSearchRequest, SDKValidationError>;
