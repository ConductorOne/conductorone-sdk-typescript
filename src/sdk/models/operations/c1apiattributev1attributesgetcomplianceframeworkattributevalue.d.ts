import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest = {
    id: string | null;
};
export type C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse = {
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
    getComplianceFrameworkAttributeValueResponse?: shared.GetComplianceFrameworkAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequestToJSON(c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest: C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetComplianceFrameworkAttributeValueResponse?: shared.GetComplianceFrameworkAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponseToJSON(c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse: C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse, SDKValidationError>;
