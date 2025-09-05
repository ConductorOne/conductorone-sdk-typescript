import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Exporter, Exporter$Outbound } from "./exporter.js";
/**
 * The ExportServiceCreateResponse message.
 */
export type ExportServiceCreateResponse = {
    exporter?: Exporter | null | undefined;
};
/** @internal */
export declare const ExportServiceCreateResponse$inboundSchema: z.ZodType<ExportServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceCreateResponse$Outbound = {
    exporter?: Exporter$Outbound | null | undefined;
};
/** @internal */
export declare const ExportServiceCreateResponse$outboundSchema: z.ZodType<ExportServiceCreateResponse$Outbound, z.ZodTypeDef, ExportServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceCreateResponse$ {
    /** @deprecated use `ExportServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceCreateResponse$Outbound, z.ZodTypeDef, ExportServiceCreateResponse>;
    /** @deprecated use `ExportServiceCreateResponse$Outbound` instead. */
    type Outbound = ExportServiceCreateResponse$Outbound;
}
export declare function exportServiceCreateResponseToJSON(exportServiceCreateResponse: ExportServiceCreateResponse): string;
export declare function exportServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceCreateResponse, SDKValidationError>;
