import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementWithUserBindings, AppEntitlementWithUserBindings$Outbound } from "./appentitlementwithuserbindings.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogSearchServiceSearchEntitlementsResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The RequestCatalogSearchServiceSearchEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
 */
export type RequestCatalogSearchServiceSearchEntitlementsResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementWithUserBindings> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$ {
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsResponseExpanded>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound` instead. */
    type Outbound = RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound;
}
export declare function requestCatalogSearchServiceSearchEntitlementsResponseExpandedToJSON(requestCatalogSearchServiceSearchEntitlementsResponseExpanded: RequestCatalogSearchServiceSearchEntitlementsResponseExpanded): string;
export declare function requestCatalogSearchServiceSearchEntitlementsResponseExpandedFromJSON(jsonString: string): SafeParseResult<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded, SDKValidationError>;
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsResponse$inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound = {
    expanded?: Array<RequestCatalogSearchServiceSearchEntitlementsResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementWithUserBindings$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogSearchServiceSearchEntitlementsResponse$outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogSearchServiceSearchEntitlementsResponse$ {
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound, z.ZodTypeDef, RequestCatalogSearchServiceSearchEntitlementsResponse>;
    /** @deprecated use `RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound` instead. */
    type Outbound = RequestCatalogSearchServiceSearchEntitlementsResponse$Outbound;
}
export declare function requestCatalogSearchServiceSearchEntitlementsResponseToJSON(requestCatalogSearchServiceSearchEntitlementsResponse: RequestCatalogSearchServiceSearchEntitlementsResponse): string;
export declare function requestCatalogSearchServiceSearchEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogSearchServiceSearchEntitlementsResponse, SDKValidationError>;
