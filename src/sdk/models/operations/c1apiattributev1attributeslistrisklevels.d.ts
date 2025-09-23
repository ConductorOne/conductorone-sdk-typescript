import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAttributeV1AttributesListRiskLevelsRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiAttributeV1AttributesListRiskLevelsResponse = {
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
    listRiskLevelsResponse?: shared.ListRiskLevelsResponse | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListRiskLevelsRequest$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListRiskLevelsRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListRiskLevelsRequest$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListRiskLevelsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListRiskLevelsRequest$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsRequest$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListRiskLevelsRequest>;
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsRequest$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListRiskLevelsRequest$Outbound;
}
export declare function c1ApiAttributeV1AttributesListRiskLevelsRequestToJSON(c1ApiAttributeV1AttributesListRiskLevelsRequest: C1ApiAttributeV1AttributesListRiskLevelsRequest): string;
export declare function c1ApiAttributeV1AttributesListRiskLevelsRequestFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListRiskLevelsRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiAttributeV1AttributesListRiskLevelsResponse$inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAttributeV1AttributesListRiskLevelsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListRiskLevelsResponse?: shared.ListRiskLevelsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAttributeV1AttributesListRiskLevelsResponse$outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListRiskLevelsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAttributeV1AttributesListRiskLevelsResponse$ {
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAttributeV1AttributesListRiskLevelsResponse$Outbound, z.ZodTypeDef, C1ApiAttributeV1AttributesListRiskLevelsResponse>;
    /** @deprecated use `C1ApiAttributeV1AttributesListRiskLevelsResponse$Outbound` instead. */
    type Outbound = C1ApiAttributeV1AttributesListRiskLevelsResponse$Outbound;
}
export declare function c1ApiAttributeV1AttributesListRiskLevelsResponseToJSON(c1ApiAttributeV1AttributesListRiskLevelsResponse: C1ApiAttributeV1AttributesListRiskLevelsResponse): string;
export declare function c1ApiAttributeV1AttributesListRiskLevelsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAttributeV1AttributesListRiskLevelsResponse, SDKValidationError>;
