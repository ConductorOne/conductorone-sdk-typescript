import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExportToDatasource, ExportToDatasource$Outbound } from "./exporttodatasource.js";
/**
 * The Exporter message.
 *
 * @remarks
 *
 * This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
 *   - datasource
 */
export type ExporterInput = {
    createdAt?: Date | null | undefined;
    datasource?: ExportToDatasource | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const ExporterInput$inboundSchema: z.ZodType<ExporterInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ExporterInput$Outbound = {
    createdAt?: string | null | undefined;
    datasource?: ExportToDatasource$Outbound | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const ExporterInput$outboundSchema: z.ZodType<ExporterInput$Outbound, z.ZodTypeDef, ExporterInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExporterInput$ {
    /** @deprecated use `ExporterInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExporterInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExporterInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExporterInput$Outbound, z.ZodTypeDef, ExporterInput>;
    /** @deprecated use `ExporterInput$Outbound` instead. */
    type Outbound = ExporterInput$Outbound;
}
export declare function exporterInputToJSON(exporterInput: ExporterInput): string;
export declare function exporterInputFromJSON(jsonString: string): SafeParseResult<ExporterInput, SDKValidationError>;
