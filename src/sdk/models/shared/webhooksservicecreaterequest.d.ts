import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhooksServiceCreateRequest message.
 */
export type WebhooksServiceCreateRequest = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    /**
     * The displayName field.
     */
    displayName: string;
    /**
     * The url field.
     */
    url: string;
};
/** @internal */
export declare const WebhooksServiceCreateRequest$inboundSchema: z.ZodType<WebhooksServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceCreateRequest$Outbound = {
    description?: string | null | undefined;
    displayName: string;
    url: string;
};
/** @internal */
export declare const WebhooksServiceCreateRequest$outboundSchema: z.ZodType<WebhooksServiceCreateRequest$Outbound, z.ZodTypeDef, WebhooksServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceCreateRequest$ {
    /** @deprecated use `WebhooksServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceCreateRequest$Outbound, z.ZodTypeDef, WebhooksServiceCreateRequest>;
    /** @deprecated use `WebhooksServiceCreateRequest$Outbound` instead. */
    type Outbound = WebhooksServiceCreateRequest$Outbound;
}
export declare function webhooksServiceCreateRequestToJSON(webhooksServiceCreateRequest: WebhooksServiceCreateRequest): string;
export declare function webhooksServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<WebhooksServiceCreateRequest, SDKValidationError>;
