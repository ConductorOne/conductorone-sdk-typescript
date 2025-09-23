import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserView, AppEntitlementUserView$Outbound } from "./appentitlementuserview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ListAppEntitlementUsersResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ListAppEntitlementUsersResponse message contains a list of results and a nextPageToken if applicable.
 */
export type ListAppEntitlementUsersResponse = {
    /**
     * List of related objects
     */
    expanded?: Array<ListAppEntitlementUsersResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementUserView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppEntitlementUsersResponseExpanded$inboundSchema: z.ZodType<ListAppEntitlementUsersResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppEntitlementUsersResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ListAppEntitlementUsersResponseExpanded$outboundSchema: z.ZodType<ListAppEntitlementUsersResponseExpanded$Outbound, z.ZodTypeDef, ListAppEntitlementUsersResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppEntitlementUsersResponseExpanded$ {
    /** @deprecated use `ListAppEntitlementUsersResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppEntitlementUsersResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppEntitlementUsersResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppEntitlementUsersResponseExpanded$Outbound, z.ZodTypeDef, ListAppEntitlementUsersResponseExpanded>;
    /** @deprecated use `ListAppEntitlementUsersResponseExpanded$Outbound` instead. */
    type Outbound = ListAppEntitlementUsersResponseExpanded$Outbound;
}
export declare function listAppEntitlementUsersResponseExpandedToJSON(listAppEntitlementUsersResponseExpanded: ListAppEntitlementUsersResponseExpanded): string;
export declare function listAppEntitlementUsersResponseExpandedFromJSON(jsonString: string): SafeParseResult<ListAppEntitlementUsersResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ListAppEntitlementUsersResponse$inboundSchema: z.ZodType<ListAppEntitlementUsersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppEntitlementUsersResponse$Outbound = {
    expanded?: Array<ListAppEntitlementUsersResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementUserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppEntitlementUsersResponse$outboundSchema: z.ZodType<ListAppEntitlementUsersResponse$Outbound, z.ZodTypeDef, ListAppEntitlementUsersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppEntitlementUsersResponse$ {
    /** @deprecated use `ListAppEntitlementUsersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppEntitlementUsersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppEntitlementUsersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppEntitlementUsersResponse$Outbound, z.ZodTypeDef, ListAppEntitlementUsersResponse>;
    /** @deprecated use `ListAppEntitlementUsersResponse$Outbound` instead. */
    type Outbound = ListAppEntitlementUsersResponse$Outbound;
}
export declare function listAppEntitlementUsersResponseToJSON(listAppEntitlementUsersResponse: ListAppEntitlementUsersResponse): string;
export declare function listAppEntitlementUsersResponseFromJSON(jsonString: string): SafeParseResult<ListAppEntitlementUsersResponse, SDKValidationError>;
