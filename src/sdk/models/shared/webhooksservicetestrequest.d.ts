import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhooksServiceTestRequest message.
 */
export type WebhooksServiceTestRequest = {};
/** @internal */
export declare const WebhooksServiceTestRequest$inboundSchema: z.ZodType<WebhooksServiceTestRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceTestRequest$Outbound = {};
/** @internal */
export declare const WebhooksServiceTestRequest$outboundSchema: z.ZodType<WebhooksServiceTestRequest$Outbound, z.ZodTypeDef, WebhooksServiceTestRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceTestRequest$ {
    /** @deprecated use `WebhooksServiceTestRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceTestRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceTestRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceTestRequest$Outbound, z.ZodTypeDef, WebhooksServiceTestRequest>;
    /** @deprecated use `WebhooksServiceTestRequest$Outbound` instead. */
    type Outbound = WebhooksServiceTestRequest$Outbound;
}
export declare function webhooksServiceTestRequestToJSON(webhooksServiceTestRequest: WebhooksServiceTestRequest): string;
export declare function webhooksServiceTestRequestFromJSON(jsonString: string): SafeParseResult<WebhooksServiceTestRequest, SDKValidationError>;
