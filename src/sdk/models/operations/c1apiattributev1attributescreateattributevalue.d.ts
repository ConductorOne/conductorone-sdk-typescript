import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesCreateAttributeValueResponse = {
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
     * CreateAttributeValueResponse is the response for creating an attribute value.
     */
    createAttributeValueResponse?: shared.CreateAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesCreateAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateAttributeValueResponse?: shared.CreateAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesCreateAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesCreateAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesCreateAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesCreateAttributeValueResponseToJSON(c1ApiAttributeV1AttributesCreateAttributeValueResponse: C1ApiAttributeV1AttributesCreateAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesCreateAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesCreateAttributeValueResponse, SDKValidationError>;
