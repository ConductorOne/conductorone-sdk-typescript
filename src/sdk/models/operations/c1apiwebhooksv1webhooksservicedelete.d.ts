import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceDeleteRequest = {
    id: string | null;
    webhooksServiceDeleteRequest?: shared.WebhooksServiceDeleteRequest | undefined;
};
export type C1ApiWebhooksV1WebhooksServiceDeleteResponse = {
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
     * Empty response body. Status code indicates success.
     */
    webhooksServiceDeleteResponse?: shared.WebhooksServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceDeleteRequest$Outbound = {
    id: string | null;
    WebhooksServiceDeleteRequest?: shared.WebhooksServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceDeleteRequest$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceDeleteRequest>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceDeleteRequest$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceDeleteRequestToJSON(c1ApiWebhooksV1WebhooksServiceDeleteRequest: C1ApiWebhooksV1WebhooksServiceDeleteRequest): string;
export declare function c1ApiWebhooksV1WebhooksServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceDeleteResponse?: shared.WebhooksServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceDeleteResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceDeleteResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceDeleteResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceDeleteResponseToJSON(c1ApiWebhooksV1WebhooksServiceDeleteResponse: C1ApiWebhooksV1WebhooksServiceDeleteResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceDeleteResponse, SDKValidationError>;
