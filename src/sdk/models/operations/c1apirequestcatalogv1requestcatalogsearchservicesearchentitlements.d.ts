import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse = {
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
     * The RequestCatalogSearchServiceSearchEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
     */
    requestCatalogSearchServiceSearchEntitlementsResponse?: shared.RequestCatalogSearchServiceSearchEntitlementsResponse | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    RequestCatalogSearchServiceSearchEntitlementsResponse?: shared.RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$ {
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound, z.ZodTypeDef, C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse>;
    /** @deprecated use `C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound` instead. */
    type Outbound = C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound;
}
export declare function c1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponseToJSON(c1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse: C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse): string;
export declare function c1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiRequestcatalogV1RequestCatalogSearchServiceSearchEntitlementsResponse, SDKValidationError>;
