import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesListAttributeValuesRequest = {
    attributeTypeId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAttributeV1AttributesListAttributeValuesResponse = {
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
     * ListAttributeValuesResponse is the response for listing attribute values for a given AttributeType.
     */
    listAttributeValuesResponse?: shared.ListAttributeValuesResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeValuesRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListAttributeValuesRequest$Outbound = {
    attribute_type_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeValuesRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeValuesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListAttributeValuesRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeValuesRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListAttributeValuesRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesListAttributeValuesRequestToJSON(c1ApiAttributeV1AttributesListAttributeValuesRequest: C1ApiAttributeV1AttributesListAttributeValuesRequest): string;
export declare function c1ApiAttributeV1AttributesListAttributeValuesRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListAttributeValuesRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeValuesResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListAttributeValuesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAttributeValuesResponse?: shared.ListAttributeValuesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeValuesResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeValuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListAttributeValuesResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeValuesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeValuesResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeValuesResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListAttributeValuesResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesListAttributeValuesResponseToJSON(c1ApiAttributeV1AttributesListAttributeValuesResponse: C1ApiAttributeV1AttributesListAttributeValuesResponse): string;
export declare function c1ApiAttributeV1AttributesListAttributeValuesResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListAttributeValuesResponse, SDKValidationError>;
