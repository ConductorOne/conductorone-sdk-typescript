import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PoliciesDeleteRequest = {
    id: string | null;
    deletePolicyRequest?: shared.DeletePolicyRequest | undefined;
};
export type C1ApiPolicyV1PoliciesDeleteResponse = {
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
     * Empty response with a status code indicating success.
     */
    deletePolicyResponse?: shared.DeletePolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesDeleteRequest$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesDeleteRequest$Outbound = {
    id: string | null;
    DeletePolicyRequest?: shared.DeletePolicyRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesDeleteRequest$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesDeleteRequest$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesDeleteRequest>;
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesDeleteRequest$Outbound;
}
export declare function c1ApiPolicyV1PoliciesDeleteRequestToJSON(c1ApiPolicyV1PoliciesDeleteRequest: C1ApiPolicyV1PoliciesDeleteRequest): string;
export declare function c1ApiPolicyV1PoliciesDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiPolicyV1PoliciesDeleteResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeletePolicyResponse?: shared.DeletePolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesDeleteResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesDeleteResponse$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesDeleteResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesDeleteResponse>;
    /** @deprecated use `C1ApiPolicyV1PoliciesDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesDeleteResponse$Outbound;
}
export declare function c1ApiPolicyV1PoliciesDeleteResponseToJSON(c1ApiPolicyV1PoliciesDeleteResponse: C1ApiPolicyV1PoliciesDeleteResponse): string;
export declare function c1ApiPolicyV1PoliciesDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesDeleteResponse, SDKValidationError>;
