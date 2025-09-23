import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest = {
    requestCatalogId: string | null;
    setBundleAutomationRequest?: shared.SetBundleAutomationRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse = {
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
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$Outbound = {
    request_catalog_id: string | null;
    SetBundleAutomationRequest?: shared.SetBundleAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    BundleAutomation?: shared.BundleAutomation$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceSetBundleAutomationResponse, SDKValidationError>;
