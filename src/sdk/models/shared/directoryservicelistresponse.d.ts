import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DirectoryView, DirectoryView$Outbound } from "./directoryview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type DirectoryServiceListResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The DirectoryServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type DirectoryServiceListResponse = {
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    expanded?: Array<DirectoryServiceListResponseExpanded> | null | undefined;
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<DirectoryView> | null | undefined;
    /**
     * List of serialized related objects.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const DirectoryServiceListResponseExpanded$inboundSchema: z.ZodType<DirectoryServiceListResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceListResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const DirectoryServiceListResponseExpanded$outboundSchema: z.ZodType<DirectoryServiceListResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceListResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceListResponseExpanded$ {
    /** @deprecated use `DirectoryServiceListResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceListResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceListResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceListResponseExpanded$Outbound, z.ZodTypeDef, DirectoryServiceListResponseExpanded>;
    /** @deprecated use `DirectoryServiceListResponseExpanded$Outbound` instead. */
    type Outbound = DirectoryServiceListResponseExpanded$Outbound;
}
export declare function directoryServiceListResponseExpandedToJSON(directoryServiceListResponseExpanded: DirectoryServiceListResponseExpanded): string;
export declare function directoryServiceListResponseExpandedFromJSON(jsonString: string): SafeParseResult<DirectoryServiceListResponseExpanded, SDKValidationError>;
/** @internal */
export declare const DirectoryServiceListResponse$inboundSchema: z.ZodType<DirectoryServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceListResponse$Outbound = {
    expanded?: Array<DirectoryServiceListResponseExpanded$Outbound> | null | undefined;
    list?: Array<DirectoryView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const DirectoryServiceListResponse$outboundSchema: z.ZodType<DirectoryServiceListResponse$Outbound, z.ZodTypeDef, DirectoryServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceListResponse$ {
    /** @deprecated use `DirectoryServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceListResponse$Outbound, z.ZodTypeDef, DirectoryServiceListResponse>;
    /** @deprecated use `DirectoryServiceListResponse$Outbound` instead. */
    type Outbound = DirectoryServiceListResponse$Outbound;
}
export declare function directoryServiceListResponseToJSON(directoryServiceListResponse: DirectoryServiceListResponse): string;
export declare function directoryServiceListResponseFromJSON(jsonString: string): SafeParseResult<DirectoryServiceListResponse, SDKValidationError>;
