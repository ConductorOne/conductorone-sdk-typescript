import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse = {
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
    createRiskLevelAttributeValueResponse?: shared.CreateRiskLevelAttributeValueResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateRiskLevelAttributeValueResponse?: shared.CreateRiskLevelAttributeValueResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponseToJSON(c1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse: C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse): string;
export declare function c1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesCreateRiskLevelAttributeValueResponse, SDKValidationError>;
