import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsSearchSearchResponse = {
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
    functionsSearchResponse?: shared.FunctionsSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsSearchSearchResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsSearchSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsSearchSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsSearchResponse?: shared.FunctionsSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsSearchSearchResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsSearchSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsSearchSearchResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsSearchSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsSearchSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsSearchSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsSearchSearchResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsSearchSearchResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsSearchSearchResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsSearchSearchResponseToJSON(c1ApiFunctionsV1FunctionsSearchSearchResponse: C1ApiFunctionsV1FunctionsSearchSearchResponse): string;
export declare function c1ApiFunctionsV1FunctionsSearchSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsSearchSearchResponse, SDKValidationError>;
