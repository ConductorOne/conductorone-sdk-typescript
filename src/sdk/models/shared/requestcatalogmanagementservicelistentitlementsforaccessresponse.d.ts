import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The RequestCatalogManagementServiceListEntitlementsForAccessResponse message contains a list of results and a nextPageToken if applicable.
 */
export type RequestCatalogManagementServiceListEntitlementsForAccessResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementView> | null | undefined;
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
export declare const RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$ {
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound;
}
export declare function requestCatalogManagementServiceListEntitlementsForAccessResponseExpandedToJSON(requestCatalogManagementServiceListEntitlementsForAccessResponseExpanded: RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded): string;
export declare function requestCatalogManagementServiceListEntitlementsForAccessResponseExpandedFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded, SDKValidationError>;
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsForAccessResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound = {
    expanded?: Array<RequestCatalogManagementServiceListEntitlementsForAccessResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceListEntitlementsForAccessResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsForAccessResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListEntitlementsForAccessResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListEntitlementsForAccessResponse>;
    /** @deprecated use `RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListEntitlementsForAccessResponse$Outbound;
}
export declare function requestCatalogManagementServiceListEntitlementsForAccessResponseToJSON(requestCatalogManagementServiceListEntitlementsForAccessResponse: RequestCatalogManagementServiceListEntitlementsForAccessResponse): string;
export declare function requestCatalogManagementServiceListEntitlementsForAccessResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListEntitlementsForAccessResponse, SDKValidationError>;
