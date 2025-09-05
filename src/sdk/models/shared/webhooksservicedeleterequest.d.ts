import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhooksServiceDeleteRequest message.
 */
export type WebhooksServiceDeleteRequest = {};
/** @internal */
export declare const WebhooksServiceDeleteRequest$inboundSchema: z.ZodType<WebhooksServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const WebhooksServiceDeleteRequest$outboundSchema: z.ZodType<WebhooksServiceDeleteRequest$Outbound, z.ZodTypeDef, WebhooksServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceDeleteRequest$ {
    /** @deprecated use `WebhooksServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceDeleteRequest$Outbound, z.ZodTypeDef, WebhooksServiceDeleteRequest>;
    /** @deprecated use `WebhooksServiceDeleteRequest$Outbound` instead. */
    type Outbound = WebhooksServiceDeleteRequest$Outbound;
}
export declare function webhooksServiceDeleteRequestToJSON(webhooksServiceDeleteRequest: WebhooksServiceDeleteRequest): string;
export declare function webhooksServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<WebhooksServiceDeleteRequest, SDKValidationError>;
