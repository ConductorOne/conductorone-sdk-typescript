import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiWebhooksV1WebhooksServiceListResponse = {
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
    webhooksServiceListResponse?: shared.WebhooksServiceListResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceListRequest$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceListRequest$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceListRequest$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceListRequest>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceListRequest$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceListRequestToJSON(c1ApiWebhooksV1WebhooksServiceListRequest: C1ApiWebhooksV1WebhooksServiceListRequest): string;
export declare function c1ApiWebhooksV1WebhooksServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceListResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceListResponse?: shared.WebhooksServiceListResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceListResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceListResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceListResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceListResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceListResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceListResponseToJSON(c1ApiWebhooksV1WebhooksServiceListResponse: C1ApiWebhooksV1WebhooksServiceListResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceListResponse, SDKValidationError>;
