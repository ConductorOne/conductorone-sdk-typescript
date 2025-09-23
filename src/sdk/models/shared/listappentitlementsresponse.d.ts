import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type ListAppEntitlementsResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The ListAppEntitlementsResponse message contains a list of results and a nextPageToken if applicable.
 */
export type ListAppEntitlementsResponse = {
    /**
     * List of related objects
     */
    expanded?: Array<ListAppEntitlementsResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppEntitlementView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppEntitlementsResponseExpanded$inboundSchema: z.ZodType<ListAppEntitlementsResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppEntitlementsResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const ListAppEntitlementsResponseExpanded$outboundSchema: z.ZodType<ListAppEntitlementsResponseExpanded$Outbound, z.ZodTypeDef, ListAppEntitlementsResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppEntitlementsResponseExpanded$ {
    /** @deprecated use `ListAppEntitlementsResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppEntitlementsResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppEntitlementsResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppEntitlementsResponseExpanded$Outbound, z.ZodTypeDef, ListAppEntitlementsResponseExpanded>;
    /** @deprecated use `ListAppEntitlementsResponseExpanded$Outbound` instead. */
    type Outbound = ListAppEntitlementsResponseExpanded$Outbound;
}
export declare function listAppEntitlementsResponseExpandedToJSON(listAppEntitlementsResponseExpanded: ListAppEntitlementsResponseExpanded): string;
export declare function listAppEntitlementsResponseExpandedFromJSON(jsonString: string): SafeParseResult<ListAppEntitlementsResponseExpanded, SDKValidationError>;
/** @internal */
export declare const ListAppEntitlementsResponse$inboundSchema: z.ZodType<ListAppEntitlementsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppEntitlementsResponse$Outbound = {
    expanded?: Array<ListAppEntitlementsResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppEntitlementView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppEntitlementsResponse$outboundSchema: z.ZodType<ListAppEntitlementsResponse$Outbound, z.ZodTypeDef, ListAppEntitlementsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppEntitlementsResponse$ {
    /** @deprecated use `ListAppEntitlementsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppEntitlementsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppEntitlementsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppEntitlementsResponse$Outbound, z.ZodTypeDef, ListAppEntitlementsResponse>;
    /** @deprecated use `ListAppEntitlementsResponse$Outbound` instead. */
    type Outbound = ListAppEntitlementsResponse$Outbound;
}
export declare function listAppEntitlementsResponseToJSON(listAppEntitlementsResponse: ListAppEntitlementsResponse): string;
export declare function listAppEntitlementsResponseFromJSON(jsonString: string): SafeParseResult<ListAppEntitlementsResponse, SDKValidationError>;
