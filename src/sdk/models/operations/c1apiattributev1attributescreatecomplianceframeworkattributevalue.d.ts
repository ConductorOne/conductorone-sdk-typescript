import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse = {
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
    createComplianceFrameworkAttributeValueResponse?: shared.CreateComplianceFrameworkAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateComplianceFrameworkAttributeValueResponse?: shared.CreateComplianceFrameworkAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponseToJSON(c1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse: C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesCreateComplianceFrameworkAttributeValueResponse, SDKValidationError>;
