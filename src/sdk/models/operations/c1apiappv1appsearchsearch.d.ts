import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAppV1AppSearchSearchResponse = {
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
     * The SearchAppsResponse message contains a list of results and a nextPageToken if applicable.
     */
    searchAppsResponse?: shared.SearchAppsResponse | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppSearchSearchResponse$inboundSchema: z.ZodType<C1ApiAppV1AppSearchSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAppV1AppSearchSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAppsResponse?: shared.SearchAppsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAppV1AppSearchSearchResponse$outboundSchema: z.ZodType<C1ApiAppV1AppSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppSearchSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAppV1AppSearchSearchResponse$ {
    /** @deprecated use `C1ApiAppV1AppSearchSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAppV1AppSearchSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAppV1AppSearchSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAppV1AppSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiAppV1AppSearchSearchResponse>;
    /** @deprecated use `C1ApiAppV1AppSearchSearchResponse$Outbound` instead. */
    type Outbound = C1ApiAppV1AppSearchSearchResponse$Outbound;
}
export declare function c1ApiAppV1AppSearchSearchResponseToJSON(c1ApiAppV1AppSearchSearchResponse: C1ApiAppV1AppSearchSearchResponse): string;
export declare function c1ApiAppV1AppSearchSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAppV1AppSearchSearchResponse, SDKValidationError>;
