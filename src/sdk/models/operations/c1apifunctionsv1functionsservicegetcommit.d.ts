import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceGetCommitRequest = {
    functionId: string | null;
    id: string | null;
};
export type C1ApiFunctionsV1FunctionsServiceGetCommitResponse = {
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
    functionsServiceGetCommitResponse?: shared.FunctionsServiceGetCommitResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetCommitRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceGetCommitRequest$Outbound = {
    function_id: string | null;
    id: string | null;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetCommitRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetCommitRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceGetCommitRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetCommitRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceGetCommitRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceGetCommitRequestToJSON(c1ApiFunctionsV1FunctionsServiceGetCommitRequest: C1ApiFunctionsV1FunctionsServiceGetCommitRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceGetCommitRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceGetCommitRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetCommitResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceGetCommitResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceGetCommitResponse?: shared.FunctionsServiceGetCommitResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetCommitResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetCommitResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceGetCommitResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetCommitResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetCommitResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetCommitResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceGetCommitResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceGetCommitResponseToJSON(c1ApiFunctionsV1FunctionsServiceGetCommitResponse: C1ApiFunctionsV1FunctionsServiceGetCommitResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceGetCommitResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceGetCommitResponse, SDKValidationError>;
