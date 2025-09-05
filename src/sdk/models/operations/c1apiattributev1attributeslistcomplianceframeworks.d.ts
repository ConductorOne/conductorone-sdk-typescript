import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesListComplianceFrameworksRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAttributeV1AttributesListComplianceFrameworksResponse = {
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
    listComplianceFrameworksResponse?: shared.ListComplianceFrameworksResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListComplianceFrameworksRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListComplianceFrameworksRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListComplianceFrameworksRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListComplianceFrameworksRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListComplianceFrameworksRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListComplianceFrameworksRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListComplianceFrameworksRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesListComplianceFrameworksRequestToJSON(c1ApiAttributeV1AttributesListComplianceFrameworksRequest: C1ApiAttributeV1AttributesListComplianceFrameworksRequest): string;
export declare function c1ApiAttributeV1AttributesListComplianceFrameworksRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListComplianceFrameworksRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesListComplianceFrameworksResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListComplianceFrameworksResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListComplianceFrameworksResponse?: shared.ListComplianceFrameworksResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListComplianceFrameworksResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListComplianceFrameworksResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListComplianceFrameworksResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListComplianceFrameworksResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListComplianceFrameworksResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesListComplianceFrameworksResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListComplianceFrameworksResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesListComplianceFrameworksResponseToJSON(c1ApiAttributeV1AttributesListComplianceFrameworksResponse: C1ApiAttributeV1AttributesListComplianceFrameworksResponse): string;
export declare function c1ApiAttributeV1AttributesListComplianceFrameworksResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListComplianceFrameworksResponse, SDKValidationError>;
