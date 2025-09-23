import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserView, UserView$Outbound } from "./userview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type SearchUsersResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The SearchUsersResponse message.
 */
export type SearchUsersResponse = {
    /**
     * List of related objects
     */
    expanded?: Array<SearchUsersResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<UserView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchUsersResponseExpanded$inboundSchema: z.ZodType<SearchUsersResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchUsersResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const SearchUsersResponseExpanded$outboundSchema: z.ZodType<SearchUsersResponseExpanded$Outbound, z.ZodTypeDef, SearchUsersResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchUsersResponseExpanded$ {
    /** @deprecated use `SearchUsersResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchUsersResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchUsersResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchUsersResponseExpanded$Outbound, z.ZodTypeDef, SearchUsersResponseExpanded>;
    /** @deprecated use `SearchUsersResponseExpanded$Outbound` instead. */
    type Outbound = SearchUsersResponseExpanded$Outbound;
}
export declare function searchUsersResponseExpandedToJSON(searchUsersResponseExpanded: SearchUsersResponseExpanded): string;
export declare function searchUsersResponseExpandedFromJSON(jsonString: string): SafeParseResult<SearchUsersResponseExpanded, SDKValidationError>;
/** @internal */
export declare const SearchUsersResponse$inboundSchema: z.ZodType<SearchUsersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchUsersResponse$Outbound = {
    expanded?: Array<SearchUsersResponseExpanded$Outbound> | null | undefined;
    list?: Array<UserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchUsersResponse$outboundSchema: z.ZodType<SearchUsersResponse$Outbound, z.ZodTypeDef, SearchUsersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchUsersResponse$ {
    /** @deprecated use `SearchUsersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchUsersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchUsersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchUsersResponse$Outbound, z.ZodTypeDef, SearchUsersResponse>;
    /** @deprecated use `SearchUsersResponse$Outbound` instead. */
    type Outbound = SearchUsersResponse$Outbound;
}
export declare function searchUsersResponseToJSON(searchUsersResponse: SearchUsersResponse): string;
export declare function searchUsersResponseFromJSON(jsonString: string): SafeParseResult<SearchUsersResponse, SDKValidationError>;
