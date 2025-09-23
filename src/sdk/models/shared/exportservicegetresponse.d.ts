import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Exporter, Exporter$Outbound } from "./exporter.js";
/**
 * The ExportServiceGetResponse message contains the system log exporter object.
 */
export type ExportServiceGetResponse = {
    exporter?: Exporter | null | undefined;
};
/** @internal */
export declare const ExportServiceGetResponse$inboundSchema: z.ZodType<ExportServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceGetResponse$Outbound = {
    exporter?: Exporter$Outbound | null | undefined;
};
/** @internal */
export declare const ExportServiceGetResponse$outboundSchema: z.ZodType<ExportServiceGetResponse$Outbound, z.ZodTypeDef, ExportServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceGetResponse$ {
    /** @deprecated use `ExportServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceGetResponse$Outbound, z.ZodTypeDef, ExportServiceGetResponse>;
    /** @deprecated use `ExportServiceGetResponse$Outbound` instead. */
    type Outbound = ExportServiceGetResponse$Outbound;
}
export declare function exportServiceGetResponseToJSON(exportServiceGetResponse: ExportServiceGetResponse): string;
export declare function exportServiceGetResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceGetResponse, SDKValidationError>;
