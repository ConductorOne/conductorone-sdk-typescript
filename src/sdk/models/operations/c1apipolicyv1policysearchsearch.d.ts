import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PolicySearchSearchResponse = {
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
    searchPoliciesResponse?: shared.SearchPoliciesResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PolicySearchSearchResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PolicySearchSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PolicySearchSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchPoliciesResponse?: shared.SearchPoliciesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PolicySearchSearchResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PolicySearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PolicySearchSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PolicySearchSearchResponse$ {
    /** @deprecated use `C1ApiPolicyV1PolicySearchSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PolicySearchSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PolicySearchSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PolicySearchSearchResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PolicySearchSearchResponse>;
    /** @deprecated use `C1ApiPolicyV1PolicySearchSearchResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PolicySearchSearchResponse$Outbound;
}
export declare function c1ApiPolicyV1PolicySearchSearchResponseToJSON(c1ApiPolicyV1PolicySearchSearchResponse: C1ApiPolicyV1PolicySearchSearchResponse): string;
export declare function c1ApiPolicyV1PolicySearchSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PolicySearchSearchResponse, SDKValidationError>;
