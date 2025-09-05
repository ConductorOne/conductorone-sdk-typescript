import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesDeleteAttributeValueRequest = {
    id: string | null;
    deleteAttributeValueRequest?: shared.DeleteAttributeValueRequest | undefined;
};
export type C1ApiAttributeV1AttributesDeleteAttributeValueResponse = {
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
     * DeleteAttributeValueResponse is the empty response for deleting an attribute value.
     */
    deleteAttributeValueResponse?: shared.DeleteAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteAttributeValueRequest$Outbound = {
    id: string | null;
    DeleteAttributeValueRequest?: shared.DeleteAttributeValueRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteAttributeValueRequestToJSON(c1ApiAttributeV1AttributesDeleteAttributeValueRequest: C1ApiAttributeV1AttributesDeleteAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesDeleteAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteAttributeValueResponse?: shared.DeleteAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteAttributeValueResponseToJSON(c1ApiAttributeV1AttributesDeleteAttributeValueResponse: C1ApiAttributeV1AttributesDeleteAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesDeleteAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteAttributeValueResponse, SDKValidationError>;
