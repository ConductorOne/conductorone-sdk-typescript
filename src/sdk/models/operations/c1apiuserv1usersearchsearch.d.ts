import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiUserV1UserSearchSearchResponse = {
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
    searchUsersResponse?: shared.SearchUsersResponse | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserSearchSearchResponse$inboundSchema: z.ZodType<C1ApiUserV1UserSearchSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiUserV1UserSearchSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchUsersResponse?: shared.SearchUsersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiUserV1UserSearchSearchResponse$outboundSchema: z.ZodType<C1ApiUserV1UserSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserSearchSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiUserV1UserSearchSearchResponse$ {
    /** @deprecated use `C1ApiUserV1UserSearchSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiUserV1UserSearchSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiUserV1UserSearchSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiUserV1UserSearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiUserV1UserSearchSearchResponse>;
    /** @deprecated use `C1ApiUserV1UserSearchSearchResponse$Outbound` instead. */
    type Outbound = C1ApiUserV1UserSearchSearchResponse$Outbound;
}
export declare function c1ApiUserV1UserSearchSearchResponseToJSON(c1ApiUserV1UserSearchSearchResponse: C1ApiUserV1UserSearchSearchResponse): string;
export declare function c1ApiUserV1UserSearchSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiUserV1UserSearchSearchResponse, SDKValidationError>;
