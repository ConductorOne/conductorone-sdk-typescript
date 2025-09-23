import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Search Attributes by a few properties.
 */
export type SearchAttributeValuesRequest = {
    /**
     * The attribute type ids for what type of attributes to search for.
     */
    attributeTypeIds?: Array<string> | null | undefined;
    /**
     * Exclude attributes with these ids from the search results.
     */
    excludeIds?: Array<string> | null | undefined;
    /**
     * Include attributes with these ids in the search results.
     */
    ids?: Array<string> | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Query the attributes with a fuzzy search on display name and description.
     */
    query?: string | null | undefined;
    /**
     * Search for attributes with a case insensitive match on the attribute value which is the attribute name.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const SearchAttributeValuesRequest$inboundSchema: z.ZodType<SearchAttributeValuesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAttributeValuesRequest$Outbound = {
    attributeTypeIds?: Array<string> | null | undefined;
    excludeIds?: Array<string> | null | undefined;
    ids?: Array<string> | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const SearchAttributeValuesRequest$outboundSchema: z.ZodType<SearchAttributeValuesRequest$Outbound, z.ZodTypeDef, SearchAttributeValuesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAttributeValuesRequest$ {
    /** @deprecated use `SearchAttributeValuesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAttributeValuesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAttributeValuesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAttributeValuesRequest$Outbound, z.ZodTypeDef, SearchAttributeValuesRequest>;
    /** @deprecated use `SearchAttributeValuesRequest$Outbound` instead. */
    type Outbound = SearchAttributeValuesRequest$Outbound;
}
export declare function searchAttributeValuesRequestToJSON(searchAttributeValuesRequest: SearchAttributeValuesRequest): string;
export declare function searchAttributeValuesRequestFromJSON(jsonString: string): SafeParseResult<SearchAttributeValuesRequest, SDKValidationError>;
