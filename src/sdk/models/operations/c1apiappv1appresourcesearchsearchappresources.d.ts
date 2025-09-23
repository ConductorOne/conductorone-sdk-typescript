import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppResourceSearchSearchAppResourcesResponse = {
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
    searchAppResourcesResponse?: shared.SearchAppResourcesResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$inboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourcesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAppResourcesResponse?: shared.SearchAppResourcesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$outboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceSearchSearchAppResourcesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$ {
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourcesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppResourceSearchSearchAppResourcesResponse>;
    /** @deprecated use `C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppResourceSearchSearchAppResourcesResponse$Outbound;
}
export declare function c1ApiAppV1AppResourceSearchSearchAppResourcesResponseToJSON(c1ApiAppV1AppResourceSearchSearchAppResourcesResponse: C1ApiAppV1AppResourceSearchSearchAppResourcesResponse): string;
export declare function c1ApiAppV1AppResourceSearchSearchAppResourcesResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppResourceSearchSearchAppResourcesResponse, SDKValidationError>;
