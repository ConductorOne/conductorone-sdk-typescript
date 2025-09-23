import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest = {
    id: string | null;
    deleteRiskLevelAttributeValueRequest?: shared.DeleteRiskLevelAttributeValueRequest | undefined;
};
export type C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse = {
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
    deleteRiskLevelAttributeValueResponse?: shared.DeleteRiskLevelAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$Outbound = {
    id: string | null;
    DeleteRiskLevelAttributeValueRequest?: shared.DeleteRiskLevelAttributeValueRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequestToJSON(c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest: C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteRiskLevelAttributeValueResponse?: shared.DeleteRiskLevelAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponseToJSON(c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse: C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesDeleteRiskLevelAttributeValueResponse, SDKValidationError>;
