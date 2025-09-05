import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExportServiceListEventsRequest message.
 */
export type ExportServiceListEventsRequest = {
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListEventsRequest$inboundSchema: z.ZodType<ExportServiceListEventsRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceListEventsRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceListEventsRequest$outboundSchema: z.ZodType<ExportServiceListEventsRequest$Outbound, z.ZodTypeDef, ExportServiceListEventsRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceListEventsRequest$ {
    /** @deprecated use `ExportServiceListEventsRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceListEventsRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceListEventsRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceListEventsRequest$Outbound, z.ZodTypeDef, ExportServiceListEventsRequest>;
    /** @deprecated use `ExportServiceListEventsRequest$Outbound` instead. */
    type Outbound = ExportServiceListEventsRequest$Outbound;
}
export declare function exportServiceListEventsRequestToJSON(exportServiceListEventsRequest: ExportServiceListEventsRequest): string;
export declare function exportServiceListEventsRequestFromJSON(jsonString: string): SafeParseResult<ExportServiceListEventsRequest, SDKValidationError>;
