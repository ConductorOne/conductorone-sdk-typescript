import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementView, AppEntitlementView$Outbound } from "./appentitlementview.js";
import { Facets, Facets$Outbound } from "./facets.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppEntitlementSearchServiceSearchResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppEntitlementSearchServiceSearchResponse message.
 */
export type AppEntitlementSearchServiceSearchResponse = {
    /**
     * List of related objects.
     */
    expanded?: Array<AppEntitlementSearchServiceSearchResponseExpanded> | null | undefined;
    facets?: Facets | null | undefined;
    /**
     * List of app entitlement view objects.
     */
    list?: Array<AppEntitlementView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchResponseExpanded$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchResponseExpanded$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponseExpanded$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchResponseExpanded$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponseExpanded$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchResponseExpanded>;
    /** @deprecated use `AppEntitlementSearchServiceSearchResponseExpanded$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchResponseExpanded$Outbound;
}
export declare function appEntitlementSearchServiceSearchResponseExpandedToJSON(appEntitlementSearchServiceSearchResponseExpanded: AppEntitlementSearchServiceSearchResponseExpanded): string;
export declare function appEntitlementSearchServiceSearchResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppEntitlementSearchServiceSearchResponse$inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementSearchServiceSearchResponse$Outbound = {
    expanded?: Array<AppEntitlementSearchServiceSearchResponseExpanded$Outbound> | null | undefined;
    facets?: Facets$Outbound | null | undefined;
    list?: Array<AppEntitlementView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementSearchServiceSearchResponse$outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponse$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementSearchServiceSearchResponse$ {
    /** @deprecated use `AppEntitlementSearchServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementSearchServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementSearchServiceSearchResponse$Outbound, z.ZodTypeDef, AppEntitlementSearchServiceSearchResponse>;
    /** @deprecated use `AppEntitlementSearchServiceSearchResponse$Outbound` instead. */
    type Outbound = AppEntitlementSearchServiceSearchResponse$Outbound;
}
export declare function appEntitlementSearchServiceSearchResponseToJSON(appEntitlementSearchServiceSearchResponse: AppEntitlementSearchServiceSearchResponse): string;
export declare function appEntitlementSearchServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<AppEntitlementSearchServiceSearchResponse, SDKValidationError>;
