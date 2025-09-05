import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1PolicyValidateValidateCELResponse = {
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
    editorValidateResponse?: shared.EditorValidateResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PolicyValidateValidateCELResponse$inboundSchema: z.ZodType<C1ApiPolicyV1PolicyValidateValidateCELResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1PolicyValidateValidateCELResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    EditorValidateResponse?: shared.EditorValidateResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1PolicyValidateValidateCELResponse$outboundSchema: z.ZodType<C1ApiPolicyV1PolicyValidateValidateCELResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PolicyValidateValidateCELResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1PolicyValidateValidateCELResponse$ {
    /** @deprecated use `C1ApiPolicyV1PolicyValidateValidateCELResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1PolicyValidateValidateCELResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1PolicyValidateValidateCELResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1PolicyValidateValidateCELResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1PolicyValidateValidateCELResponse>;
    /** @deprecated use `C1ApiPolicyV1PolicyValidateValidateCELResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1PolicyValidateValidateCELResponse$Outbound;
}
export declare function c1ApiPolicyV1PolicyValidateValidateCELResponseToJSON(c1ApiPolicyV1PolicyValidateValidateCELResponse: C1ApiPolicyV1PolicyValidateValidateCELResponse): string;
export declare function c1ApiPolicyV1PolicyValidateValidateCELResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1PolicyValidateValidateCELResponse, SDKValidationError>;
