import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Search for app resources based on some filters.
 */
export type SearchAppResourceTypesRequest = {
    /**
     * A list of app IDs to restrict the search by.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * A list of app user IDs to restrict the search by.
     */
    appUserIds?: Array<string> | null | undefined;
    /**
     * Exact match on display name
     */
    displayName?: string | null | undefined;
    /**
     * A list of resource type IDs to exclude from the search.
     */
    excludeResourceTypeIds?: Array<string> | null | undefined;
    /**
     * A list of resource type trait IDs to exclude from the search.
     */
    excludeResourceTypeTraitIds?: Array<string> | null | undefined;
    /**
     * The pageSize where 10 <= pageSize <= 100, default 25.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Fuzzy search the display name of resource types.
     */
    query?: string | null | undefined;
    /**
     * A list of resource type IDs to restrict the search by.
     */
    resourceTypeIds?: Array<string> | null | undefined;
    /**
     * A list of resource type trait IDs to restrict the search by.
     */
    resourceTypeTraitIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchAppResourceTypesRequest$inboundSchema: z.ZodType<SearchAppResourceTypesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppResourceTypesRequest$Outbound = {
    appIds?: Array<string> | null | undefined;
    appUserIds?: Array<string> | null | undefined;
    displayName?: string | null | undefined;
    excludeResourceTypeIds?: Array<string> | null | undefined;
    excludeResourceTypeTraitIds?: Array<string> | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    query?: string | null | undefined;
    resourceTypeIds?: Array<string> | null | undefined;
    resourceTypeTraitIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const SearchAppResourceTypesRequest$outboundSchema: z.ZodType<SearchAppResourceTypesRequest$Outbound, z.ZodTypeDef, SearchAppResourceTypesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppResourceTypesRequest$ {
    /** @deprecated use `SearchAppResourceTypesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppResourceTypesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppResourceTypesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppResourceTypesRequest$Outbound, z.ZodTypeDef, SearchAppResourceTypesRequest>;
    /** @deprecated use `SearchAppResourceTypesRequest$Outbound` instead. */
    type Outbound = SearchAppResourceTypesRequest$Outbound;
}
export declare function searchAppResourceTypesRequestToJSON(searchAppResourceTypesRequest: SearchAppResourceTypesRequest): string;
export declare function searchAppResourceTypesRequestFromJSON(jsonString: string): SafeParseResult<SearchAppResourceTypesRequest, SDKValidationError>;
