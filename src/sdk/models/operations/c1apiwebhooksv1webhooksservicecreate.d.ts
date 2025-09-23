import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceCreateResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    webhooksServiceCreateResponse?: shared.WebhooksServiceCreateResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceCreateResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceCreateResponse?: shared.WebhooksServiceCreateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceCreateResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceCreateResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceCreateResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceCreateResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceCreateResponseToJSON(c1ApiWebhooksV1WebhooksServiceCreateResponse: C1ApiWebhooksV1WebhooksServiceCreateResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceCreateResponse, SDKValidationError>;
