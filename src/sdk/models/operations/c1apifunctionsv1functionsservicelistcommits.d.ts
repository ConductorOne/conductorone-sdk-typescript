import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceListCommitsRequest = {
    functionId: string | null;
};
export type C1ApiFunctionsV1FunctionsServiceListCommitsResponse = {
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
    functionsServiceListCommitsResponse?: shared.FunctionsServiceListCommitsResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListCommitsRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceListCommitsRequest$Outbound = {
    function_id: string | null;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListCommitsRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListCommitsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceListCommitsRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListCommitsRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceListCommitsRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceListCommitsRequestToJSON(c1ApiFunctionsV1FunctionsServiceListCommitsRequest: C1ApiFunctionsV1FunctionsServiceListCommitsRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceListCommitsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceListCommitsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListCommitsResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceListCommitsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceListCommitsResponse?: shared.FunctionsServiceListCommitsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListCommitsResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListCommitsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceListCommitsResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListCommitsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListCommitsResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListCommitsResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceListCommitsResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceListCommitsResponseToJSON(c1ApiFunctionsV1FunctionsServiceListCommitsResponse: C1ApiFunctionsV1FunctionsServiceListCommitsResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceListCommitsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceListCommitsResponse, SDKValidationError>;
