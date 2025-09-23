import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExporterInput, ExporterInput$Outbound } from "./exporterinput.js";
/**
 * The ExportServiceUpdateRequest message.
 */
export type ExportServiceUpdateRequest = {
    exporter?: ExporterInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceUpdateRequest$inboundSchema: z.ZodType<ExportServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceUpdateRequest$Outbound = {
    exporter?: ExporterInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceUpdateRequest$outboundSchema: z.ZodType<ExportServiceUpdateRequest$Outbound, z.ZodTypeDef, ExportServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceUpdateRequest$ {
    /** @deprecated use `ExportServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceUpdateRequest$Outbound, z.ZodTypeDef, ExportServiceUpdateRequest>;
    /** @deprecated use `ExportServiceUpdateRequest$Outbound` instead. */
    type Outbound = ExportServiceUpdateRequest$Outbound;
}
export declare function exportServiceUpdateRequestToJSON(exportServiceUpdateRequest: ExportServiceUpdateRequest): string;
export declare function exportServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<ExportServiceUpdateRequest, SDKValidationError>;
