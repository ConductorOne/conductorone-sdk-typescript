import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceGetFunctionRequest = {
    id: string | null;
};
export type C1ApiFunctionsV1FunctionsServiceGetFunctionResponse = {
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
    functionsServiceGetFunctionResponse?: shared.FunctionsServiceGetFunctionResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetFunctionRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetFunctionRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceGetFunctionRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceGetFunctionRequestToJSON(c1ApiFunctionsV1FunctionsServiceGetFunctionRequest: C1ApiFunctionsV1FunctionsServiceGetFunctionRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceGetFunctionRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceGetFunctionRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceGetFunctionResponse?: shared.FunctionsServiceGetFunctionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceGetFunctionResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceGetFunctionResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceGetFunctionResponseToJSON(c1ApiFunctionsV1FunctionsServiceGetFunctionResponse: C1ApiFunctionsV1FunctionsServiceGetFunctionResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceGetFunctionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceGetFunctionResponse, SDKValidationError>;
