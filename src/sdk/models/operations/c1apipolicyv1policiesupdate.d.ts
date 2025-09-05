import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PoliciesUpdateRequest = {
    id: string | null;
    updatePolicyRequest?: shared.UpdatePolicyRequest | undefined;
};
export type C1ApiPolicyV1PoliciesUpdateResponse = {
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
     * The UpdatePolicyResponse message contains the updated policy object.
     */
    updatePolicyResponse?: shared.UpdatePolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesUpdateRequest$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesUpdateRequest$Outbound = {
    id: string | null;
    UpdatePolicyRequest?: shared.UpdatePolicyRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesUpdateRequest$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesUpdateRequest$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateRequest$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesUpdateRequest>;
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesUpdateRequest$Outbound;
}
export declare function c1ApiPolicyV1PoliciesUpdateRequestToJSON(c1ApiPolicyV1PoliciesUpdateRequest: C1ApiPolicyV1PoliciesUpdateRequest): string;
export declare function c1ApiPolicyV1PoliciesUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiPolicyV1PoliciesUpdateResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdatePolicyResponse?: shared.UpdatePolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesUpdateResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesUpdateResponse$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesUpdateResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesUpdateResponse>;
    /** @deprecated use `C1ApiPolicyV1PoliciesUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesUpdateResponse$Outbound;
}
export declare function c1ApiPolicyV1PoliciesUpdateResponseToJSON(c1ApiPolicyV1PoliciesUpdateResponse: C1ApiPolicyV1PoliciesUpdateResponse): string;
export declare function c1ApiPolicyV1PoliciesUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesUpdateResponse, SDKValidationError>;
