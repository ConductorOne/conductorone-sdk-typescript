import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceListTagsRequest = {
    functionId: string | null;
};
export type C1ApiFunctionsV1FunctionsServiceListTagsResponse = {
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
    functionsServiceListTagsResponse?: shared.FunctionsServiceListTagsResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListTagsRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceListTagsRequest$Outbound = {
    function_id: string | null;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListTagsRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListTagsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceListTagsRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListTagsRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceListTagsRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceListTagsRequestToJSON(c1ApiFunctionsV1FunctionsServiceListTagsRequest: C1ApiFunctionsV1FunctionsServiceListTagsRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceListTagsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceListTagsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListTagsResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceListTagsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceListTagsResponse?: shared.FunctionsServiceListTagsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListTagsResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListTagsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceListTagsResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListTagsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListTagsResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListTagsResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceListTagsResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceListTagsResponseToJSON(c1ApiFunctionsV1FunctionsServiceListTagsResponse: C1ApiFunctionsV1FunctionsServiceListTagsResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceListTagsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceListTagsResponse, SDKValidationError>;
