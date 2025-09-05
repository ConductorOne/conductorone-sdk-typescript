import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response body. Status code indicates success.
 */
export type WebhooksServiceDeleteResponse = {};
/** @internal */
export declare const WebhooksServiceDeleteResponse$inboundSchema: z.ZodType<WebhooksServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhooksServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const WebhooksServiceDeleteResponse$outboundSchema: z.ZodType<WebhooksServiceDeleteResponse$Outbound, z.ZodTypeDef, WebhooksServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhooksServiceDeleteResponse$ {
    /** @deprecated use `WebhooksServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhooksServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhooksServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhooksServiceDeleteResponse$Outbound, z.ZodTypeDef, WebhooksServiceDeleteResponse>;
    /** @deprecated use `WebhooksServiceDeleteResponse$Outbound` instead. */
    type Outbound = WebhooksServiceDeleteResponse$Outbound;
}
export declare function webhooksServiceDeleteResponseToJSON(webhooksServiceDeleteResponse: WebhooksServiceDeleteResponse): string;
export declare function webhooksServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<WebhooksServiceDeleteResponse, SDKValidationError>;
