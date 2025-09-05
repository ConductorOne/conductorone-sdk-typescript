import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppUserView, AppUserView$Outbound } from "./appuserview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppUserServiceSearchResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppUserServiceSearchResponse message.
 */
export type AppUserServiceSearchResponse = {
    /**
     * List of related objects.
     */
    expanded?: Array<AppUserServiceSearchResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppUserView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retrieved.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceSearchResponseExpanded$inboundSchema: z.ZodType<AppUserServiceSearchResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceSearchResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppUserServiceSearchResponseExpanded$outboundSchema: z.ZodType<AppUserServiceSearchResponseExpanded$Outbound, z.ZodTypeDef, AppUserServiceSearchResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceSearchResponseExpanded$ {
    /** @deprecated use `AppUserServiceSearchResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceSearchResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceSearchResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceSearchResponseExpanded$Outbound, z.ZodTypeDef, AppUserServiceSearchResponseExpanded>;
    /** @deprecated use `AppUserServiceSearchResponseExpanded$Outbound` instead. */
    type Outbound = AppUserServiceSearchResponseExpanded$Outbound;
}
export declare function appUserServiceSearchResponseExpandedToJSON(appUserServiceSearchResponseExpanded: AppUserServiceSearchResponseExpanded): string;
export declare function appUserServiceSearchResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppUserServiceSearchResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppUserServiceSearchResponse$inboundSchema: z.ZodType<AppUserServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserServiceSearchResponse$Outbound = {
    expanded?: Array<AppUserServiceSearchResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppUserView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppUserServiceSearchResponse$outboundSchema: z.ZodType<AppUserServiceSearchResponse$Outbound, z.ZodTypeDef, AppUserServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserServiceSearchResponse$ {
    /** @deprecated use `AppUserServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserServiceSearchResponse$Outbound, z.ZodTypeDef, AppUserServiceSearchResponse>;
    /** @deprecated use `AppUserServiceSearchResponse$Outbound` instead. */
    type Outbound = AppUserServiceSearchResponse$Outbound;
}
export declare function appUserServiceSearchResponseToJSON(appUserServiceSearchResponse: AppUserServiceSearchResponse): string;
export declare function appUserServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<AppUserServiceSearchResponse, SDKValidationError>;
