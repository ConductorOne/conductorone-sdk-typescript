import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksSearchSearchResponse = {
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
    webhooksSearchResponse?: shared.WebhooksSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksSearchSearchResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksSearchSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksSearchSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksSearchResponse?: shared.WebhooksSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksSearchSearchResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksSearchSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksSearchSearchResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksSearchSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksSearchSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksSearchSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksSearchSearchResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksSearchSearchResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksSearchSearchResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksSearchSearchResponseToJSON(c1ApiWebhooksV1WebhooksSearchSearchResponse: C1ApiWebhooksV1WebhooksSearchSearchResponse): string;
export declare function c1ApiWebhooksV1WebhooksSearchSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksSearchSearchResponse, SDKValidationError>;
