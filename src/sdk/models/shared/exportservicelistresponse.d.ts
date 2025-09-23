import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Exporter, Exporter$Outbound } from "./exporter.js";
/**
 * The ExportServiceListResponse message.
 */
export type ExportServiceListResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<Exporter> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListResponse$inboundSchema: z.ZodType<ExportServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceListResponse$Outbound = {
    list?: Array<Exporter$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListResponse$outboundSchema: z.ZodType<ExportServiceListResponse$Outbound, z.ZodTypeDef, ExportServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceListResponse$ {
    /** @deprecated use `ExportServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceListResponse$Outbound, z.ZodTypeDef, ExportServiceListResponse>;
    /** @deprecated use `ExportServiceListResponse$Outbound` instead. */
    type Outbound = ExportServiceListResponse$Outbound;
}
export declare function exportServiceListResponseToJSON(exportServiceListResponse: ExportServiceListResponse): string;
export declare function exportServiceListResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceListResponse, SDKValidationError>;
