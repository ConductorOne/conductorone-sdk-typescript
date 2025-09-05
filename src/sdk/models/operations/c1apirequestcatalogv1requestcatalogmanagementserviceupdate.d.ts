import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest = {
    id: string | null;
    requestCatalogManagementServiceUpdateRequest?: shared.RequestCatalogManagementServiceUpdateRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse = {
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
     * The request catalog management service get response returns a request catalog view with the expanded items in the expanded array indicated by the expand mask in the request.
     */
    requestCatalogManagementServiceGetResponse?: shared.RequestCatalogManagementServiceGetResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$Outbound = {
    id: string | null;
    RequestCatalogManagementServiceUpdateRequest?: shared.RequestCatalogManagementServiceUpdateRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceGetResponse?: shared.RequestCatalogManagementServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceUpdateResponse, SDKValidationError>;
