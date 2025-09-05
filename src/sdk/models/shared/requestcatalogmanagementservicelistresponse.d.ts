import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RequestCatalogView, RequestCatalogView$Outbound } from "./requestcatalogview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type RequestCatalogManagementServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The RequestCatalogManagementServiceListResponse message.
 */
export type RequestCatalogManagementServiceListResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<RequestCatalogManagementServiceListResponseExpanded> | null | undefined;
    /**
     * The list of request catalogs.
     */
    list?: Array<RequestCatalogView> | null | undefined;
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
export declare const RequestCatalogManagementServiceListResponseExpanded$inboundSchema: z.ZodType<RequestCatalogManagementServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const RequestCatalogManagementServiceListResponseExpanded$outboundSchema: z.ZodType<RequestCatalogManagementServiceListResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListResponseExpanded$ {
    /** @deprecated use `RequestCatalogManagementServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListResponseExpanded$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListResponseExpanded>;
    /** @deprecated use `RequestCatalogManagementServiceListResponseExpanded$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListResponseExpanded$Outbound;
}
export declare function requestCatalogManagementServiceListResponseExpandedToJSON(requestCatalogManagementServiceListResponseExpanded: RequestCatalogManagementServiceListResponseExpanded): string;
export declare function requestCatalogManagementServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const RequestCatalogManagementServiceListResponse$inboundSchema: z.ZodType<RequestCatalogManagementServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RequestCatalogManagementServiceListResponse$Outbound = {
    expanded?: Array<RequestCatalogManagementServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<RequestCatalogView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const RequestCatalogManagementServiceListResponse$outboundSchema: z.ZodType<RequestCatalogManagementServiceListResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RequestCatalogManagementServiceListResponse$ {
    /** @deprecated use `RequestCatalogManagementServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RequestCatalogManagementServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RequestCatalogManagementServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RequestCatalogManagementServiceListResponse$Outbound, z.ZodTypeDef, RequestCatalogManagementServiceListResponse>;
    /** @deprecated use `RequestCatalogManagementServiceListResponse$Outbound` instead. */
    type Outbound = RequestCatalogManagementServiceListResponse$Outbound;
}
export declare function requestCatalogManagementServiceListResponseToJSON(requestCatalogManagementServiceListResponse: RequestCatalogManagementServiceListResponse): string;
export declare function requestCatalogManagementServiceListResponseFromJSON(jsonString: string): SafeParseResult<RequestCatalogManagementServiceListResponse, SDKValidationError>;
