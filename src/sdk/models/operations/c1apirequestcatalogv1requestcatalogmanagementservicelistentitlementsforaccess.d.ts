import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest = {
    catalogId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse = {
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
     * The RequestCatalogManagementServiceListEntitlementsForAccessResponse message contains a list of results and a nextPageToken if applicable.
     */
    requestCatalogManagementServiceListEntitlementsForAccessResponse?: shared.RequestCatalogManagementServiceListEntitlementsForAccessResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$Outbound = {
    catalog_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceListEntitlementsForAccessResponse?: shared.RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsForAccessResponse, SDKValidationError>;
