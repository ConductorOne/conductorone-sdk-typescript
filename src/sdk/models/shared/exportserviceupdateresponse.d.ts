import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Exporter, Exporter$Outbound } from "./exporter.js";
/**
 * The ExportServiceUpdateResponse message.
 */
export type ExportServiceUpdateResponse = {
    exporter?: Exporter | null | undefined;
};
/** @internal */
export declare const ExportServiceUpdateResponse$inboundSchema: z.ZodType<ExportServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceUpdateResponse$Outbound = {
    exporter?: Exporter$Outbound | null | undefined;
};
/** @internal */
export declare const ExportServiceUpdateResponse$outboundSchema: z.ZodType<ExportServiceUpdateResponse$Outbound, z.ZodTypeDef, ExportServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceUpdateResponse$ {
    /** @deprecated use `ExportServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceUpdateResponse$Outbound, z.ZodTypeDef, ExportServiceUpdateResponse>;
    /** @deprecated use `ExportServiceUpdateResponse$Outbound` instead. */
    type Outbound = ExportServiceUpdateResponse$Outbound;
}
export declare function exportServiceUpdateResponseToJSON(exportServiceUpdateResponse: ExportServiceUpdateResponse): string;
export declare function exportServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceUpdateResponse, SDKValidationError>;
