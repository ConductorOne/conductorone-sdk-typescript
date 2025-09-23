import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest = {
    requestCatalogId: string | null;
    forceRunBundleAutomationRequest?: shared.ForceRunBundleAutomationRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse = {
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
    forceRunBundleAutomationResponse?: shared.ForceRunBundleAutomationResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$Outbound = {
    request_catalog_id: string | null;
    ForceRunBundleAutomationRequest?: shared.ForceRunBundleAutomationRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ForceRunBundleAutomationResponse?: shared.ForceRunBundleAutomationResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceForceRunBundleAutomationResponse, SDKValidationError>;
