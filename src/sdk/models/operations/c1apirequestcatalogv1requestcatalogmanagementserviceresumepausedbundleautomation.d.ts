import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest = {
    requestCatalogId: string | null;
    resumePausedBundleAutomationRequest?: shared.ResumePausedBundleAutomationRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse = {
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
    resumePausedBundleAutomationResponse?: shared.ResumePausedBundleAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$Outbound = {
    request_catalog_id: string | null;
    ResumePausedBundleAutomationRequest?: shared.ResumePausedBundleAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ResumePausedBundleAutomationResponse?: shared.ResumePausedBundleAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceResumePausedBundleAutomationResponse, SDKValidationError>;
