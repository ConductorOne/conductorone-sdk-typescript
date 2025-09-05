import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiWebhooksV1WebhooksServiceUpdateRequest = {
    id: string | null;
    webhooksServiceUpdateRequest?: shared.WebhooksServiceUpdateRequest | undefined;
};
export type C1ApiWebhooksV1WebhooksServiceUpdateResponse = {
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
    webhooksServiceUpdateResponse?: shared.WebhooksServiceUpdateResponse | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceUpdateRequest$Outbound = {
    id: string | null;
    WebhooksServiceUpdateRequest?: shared.WebhooksServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceUpdateRequest$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceUpdateRequest>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceUpdateRequest$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceUpdateRequestToJSON(c1ApiWebhooksV1WebhooksServiceUpdateRequest: C1ApiWebhooksV1WebhooksServiceUpdateRequest): string;
export declare function c1ApiWebhooksV1WebhooksServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiWebhooksV1WebhooksServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    WebhooksServiceUpdateResponse?: shared.WebhooksServiceUpdateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiWebhooksV1WebhooksServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiWebhooksV1WebhooksServiceUpdateResponse$ {
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiWebhooksV1WebhooksServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiWebhooksV1WebhooksServiceUpdateResponse>;
    /** @deprecated use `C1ApiWebhooksV1WebhooksServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiWebhooksV1WebhooksServiceUpdateResponse$Outbound;
}
export declare function c1ApiWebhooksV1WebhooksServiceUpdateResponseToJSON(c1ApiWebhooksV1WebhooksServiceUpdateResponse: C1ApiWebhooksV1WebhooksServiceUpdateResponse): string;
export declare function c1ApiWebhooksV1WebhooksServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiWebhooksV1WebhooksServiceUpdateResponse, SDKValidationError>;
