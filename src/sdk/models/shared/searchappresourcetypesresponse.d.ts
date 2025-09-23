import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceType, AppResourceType$Outbound } from "./appresourcetype.js";
/**
 * The SearchAppResourceTypesResponse message contains a list of results and a nextPageToken if applicable.
 */
export type SearchAppResourceTypesResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppResourceType> | null | undefined;
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
export declare const SearchAppResourceTypesResponse$inboundSchema: z.ZodType<SearchAppResourceTypesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppResourceTypesResponse$Outbound = {
    list?: Array<AppResourceType$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppResourceTypesResponse$outboundSchema: z.ZodType<SearchAppResourceTypesResponse$Outbound, z.ZodTypeDef, SearchAppResourceTypesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppResourceTypesResponse$ {
    /** @deprecated use `SearchAppResourceTypesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppResourceTypesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppResourceTypesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppResourceTypesResponse$Outbound, z.ZodTypeDef, SearchAppResourceTypesResponse>;
    /** @deprecated use `SearchAppResourceTypesResponse$Outbound` instead. */
    type Outbound = SearchAppResourceTypesResponse$Outbound;
}
export declare function searchAppResourceTypesResponseToJSON(searchAppResourceTypesResponse: SearchAppResourceTypesResponse): string;
export declare function searchAppResourceTypesResponseFromJSON(jsonString: string): SafeParseResult<SearchAppResourceTypesResponse, SDKValidationError>;
