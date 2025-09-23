import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiPolicyV1AccountProvisionPolicyTestTestResponse = {
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
    testAccountProvisionPolicyResponse?: shared.TestAccountProvisionPolicyResponse | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$inboundSchema: z.ZodType<C1ApiPolicyV1AccountProvisionPolicyTestTestResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TestAccountProvisionPolicyResponse?: shared.TestAccountProvisionPolicyResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$outboundSchema: z.ZodType<C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1AccountProvisionPolicyTestTestResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$ {
    /** @deprecated use `C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiPolicyV1AccountProvisionPolicyTestTestResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$Outbound, z.ZodTypeDef, C1ApiPolicyV1AccountProvisionPolicyTestTestResponse>;
    /** @deprecated use `C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$Outbound` instead. */
    type Outbound = C1ApiPolicyV1AccountProvisionPolicyTestTestResponse$Outbound;
}
export declare function c1ApiPolicyV1AccountProvisionPolicyTestTestResponseToJSON(c1ApiPolicyV1AccountProvisionPolicyTestTestResponse: C1ApiPolicyV1AccountProvisionPolicyTestTestResponse): string;
export declare function c1ApiPolicyV1AccountProvisionPolicyTestTestResponseFromJSON(jsonString: string): SafeParseResult<C1ApiPolicyV1AccountProvisionPolicyTestTestResponse, SDKValidationError>;
