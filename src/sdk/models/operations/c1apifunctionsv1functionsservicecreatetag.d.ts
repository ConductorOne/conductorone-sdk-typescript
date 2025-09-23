import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceCreateTagRequest = {
    functionId: string | null;
    functionsServiceCreateTagRequest?: shared.FunctionsServiceCreateTagRequest | undefined;
};
export type C1ApiFunctionsV1FunctionsServiceCreateTagResponse = {
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
    functionsServiceCreateTagResponse?: shared.FunctionsServiceCreateTagResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCreateTagRequest$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceCreateTagRequest$Outbound = {
    function_id: string | null;
    FunctionsServiceCreateTagRequest?: shared.FunctionsServiceCreateTagRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCreateTagRequest$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCreateTagRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceCreateTagRequest$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagRequest$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCreateTagRequest>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagRequest$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceCreateTagRequest$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceCreateTagRequestToJSON(c1ApiFunctionsV1FunctionsServiceCreateTagRequest: C1ApiFunctionsV1FunctionsServiceCreateTagRequest): string;
export declare function c1ApiFunctionsV1FunctionsServiceCreateTagRequestFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceCreateTagRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCreateTagResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceCreateTagResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceCreateTagResponse?: shared.FunctionsServiceCreateTagResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceCreateTagResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCreateTagResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceCreateTagResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceCreateTagResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceCreateTagResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceCreateTagResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceCreateTagResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceCreateTagResponseToJSON(c1ApiFunctionsV1FunctionsServiceCreateTagResponse: C1ApiFunctionsV1FunctionsServiceCreateTagResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceCreateTagResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceCreateTagResponse, SDKValidationError>;
