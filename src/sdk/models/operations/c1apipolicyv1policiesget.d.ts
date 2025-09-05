import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PoliciesGetRequest = {
    id: string | null;
};
export type C1ApiPolicyV1PoliciesGetResponse = {
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
     * The GetPolicyResponse message contains the policy object.
     */
    getPolicyResponse?: shared.GetPolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesGetRequest$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesGetRequest$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesGetRequest$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesGetRequest>;
    /** @deprecated use `C1ApiPolicyV1PoliciesGetRequest$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesGetRequest$Outbound;
}
export declare function c1ApiPolicyV1PoliciesGetRequestToJSON(c1ApiPolicyV1PoliciesGetRequest: C1ApiPolicyV1PoliciesGetRequest): string;
export declare function c1ApiPolicyV1PoliciesGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiPolicyV1PoliciesGetResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetPolicyResponse?: shared.GetPolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesGetResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesGetResponse$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesGetResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesGetResponse>;
    /** @deprecated use `C1ApiPolicyV1PoliciesGetResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesGetResponse$Outbound;
}
export declare function c1ApiPolicyV1PoliciesGetResponseToJSON(c1ApiPolicyV1PoliciesGetResponse: C1ApiPolicyV1PoliciesGetResponse): string;
export declare function c1ApiPolicyV1PoliciesGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesGetResponse, SDKValidationError>;
