import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBindingFeedView, AppEntitlementUserBindingFeedView$Outbound } from "./appentitlementuserbindingfeedview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type SearchGrantFeedResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The SearchGrantFeedResponse message contains a list of grant event results and a nextPageToken if applicable.
 */
export type SearchGrantFeedResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<SearchGrantFeedResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementUserBindingFeedView> | null | undefined;
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
export declare const SearchGrantFeedResponseExpanded$inboundSchema: z.ZodType<SearchGrantFeedResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchGrantFeedResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const SearchGrantFeedResponseExpanded$outboundSchema: z.ZodType<SearchGrantFeedResponseExpanded$Outbound, z.ZodTypeDef, SearchGrantFeedResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchGrantFeedResponseExpanded$ {
    /** @deprecated use `SearchGrantFeedResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchGrantFeedResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchGrantFeedResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchGrantFeedResponseExpanded$Outbound, z.ZodTypeDef, SearchGrantFeedResponseExpanded>;
    /** @deprecated use `SearchGrantFeedResponseExpanded$Outbound` instead. */
    type Outbound = SearchGrantFeedResponseExpanded$Outbound;
}
export declare function searchGrantFeedResponseExpandedToJSON(searchGrantFeedResponseExpanded: SearchGrantFeedResponseExpanded): string;
export declare function searchGrantFeedResponseExpandedFromJSON(jsonString: string): SafeParseResult<SearchGrantFeedResponseExpanded, SDKValidationError>;
/** @internal */
export declare const SearchGrantFeedResponse$inboundSchema: z.ZodType<SearchGrantFeedResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchGrantFeedResponse$Outbound = {
    expanded?: Array<SearchGrantFeedResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementUserBindingFeedView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchGrantFeedResponse$outboundSchema: z.ZodType<SearchGrantFeedResponse$Outbound, z.ZodTypeDef, SearchGrantFeedResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchGrantFeedResponse$ {
    /** @deprecated use `SearchGrantFeedResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchGrantFeedResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchGrantFeedResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchGrantFeedResponse$Outbound, z.ZodTypeDef, SearchGrantFeedResponse>;
    /** @deprecated use `SearchGrantFeedResponse$Outbound` instead. */
    type Outbound = SearchGrantFeedResponse$Outbound;
}
export declare function searchGrantFeedResponseToJSON(searchGrantFeedResponse: SearchGrantFeedResponse): string;
export declare function searchGrantFeedResponseFromJSON(jsonString: string): SafeParseResult<SearchGrantFeedResponse, SDKValidationError>;
