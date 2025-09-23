import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiTaskV1TaskSearchServiceSearchResponse = {
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
     * The TaskSearchResponse message contains a list of results and a nextPageToken if applicable.
     */
    taskSearchResponse?: shared.TaskSearchResponse | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskSearchServiceSearchResponse$inboundSchema: z.ZodType<C1ApiTaskV1TaskSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiTaskV1TaskSearchServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TaskSearchResponse?: shared.TaskSearchResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiTaskV1TaskSearchServiceSearchResponse$outboundSchema: z.ZodType<C1ApiTaskV1TaskSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiTaskV1TaskSearchServiceSearchResponse$ {
    /** @deprecated use `C1ApiTaskV1TaskSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiTaskV1TaskSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiTaskV1TaskSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiTaskV1TaskSearchServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiTaskV1TaskSearchServiceSearchResponse>;
    /** @deprecated use `C1ApiTaskV1TaskSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiTaskV1TaskSearchServiceSearchResponse$Outbound;
}
export declare function c1ApiTaskV1TaskSearchServiceSearchResponseToJSON(c1ApiTaskV1TaskSearchServiceSearchResponse: C1ApiTaskV1TaskSearchServiceSearchResponse): string;
export declare function c1ApiTaskV1TaskSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiTaskV1TaskSearchServiceSearchResponse, SDKValidationError>;
