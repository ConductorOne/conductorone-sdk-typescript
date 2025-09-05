import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyRef, PolicyRef$Outbound } from "./policyref.js";
/**
 * Search Apps by a few properties.
 */
export type SearchAppsRequest = {
    /**
     * A list of app IDs to restrict the search to.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * Search for apps with a case insensitive match on the display name.
     */
    displayName?: string | null | undefined;
    /**
     * A list of app IDs to remove from the results.
     */
    excludeAppIds?: Array<string> | null | undefined;
    /**
     * Only return apps which are directories
     */
    onlyDirectories?: boolean | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Search for apps that use any of these policies.
     */
    policyRefs?: Array<PolicyRef> | null | undefined;
    /**
     * Query the apps with a fuzzy search on display name and description.
     */
    query?: string | null | undefined;
};
/** @internal */
export declare const SearchAppsRequest$inboundSchema: z.ZodType<SearchAppsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppsRequest$Outbound = {
    appIds?: Array<string> | null | undefined;
    displayName?: string | null | undefined;
    excludeAppIds?: Array<string> | null | undefined;
    onlyDirectories?: boolean | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    policyRefs?: Array<PolicyRef$Outbound> | null | undefined;
    query?: string | null | undefined;
};
/** @internal */
export declare const SearchAppsRequest$outboundSchema: z.ZodType<SearchAppsRequest$Outbound, z.ZodTypeDef, SearchAppsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppsRequest$ {
    /** @deprecated use `SearchAppsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppsRequest$Outbound, z.ZodTypeDef, SearchAppsRequest>;
    /** @deprecated use `SearchAppsRequest$Outbound` instead. */
    type Outbound = SearchAppsRequest$Outbound;
}
export declare function searchAppsRequestToJSON(searchAppsRequest: SearchAppsRequest): string;
export declare function searchAppsRequestFromJSON(jsonString: string): SafeParseResult<SearchAppsRequest, SDKValidationError>;
