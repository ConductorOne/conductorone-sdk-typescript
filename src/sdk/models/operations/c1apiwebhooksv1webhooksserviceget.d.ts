import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceGetRequest = {
    id: string | null;
};
export type C1ApiWebhooksV1WebhooksServiceGetResponse = {
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
    webhooksServiceGetResponse?: shared.WebhooksServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceGetRequest$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceGetRequest$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceGetRequest$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceGetRequest>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceGetRequest$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceGetRequestToJSON(c1ApiWebhooksV1WebhooksServiceGetRequest: C1ApiWebhooksV1WebhooksServiceGetRequest): string;
export declare function c1ApiWebhooksV1WebhooksServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceGetResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceGetResponse?: shared.WebhooksServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceGetResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceGetResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceGetResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceGetResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceGetResponseToJSON(c1ApiWebhooksV1WebhooksServiceGetResponse: C1ApiWebhooksV1WebhooksServiceGetResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceGetResponse, SDKValidationError>;
