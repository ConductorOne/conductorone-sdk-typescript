import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest = {
    requestCatalogId: string | null;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse = {
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
    bundleAutomation?: shared.BundleAutomation | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$Outbound = {
    request_catalog_id: string | null;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    BundleAutomation?: shared.BundleAutomation$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetBundleAutomationResponse, SDKValidationError>;
