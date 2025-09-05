import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest = {
    id: string | null;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse = {
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
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceGetResponse?: shared.RequestCatalogManagementServiceGetResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceGetResponse, SDKValidationError>;
