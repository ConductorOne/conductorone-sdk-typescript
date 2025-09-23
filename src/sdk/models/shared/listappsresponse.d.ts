import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { App, App$Outbound } from "./app.js";
/**
 * The ListAppsResponse message contains a list of results and a nextPageToken if applicable.
 */
export type ListAppsResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<App> | null | undefined;
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
export declare const ListAppsResponse$inboundSchema: z.ZodType<ListAppsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppsResponse$Outbound = {
    list?: Array<App$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppsResponse$outboundSchema: z.ZodType<ListAppsResponse$Outbound, z.ZodTypeDef, ListAppsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppsResponse$ {
    /** @deprecated use `ListAppsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppsResponse$Outbound, z.ZodTypeDef, ListAppsResponse>;
    /** @deprecated use `ListAppsResponse$Outbound` instead. */
    type Outbound = ListAppsResponse$Outbound;
}
export declare function listAppsResponseToJSON(listAppsResponse: ListAppsResponse): string;
export declare function listAppsResponseFromJSON(jsonString: string): SafeParseResult<ListAppsResponse, SDKValidationError>;
