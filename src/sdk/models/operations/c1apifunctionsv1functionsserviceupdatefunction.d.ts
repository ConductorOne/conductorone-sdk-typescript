import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse = {
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
    functionsServiceUpdateFunctionResponse?: shared.FunctionsServiceUpdateFunctionResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceUpdateFunctionResponse?: shared.FunctionsServiceUpdateFunctionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceUpdateFunctionResponseToJSON(c1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse: C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceUpdateFunctionResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceUpdateFunctionResponse, SDKValidationError>;
