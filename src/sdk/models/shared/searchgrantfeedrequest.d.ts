import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
import { AppEntitlementUserBindingExpandHistoryMask, AppEntitlementUserBindingExpandHistoryMask$Outbound } from "./appentitlementuserbindingexpandhistorymask.js";
import { AppRef, AppRef$Outbound } from "./appref.js";
import { AppUserRef, AppUserRef$Outbound } from "./appuserref.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The SearchGrantFeedRequest message.
 */
export type SearchGrantFeedRequest = {
    after?: Date | null | undefined;
    /**
     * The list of app entitlements to limit the search to.
     */
    appEntitlementRefs?: Array<AppEntitlementRef> | null | undefined;
    /**
     * The list of apps to limit the search to.
     */
    appRefs?: Array<AppRef> | null | undefined;
    /**
     * The list of app users to limit the search to.
     */
    appUserRefs?: Array<AppUserRef> | null | undefined;
    before?: Date | null | undefined;
    expandMask?: AppEntitlementUserBindingExpandHistoryMask | null | undefined;
    /**
     * The pageSize where 10 <= pageSize <= 100, default 25.
     */
    pageSize?: number | null | undefined;
    /**
     * The page_token field for pagination.
     */
    pageToken?: string | null | undefined;
    /**
     * The list of C1 users to limit the search to.
     */
    userRefs?: Array<UserRef> | null | undefined;
};
/** @internal */
export declare const SearchGrantFeedRequest$inboundSchema: z.ZodType<SearchGrantFeedRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchGrantFeedRequest$Outbound = {
    after?: string | null | undefined;
    appEntitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
    appRefs?: Array<AppRef$Outbound> | null | undefined;
    appUserRefs?: Array<AppUserRef$Outbound> | null | undefined;
    before?: string | null | undefined;
    expandMask?: AppEntitlementUserBindingExpandHistoryMask$Outbound | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    userRefs?: Array<UserRef$Outbound> | null | undefined;
};
/** @internal */
export declare const SearchGrantFeedRequest$outboundSchema: z.ZodType<SearchGrantFeedRequest$Outbound, z.ZodTypeDef, SearchGrantFeedRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchGrantFeedRequest$ {
    /** @deprecated use `SearchGrantFeedRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchGrantFeedRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchGrantFeedRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchGrantFeedRequest$Outbound, z.ZodTypeDef, SearchGrantFeedRequest>;
    /** @deprecated use `SearchGrantFeedRequest$Outbound` instead. */
    type Outbound = SearchGrantFeedRequest$Outbound;
}
export declare function searchGrantFeedRequestToJSON(searchGrantFeedRequest: SearchGrantFeedRequest): string;
export declare function searchGrantFeedRequestFromJSON(jsonString: string): SafeParseResult<SearchGrantFeedRequest, SDKValidationError>;
