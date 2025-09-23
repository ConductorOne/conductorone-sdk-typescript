import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppPopulationReport, AppPopulationReport$Outbound } from "./apppopulationreport.js";
/**
 * The AppReportServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export type AppReportServiceListResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<AppPopulationReport> | null | undefined;
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
export declare const AppReportServiceListResponse$inboundSchema: z.ZodType<AppReportServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppReportServiceListResponse$Outbound = {
    list?: Array<AppPopulationReport$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const AppReportServiceListResponse$outboundSchema: z.ZodType<AppReportServiceListResponse$Outbound, z.ZodTypeDef, AppReportServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppReportServiceListResponse$ {
    /** @deprecated use `AppReportServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppReportServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppReportServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppReportServiceListResponse$Outbound, z.ZodTypeDef, AppReportServiceListResponse>;
    /** @deprecated use `AppReportServiceListResponse$Outbound` instead. */
    type Outbound = AppReportServiceListResponse$Outbound;
}
export declare function appReportServiceListResponseToJSON(appReportServiceListResponse: AppReportServiceListResponse): string;
export declare function appReportServiceListResponseFromJSON(jsonString: string): SafeParseResult<AppReportServiceListResponse, SDKValidationError>;
