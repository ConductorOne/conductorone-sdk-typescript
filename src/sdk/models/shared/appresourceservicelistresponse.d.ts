import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceView, AppResourceView$Outbound } from "./appresourceview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type AppResourceServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The AppResourceServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type AppResourceServiceListResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<AppResourceServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppResourceView> | null | undefined;
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
export declare const AppResourceServiceListResponseExpanded$inboundSchema: z.ZodType<AppResourceServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const AppResourceServiceListResponseExpanded$outboundSchema: z.ZodType<AppResourceServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceListResponseExpanded$ {
    /** @deprecated use `AppResourceServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceListResponseExpanded$Outbound, z.ZodTypeDef, AppResourceServiceListResponseExpanded>;
    /** @deprecated use `AppResourceServiceListResponseExpanded$Outbound` instead. */
    type Outbound = AppResourceServiceListResponseExpanded$Outbound;
}
export declare function appResourceServiceListResponseExpandedToJSON(appResourceServiceListResponseExpanded: AppResourceServiceListResponseExpanded): string;
export declare function appResourceServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<AppResourceServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const AppResourceServiceListResponse$inboundSchema: z.ZodType<AppResourceServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppResourceServiceListResponse$Outbound = {
    expanded?: Array<AppResourceServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<AppResourceView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppResourceServiceListResponse$outboundSchema: z.ZodType<AppResourceServiceListResponse$Outbound, z.ZodTypeDef, AppResourceServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppResourceServiceListResponse$ {
    /** @deprecated use `AppResourceServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppResourceServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppResourceServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppResourceServiceListResponse$Outbound, z.ZodTypeDef, AppResourceServiceListResponse>;
    /** @deprecated use `AppResourceServiceListResponse$Outbound` instead. */
    type Outbound = AppResourceServiceListResponse$Outbound;
}
export declare function appResourceServiceListResponseToJSON(appResourceServiceListResponse: AppResourceServiceListResponse): string;
export declare function appResourceServiceListResponseFromJSON(jsonString: string): SafeParseResult<AppResourceServiceListResponse, SDKValidationError>;
