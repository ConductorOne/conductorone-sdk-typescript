import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PoliciesCreateResponse = {
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
     * The CreatePolicyResponse message contains the created policy object.
     */
    createPolicyResponse?: shared.CreatePolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesCreateResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PoliciesCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreatePolicyResponse?: shared.CreatePolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PoliciesCreateResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesCreateResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PoliciesCreateResponse$ {
    /** @deprecated use `C1ApiPolicyV1PoliciesCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PoliciesCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PoliciesCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PoliciesCreateResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PoliciesCreateResponse>;
    /** @deprecated use `C1ApiPolicyV1PoliciesCreateResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PoliciesCreateResponse$Outbound;
}
export declare function c1ApiPolicyV1PoliciesCreateResponseToJSON(c1ApiPolicyV1PoliciesCreateResponse: C1ApiPolicyV1PoliciesCreateResponse): string;
export declare function c1ApiPolicyV1PoliciesCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PoliciesCreateResponse, SDKValidationError>;
