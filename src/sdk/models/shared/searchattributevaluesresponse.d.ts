import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AttributeValue, AttributeValue$Outbound } from "./attributevalue.js";
/**
 * SearchAttributeValuesResponse is the response for searching AttributeValues.
 */
export type SearchAttributeValuesResponse = {
    /**
     * The list of returned AttributeValues.
     */
    list?: Array<AttributeValue> | null | undefined;
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
export declare const SearchAttributeValuesResponse$inboundSchema: z.ZodType<SearchAttributeValuesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAttributeValuesResponse$Outbound = {
    list?: Array<AttributeValue$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAttributeValuesResponse$outboundSchema: z.ZodType<SearchAttributeValuesResponse$Outbound, z.ZodTypeDef, SearchAttributeValuesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAttributeValuesResponse$ {
    /** @deprecated use `SearchAttributeValuesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAttributeValuesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAttributeValuesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAttributeValuesResponse$Outbound, z.ZodTypeDef, SearchAttributeValuesResponse>;
    /** @deprecated use `SearchAttributeValuesResponse$Outbound` instead. */
    type Outbound = SearchAttributeValuesResponse$Outbound;
}
export declare function searchAttributeValuesResponseToJSON(searchAttributeValuesResponse: SearchAttributeValuesResponse): string;
export declare function searchAttributeValuesResponseFromJSON(jsonString: string): SafeParseResult<SearchAttributeValuesResponse, SDKValidationError>;
