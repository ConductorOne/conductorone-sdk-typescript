import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { AppEntitlementUserBindingExpandHistoryMask, AppEntitlementUserBindingExpandHistoryMask$Outbound } from "./appentitlementuserbindingexpandhistorymask.js";
import { AppUserRef, AppUserRef$Outbound } from "./appuserref.js";
/**
 * The SearchPastGrantsRequest message.
 */
export type SearchPastGrantsRequest = {
    /**
     * The appEntitlementRefs field.
     */
    appEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The appIds field.
     */
    appIds?: Array<string> | null | undefined;
    /**
     * The appUserRefs field.
     */
    appUserRefs?: Array<AppUserRef> | null | undefined;
    expandMask?: AppEntitlementUserBindingExpandHistoryMask | null | undefined;
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPastGrantsRequest$inboundSchema: z.ZodType<SearchPastGrantsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchPastGrantsRequest$Outbound = {
    appEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    appIds?: Array<string> | null | undefined;
    appUserRefs?: Array<AppUserRef$Outbound> | null | undefined;
    expandMask?: AppEntitlementUserBindingExpandHistoryMask$Outbound | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchPastGrantsRequest$outboundSchema: z.ZodType<SearchPastGrantsRequest$Outbound, z.ZodTypeDef, SearchPastGrantsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchPastGrantsRequest$ {
    /** @deprecated use `SearchPastGrantsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchPastGrantsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchPastGrantsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchPastGrantsRequest$Outbound, z.ZodTypeDef, SearchPastGrantsRequest>;
    /** @deprecated use `SearchPastGrantsRequest$Outbound` instead. */
    type Outbound = SearchPastGrantsRequest$Outbound;
}
export declare function searchPastGrantsRequestToJSON(searchPastGrantsRequest: SearchPastGrantsRequest): string;
export declare function searchPastGrantsRequestFromJSON(jsonString: string): SafeParseResult<SearchPastGrantsRequest, SDKValidationError>;
