import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementWithExpired, AppEntitlementWithExpired$Outbound } from "./appentitlementwithexpired.js";
/**
 * The SearchAppEntitlementsWithExpiredResponse message contains a list of results and a nextPageToken if applicable.
 */
export type SearchAppEntitlementsWithExpiredResponse = {
    /**
     * The list field.
     */
    list?: Array<AppEntitlementWithExpired> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppEntitlementsWithExpiredResponse$inboundSchema: z.ZodType<SearchAppEntitlementsWithExpiredResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppEntitlementsWithExpiredResponse$Outbound = {
    list?: Array<AppEntitlementWithExpired$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppEntitlementsWithExpiredResponse$outboundSchema: z.ZodType<SearchAppEntitlementsWithExpiredResponse$Outbound, z.ZodTypeDef, SearchAppEntitlementsWithExpiredResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppEntitlementsWithExpiredResponse$ {
    /** @deprecated use `SearchAppEntitlementsWithExpiredResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppEntitlementsWithExpiredResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppEntitlementsWithExpiredResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppEntitlementsWithExpiredResponse$Outbound, z.ZodTypeDef, SearchAppEntitlementsWithExpiredResponse>;
    /** @deprecated use `SearchAppEntitlementsWithExpiredResponse$Outbound` instead. */
    type Outbound = SearchAppEntitlementsWithExpiredResponse$Outbound;
}
export declare function searchAppEntitlementsWithExpiredResponseToJSON(searchAppEntitlementsWithExpiredResponse: SearchAppEntitlementsWithExpiredResponse): string;
export declare function searchAppEntitlementsWithExpiredResponseFromJSON(jsonString: string): SafeParseResult<SearchAppEntitlementsWithExpiredResponse, SDKValidationError>;
