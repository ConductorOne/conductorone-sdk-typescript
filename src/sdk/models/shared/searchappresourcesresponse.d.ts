import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceView, AppResourceView$Outbound } from "./appresourceview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type SearchAppResourcesResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The SearchAppResourcesResponse message.
 */
export type SearchAppResourcesResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<SearchAppResourcesResponseExpanded> | null | undefined;
    /**
     * The list field.
     */
    list?: Array<AppResourceView> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppResourcesResponseExpanded$inboundSchema: z.ZodType<SearchAppResourcesResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppResourcesResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const SearchAppResourcesResponseExpanded$outboundSchema: z.ZodType<SearchAppResourcesResponseExpanded$Outbound, z.ZodTypeDef, SearchAppResourcesResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppResourcesResponseExpanded$ {
    /** @deprecated use `SearchAppResourcesResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppResourcesResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppResourcesResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppResourcesResponseExpanded$Outbound, z.ZodTypeDef, SearchAppResourcesResponseExpanded>;
    /** @deprecated use `SearchAppResourcesResponseExpanded$Outbound` instead. */
    type Outbound = SearchAppResourcesResponseExpanded$Outbound;
}
export declare function searchAppResourcesResponseExpandedToJSON(searchAppResourcesResponseExpanded: SearchAppResourcesResponseExpanded): string;
export declare function searchAppResourcesResponseExpandedFromJSON(jsonString: string): SafeParseResult<SearchAppResourcesResponseExpanded, SDKValidationError>;
/** @internal */
export declare const SearchAppResourcesResponse$inboundSchema: z.ZodType<SearchAppResourcesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAppResourcesResponse$Outbound = {
    expanded?: Array<SearchAppResourcesResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppResourceView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAppResourcesResponse$outboundSchema: z.ZodType<SearchAppResourcesResponse$Outbound, z.ZodTypeDef, SearchAppResourcesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAppResourcesResponse$ {
    /** @deprecated use `SearchAppResourcesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAppResourcesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAppResourcesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAppResourcesResponse$Outbound, z.ZodTypeDef, SearchAppResourcesResponse>;
    /** @deprecated use `SearchAppResourcesResponse$Outbound` instead. */
    type Outbound = SearchAppResourcesResponse$Outbound;
}
export declare function searchAppResourcesResponseToJSON(searchAppResourcesResponse: SearchAppResourcesResponse): string;
export declare function searchAppResourcesResponseFromJSON(jsonString: string): SafeParseResult<SearchAppResourcesResponse, SDKValidationError>;
