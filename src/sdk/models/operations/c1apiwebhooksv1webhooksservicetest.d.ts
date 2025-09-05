import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceTestRequest = {
    id: string | null;
    webhooksServiceTestRequest?: shared.WebhooksServiceTestRequest | undefined;
};
export type C1ApiWebhooksV1WebhooksServiceTestResponse = {
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
    webhooksServiceTestResponse?: shared.WebhooksServiceTestResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceTestRequest$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceTestRequest$Outbound = {
    id: string | null;
    WebhooksServiceTestRequest?: shared.WebhooksServiceTestRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceTestRequest$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceTestRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceTestRequest$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceTestRequest>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestRequest$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceTestRequest$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceTestRequestToJSON(c1ApiWebhooksV1WebhooksServiceTestRequest: C1ApiWebhooksV1WebhooksServiceTestRequest): string;
export declare function c1ApiWebhooksV1WebhooksServiceTestRequestFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceTestRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceTestResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceTestResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceTestResponse?: shared.WebhooksServiceTestResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceTestResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceTestResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceTestResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceTestResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceTestResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceTestResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceTestResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceTestResponseToJSON(c1ApiWebhooksV1WebhooksServiceTestResponse: C1ApiWebhooksV1WebhooksServiceTestResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceTestResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceTestResponse, SDKValidationError>;
