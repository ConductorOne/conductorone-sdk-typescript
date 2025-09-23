import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBindingHistoryView, AppEntitlementUserBindingHistoryView$Outbound } from "./appentitlementuserbindinghistoryview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type SearchPastGrantsResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The SearchPastGrantsResponse message contains a list of past grants and a nextPageToken if applicable.
 */
export type SearchPastGrantsResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<SearchPastGrantsResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementUserBindingHistoryView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retrieved.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPastGrantsResponseExpanded$inboundSchema: z.ZodType<SearchPastGrantsResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchPastGrantsResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const SearchPastGrantsResponseExpanded$outboundSchema: z.ZodType<SearchPastGrantsResponseExpanded$Outbound, z.ZodTypeDef, SearchPastGrantsResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchPastGrantsResponseExpanded$ {
    /** @deprecated use `SearchPastGrantsResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchPastGrantsResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchPastGrantsResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchPastGrantsResponseExpanded$Outbound, z.ZodTypeDef, SearchPastGrantsResponseExpanded>;
    /** @deprecated use `SearchPastGrantsResponseExpanded$Outbound` instead. */
    type Outbound = SearchPastGrantsResponseExpanded$Outbound;
}
export declare function searchPastGrantsResponseExpandedToJSON(searchPastGrantsResponseExpanded: SearchPastGrantsResponseExpanded): string;
export declare function searchPastGrantsResponseExpandedFromJSON(jsonString: string): SafeParseResult<SearchPastGrantsResponseExpanded, SDKValidationError>;
/** @internal */
export declare const SearchPastGrantsResponse$inboundSchema: z.ZodType<SearchPastGrantsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchPastGrantsResponse$Outbound = {
    expanded?: Array<SearchPastGrantsResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementUserBindingHistoryView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPastGrantsResponse$outboundSchema: z.ZodType<SearchPastGrantsResponse$Outbound, z.ZodTypeDef, SearchPastGrantsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchPastGrantsResponse$ {
    /** @deprecated use `SearchPastGrantsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchPastGrantsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchPastGrantsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchPastGrantsResponse$Outbound, z.ZodTypeDef, SearchPastGrantsResponse>;
    /** @deprecated use `SearchPastGrantsResponse$Outbound` instead. */
    type Outbound = SearchPastGrantsResponse$Outbound;
}
export declare function searchPastGrantsResponseToJSON(searchPastGrantsResponse: SearchPastGrantsResponse): string;
export declare function searchPastGrantsResponseFromJSON(jsonString: string): SafeParseResult<SearchPastGrantsResponse, SDKValidationError>;
