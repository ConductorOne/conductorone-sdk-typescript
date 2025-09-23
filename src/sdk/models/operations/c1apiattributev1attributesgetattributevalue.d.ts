import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesGetAttributeValueRequest = {
    id: string | null;
};
export type C1ApiAttributeV1AttributesGetAttributeValueResponse = {
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
     * GetAttributeValueResponse is the response for getting an attribute value by id.
     */
    getAttributeValueResponse?: shared.GetAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetAttributeValueRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetAttributeValueRequestToJSON(c1ApiAttributeV1AttributesGetAttributeValueRequest: C1ApiAttributeV1AttributesGetAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesGetAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesGetAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetAttributeValueResponse?: shared.GetAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetAttributeValueResponseToJSON(c1ApiAttributeV1AttributesGetAttributeValueResponse: C1ApiAttributeV1AttributesGetAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesGetAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetAttributeValueResponse, SDKValidationError>;
