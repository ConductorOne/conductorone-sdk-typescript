import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExportServiceListEventsResponse message.
 */
export type ExportServiceListEventsResponse = {
    /**
     * List contains an array of JSON OCSF events.
     */
    list?: Array<{
        [k: string]: any;
    }> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListEventsResponse$inboundSchema: z.ZodType<ExportServiceListEventsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceListEventsResponse$Outbound = {
    list?: Array<{
        [k: string]: any;
    }> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListEventsResponse$outboundSchema: z.ZodType<ExportServiceListEventsResponse$Outbound, z.ZodTypeDef, ExportServiceListEventsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceListEventsResponse$ {
    /** @deprecated use `ExportServiceListEventsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceListEventsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceListEventsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceListEventsResponse$Outbound, z.ZodTypeDef, ExportServiceListEventsResponse>;
    /** @deprecated use `ExportServiceListEventsResponse$Outbound` instead. */
    type Outbound = ExportServiceListEventsResponse$Outbound;
}
export declare function exportServiceListEventsResponseToJSON(exportServiceListEventsResponse: ExportServiceListEventsResponse): string;
export declare function exportServiceListEventsResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceListEventsResponse, SDKValidationError>;
