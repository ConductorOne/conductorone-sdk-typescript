import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiFunctionsV1FunctionsServiceListFunctionsResponse = {
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
    functionsServiceListFunctionsResponse?: shared.FunctionsServiceListFunctionsResponse | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListFunctionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    FunctionsServiceListFunctionsResponse?: shared.FunctionsServiceListFunctionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListFunctionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$ {
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListFunctionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$Outbound, z.ZodTypeDef, C1ApiFunctionsV1FunctionsServiceListFunctionsResponse>;
    /** @deprecated use `C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$Outbound` instead. */
    type Outbound = C1ApiFunctionsV1FunctionsServiceListFunctionsResponse$Outbound;
}
export declare function c1ApiFunctionsV1FunctionsServiceListFunctionsResponseToJSON(c1ApiFunctionsV1FunctionsServiceListFunctionsResponse: C1ApiFunctionsV1FunctionsServiceListFunctionsResponse): string;
export declare function c1ApiFunctionsV1FunctionsServiceListFunctionsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiFunctionsV1FunctionsServiceListFunctionsResponse, SDKValidationError>;
