import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceCommitRequest = {
    functionId: string | null;
    functionsServiceCommitRequest?: shared.FunctionsServiceCommitRequest | undefined;
};
export type C1ApiFunctionsV1FunctionsServiceCommitResponse = {
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
    functionsServiceCommitResponse?: shared.FunctionsServiceCommitResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCommitRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceCommitRequest$Outbound = {
    function_id: string | null;
    FunctionsServiceCommitRequest?: shared.FunctionsServiceCommitRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCommitRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCommitRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceCommitRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCommitRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceCommitRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceCommitRequestToJSON(c1ApiFunctionsV1FunctionsServiceCommitRequest: C1ApiFunctionsV1FunctionsServiceCommitRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceCommitRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceCommitRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCommitResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceCommitResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceCommitResponse?: shared.FunctionsServiceCommitResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCommitResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCommitResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceCommitResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCommitResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCommitResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCommitResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceCommitResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceCommitResponseToJSON(c1ApiFunctionsV1FunctionsServiceCommitResponse: C1ApiFunctionsV1FunctionsServiceCommitResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceCommitResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceCommitResponse, SDKValidationError>;
