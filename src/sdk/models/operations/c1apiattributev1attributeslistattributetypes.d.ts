import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesListAttributeTypesRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAttributeV1AttributesListAttributeTypesResponse = {
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
     * ListAttributeTypesResponse is the response for listing attribute types.
     */
    listAttributeTypesResponse?: shared.ListAttributeTypesResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeTypesRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListAttributeTypesRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeTypesRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListAttributeTypesRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeTypesRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListAttributeTypesRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesListAttributeTypesRequestToJSON(c1ApiAttributeV1AttributesListAttributeTypesRequest: C1ApiAttributeV1AttributesListAttributeTypesRequest): string;
export declare function c1ApiAttributeV1AttributesListAttributeTypesRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListAttributeTypesRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeTypesResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListAttributeTypesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListAttributeTypesResponse?: shared.ListAttributeTypesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListAttributeTypesResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListAttributeTypesResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListAttributeTypesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListAttributeTypesResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesListAttributeTypesResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListAttributeTypesResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesListAttributeTypesResponseToJSON(c1ApiAttributeV1AttributesListAttributeTypesResponse: C1ApiAttributeV1AttributesListAttributeTypesResponse): string;
export declare function c1ApiAttributeV1AttributesListAttributeTypesResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListAttributeTypesResponse, SDKValidationError>;
