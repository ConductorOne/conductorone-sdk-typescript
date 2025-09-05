import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest = {
    requestCatalogId: string | null;
    deleteBundleAutomationRequest?: shared.DeleteBundleAutomationRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse = {
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
    deleteBundleAutomationResponse?: shared.DeleteBundleAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$Outbound = {
    request_catalog_id: string | null;
    DeleteBundleAutomationRequest?: shared.DeleteBundleAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteBundleAutomationResponse?: shared.DeleteBundleAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteBundleAutomationResponse, SDKValidationError>;
