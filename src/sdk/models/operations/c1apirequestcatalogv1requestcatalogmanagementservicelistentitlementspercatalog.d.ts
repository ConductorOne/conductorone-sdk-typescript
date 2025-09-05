import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest = {
    catalogId: string | null;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse = {
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
     * The RequestCatalogManagementServiceListEntitlementsPerCatalogResponse message contains a list of results and a nextPageToken if applicable.
     */
    requestCatalogManagementServiceListEntitlementsPerCatalogResponse?: shared.RequestCatalogManagementServiceListEntitlementsPerCatalogResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$Outbound = {
    catalog_id: string | null;
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequestToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequestFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogManagementServiceListEntitlementsPerCatalogResponse?: shared.RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponseToJSON(c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse: C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogManagementServiceListEntitlementsPerCatalogResponse, SDKValidationError>;
