import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest = {
    id: string | null;
    requestCatalogManagementServiceDeleteRequest?: shared.RequestCatalogManagementServiceDeleteRequest | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse = {
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
     * Empty response with a status code indicating success.
     */
    requestCatalogManagementServiceDeleteResponse?: shared.RequestCatalogManagementServiceDeleteResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$Outbound = {
    id: string | null;
    RequestCatalogManagementServiceDeleteRequest?: shared.RequestCatalogManagementServiceDeleteRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceDeleteResponse?: shared.RequestCatalogManagementServiceDeleteResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceDeleteResponse, SDKValidationError>;
