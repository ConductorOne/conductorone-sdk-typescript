import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest = {
    id: string | null;
    functionsServiceDeleteFunctionRequest?: shared.FunctionsServiceDeleteFunctionRequest | undefined;
};
export type C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse = {
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
    functionsServiceDeleteFunctionResponse?: shared.FunctionsServiceDeleteFunctionResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$Outbound = {
    id: string | null;
    FunctionsServiceDeleteFunctionRequest?: shared.FunctionsServiceDeleteFunctionRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceDeleteFunctionRequestToJSON(c1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest: C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceDeleteFunctionRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceDeleteFunctionRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceDeleteFunctionResponse?: shared.FunctionsServiceDeleteFunctionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceDeleteFunctionResponseToJSON(c1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse: C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceDeleteFunctionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceDeleteFunctionResponse, SDKValidationError>;
