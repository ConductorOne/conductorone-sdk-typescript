import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PoliciesListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiPolicyV1PoliciesListResponse = {
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
    listPolicyResponse?: shared.ListPolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesListRequest$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesListRequest$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesListRequest$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesListRequest>;
    /** @deprecated use `C1ApiPolicyV1PoliciesListRequest$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesListRequest$Outbound;
}
export declare function c1ApiPolicyV1PoliciesListRequestToJSON(c1ApiPolicyV1PoliciesListRequest: C1ApiPolicyV1PoliciesListRequest): string;
export declare function c1ApiPolicyV1PoliciesListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiPolicyV1PoliciesListResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListPolicyResponse?: shared.ListPolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesListResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesListResponse$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesListResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesListResponse>;
    /** @deprecated use `C1ApiPolicyV1PoliciesListResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesListResponse$Outbound;
}
export declare function c1ApiPolicyV1PoliciesListResponseToJSON(c1ApiPolicyV1PoliciesListResponse: C1ApiPolicyV1PoliciesListResponse): string;
export declare function c1ApiPolicyV1PoliciesListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesListResponse, SDKValidationError>;
