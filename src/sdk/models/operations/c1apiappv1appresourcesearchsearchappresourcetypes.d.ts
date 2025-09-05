import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse = {
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
     * The SearchAppResourceTypesResponse message contains a list of results and a nextPageToken if applicable.
     */
    searchAppResourceTypesResponse?: shared.SearchAppResourceTypesResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAppResourceTypesResponse?: shared.SearchAppResourceTypesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceSearchSearchAppResourceTypesResponseToJSON(c1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse: C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse): string;
export declare function c1ApiAppV1AppResourceSearchSearchAppResourceTypesResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceSearchSearchAppResourceTypesResponse, SDKValidationError>;
