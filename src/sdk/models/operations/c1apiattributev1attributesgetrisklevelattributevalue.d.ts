import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest = {
    id: string | null;
};
export type C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse = {
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
    getRiskLevelAttributeValueResponse?: shared.GetRiskLevelAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequestToJSON(c1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest: C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest): string;
export declare function c1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetRiskLevelAttributeValueResponse?: shared.GetRiskLevelAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponseToJSON(c1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse: C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse, SDKValidationError>;
