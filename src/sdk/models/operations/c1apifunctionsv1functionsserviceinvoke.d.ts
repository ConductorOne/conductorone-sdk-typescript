import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceInvokeRequest = {
    functionId: string | null;
    functionsServiceInvokeRequest?: shared.FunctionsServiceInvokeRequest | undefined;
};
export type C1ApiFunctionsV1FunctionsServiceInvokeResponse = {
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
    functionsServiceInvokeResponse?: shared.FunctionsServiceInvokeResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceInvokeRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceInvokeRequest$Outbound = {
    function_id: string | null;
    FunctionsServiceInvokeRequest?: shared.FunctionsServiceInvokeRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceInvokeRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceInvokeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceInvokeRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceInvokeRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceInvokeRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceInvokeRequestToJSON(c1ApiFunctionsV1FunctionsServiceInvokeRequest: C1ApiFunctionsV1FunctionsServiceInvokeRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceInvokeRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceInvokeRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceInvokeResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceInvokeResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceInvokeResponse?: shared.FunctionsServiceInvokeResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceInvokeResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceInvokeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceInvokeResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceInvokeResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceInvokeResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceInvokeResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceInvokeResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceInvokeResponseToJSON(c1ApiFunctionsV1FunctionsServiceInvokeResponse: C1ApiFunctionsV1FunctionsServiceInvokeResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceInvokeResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceInvokeResponse, SDKValidationError>;
