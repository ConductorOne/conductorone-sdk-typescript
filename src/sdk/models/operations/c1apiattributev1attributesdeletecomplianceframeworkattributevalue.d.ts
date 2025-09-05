import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest = {
    id: string | null;
    deleteComplianceFrameworkAttributeValueRequest?: shared.DeleteComplianceFrameworkAttributeValueRequest | undefined;
};
export type C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse = {
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
    deleteComplianceFrameworkAttributeValueResponse?: shared.DeleteComplianceFrameworkAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$Outbound = {
    id: string | null;
    DeleteComplianceFrameworkAttributeValueRequest?: shared.DeleteComplianceFrameworkAttributeValueRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequestToJSON(c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest: C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteComplianceFrameworkAttributeValueResponse?: shared.DeleteComplianceFrameworkAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponseToJSON(c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse: C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse, SDKValidationError>;
