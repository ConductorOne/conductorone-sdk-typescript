import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse = {
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
     * SearchAttributeValuesResponse is the response for searching AttributeValues.
     */
    searchAttributeValuesResponse?: shared.SearchAttributeValuesResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAttributeValuesResponse?: shared.SearchAttributeValuesResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributeSearchSearchAttributeValuesResponseToJSON(c1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse: C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse): string;
export declare function c1ApiAttributeV1AttributeSearchSearchAttributeValuesResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributeSearchSearchAttributeValuesResponse, SDKValidationError>;
