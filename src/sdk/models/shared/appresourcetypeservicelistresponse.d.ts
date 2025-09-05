import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceTypeView, AppResourceTypeView$Outbound } from "./appresourcetypeview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceTypeServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppResourceTypeServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type AppResourceTypeServiceListResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<AppResourceTypeServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppResourceTypeView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppResourceTypeServiceListResponseExpanded$inboundSchema: z.ZodType<AppResourceTypeServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppResourceTypeServiceListResponseExpanded$outboundSchema: z.ZodType<AppResourceTypeServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppResourceTypeServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeServiceListResponseExpanded$ {
    /** @deprecated use `AppResourceTypeServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppResourceTypeServiceListResponseExpanded>;
    /** @deprecated use `AppResourceTypeServiceListResponseExpanded$Outbound` instead. */
    type Outbound = AppResourceTypeServiceListResponseExpanded$Outbound;
}
export declare function appResourceTypeServiceListResponseExpandedToJSON(appResourceTypeServiceListResponseExpanded: AppResourceTypeServiceListResponseExpanded): string;
export declare function appResourceTypeServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppResourceTypeServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppResourceTypeServiceListResponse$inboundSchema: z.ZodType<AppResourceTypeServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceTypeServiceListResponse$Outbound = {
    expanded?: Array<AppResourceTypeServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppResourceTypeView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppResourceTypeServiceListResponse$outboundSchema: z.ZodType<AppResourceTypeServiceListResponse$Outbound, z.ZodTypeDef, AppResourceTypeServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceTypeServiceListResponse$ {
    /** @deprecated use `AppResourceTypeServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceTypeServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceTypeServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceTypeServiceListResponse$Outbound, z.ZodTypeDef, AppResourceTypeServiceListResponse>;
    /** @deprecated use `AppResourceTypeServiceListResponse$Outbound` instead. */
    type Outbound = AppResourceTypeServiceListResponse$Outbound;
}
export declare function appResourceTypeServiceListResponseToJSON(appResourceTypeServiceListResponse: AppResourceTypeServiceListResponse): string;
export declare function appResourceTypeServiceListResponseFromJSON(jsonString: string): SafeParseResult<AppResourceTypeServiceListResponse, SDKValidationError>;
