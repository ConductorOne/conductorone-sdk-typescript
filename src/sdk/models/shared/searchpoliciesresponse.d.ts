import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
/**
 * The SearchPoliciesResponse message.
 */
export type SearchPoliciesResponse = {
    /**
     * The list field.
     */
    list?: Array<Policy> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPoliciesResponse$inboundSchema: z.ZodType<SearchPoliciesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchPoliciesResponse$Outbound = {
    list?: Array<Policy$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPoliciesResponse$outboundSchema: z.ZodType<SearchPoliciesResponse$Outbound, z.ZodTypeDef, SearchPoliciesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchPoliciesResponse$ {
    /** @deprecated use `SearchPoliciesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchPoliciesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchPoliciesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchPoliciesResponse$Outbound, z.ZodTypeDef, SearchPoliciesResponse>;
    /** @deprecated use `SearchPoliciesResponse$Outbound` instead. */
    type Outbound = SearchPoliciesResponse$Outbound;
}
export declare function searchPoliciesResponseToJSON(searchPoliciesResponse: SearchPoliciesResponse): string;
export declare function searchPoliciesResponseFromJSON(jsonString: string): SafeParseResult<SearchPoliciesResponse, SDKValidationError>;
