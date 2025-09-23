import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { App, App$Outbound } from "./app.js";
/**
 * The SearchAppsResponse message contains a list of results and a nextPageToken if applicable.
 */
export type SearchAppsResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<App> | null | undefined;
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
export declare const SearchAppsResponse$inboundSchema: z.ZodType<SearchAppsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppsResponse$Outbound = {
    list?: Array<App$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppsResponse$outboundSchema: z.ZodType<SearchAppsResponse$Outbound, z.ZodTypeDef, SearchAppsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppsResponse$ {
    /** @deprecated use `SearchAppsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppsResponse$Outbound, z.ZodTypeDef, SearchAppsResponse>;
    /** @deprecated use `SearchAppsResponse$Outbound` instead. */
    type Outbound = SearchAppsResponse$Outbound;
}
export declare function searchAppsResponseToJSON(searchAppsResponse: SearchAppsResponse): string;
export declare function searchAppsResponseFromJSON(jsonString: string): SafeParseResult<SearchAppsResponse, SDKValidationError>;
