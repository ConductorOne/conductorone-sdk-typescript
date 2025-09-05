import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExportToDatasource, ExportToDatasource$Outbound } from "./exporttodatasource.js";
/**
 * The state field.
 */
export declare const ExporterState: {
    readonly ExportStateUnspecified: "EXPORT_STATE_UNSPECIFIED";
    readonly ExportStateExporting: "EXPORT_STATE_EXPORTING";
    readonly ExportStateWaiting: "EXPORT_STATE_WAITING";
    readonly ExportStateError: "EXPORT_STATE_ERROR";
};
/**
 * The state field.
 */
export type ExporterState = OpenEnum<typeof ExporterState>;
/**
 * The Exporter message.
 *
 * @remarks
 *
 * This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
 *   - datasource
 */
export type Exporter = {
    createdAt?: Date | null | undefined;
    datasource?: ExportToDatasource | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The displayName field.
     */
    displayName?: string | null | undefined;
    /**
     * The exportId field.
     */
    exportId?: string | null | undefined;
    /**
     * The state field.
     */
    state?: ExporterState | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * we've synchorized this far
     */
    watermarkEventId?: string | null | undefined;
};
/** @internal */
export declare const ExporterState$inboundSchema: z.ZodType<ExporterState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ExporterState$outboundSchema: z.ZodType<ExporterState, z.ZodTypeDef, ExporterState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExporterState$ {
    /** @deprecated use `ExporterState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExporterState, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExporterState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExporterState, z.ZodTypeDef, ExporterState>;
}
/** @internal */
export declare const Exporter$inboundSchema: z.ZodType<Exporter, z.ZodTypeDef, unknown>;
/** @internal */
export type Exporter$Outbound = {
    createdAt?: string | null | undefined;
    datasource?: ExportToDatasource$Outbound | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    exportId?: string | null | undefined;
    state?: string | null | undefined;
    updatedAt?: string | null | undefined;
    watermarkEventId?: string | null | undefined;
};
/** @internal */
export declare const Exporter$outboundSchema: z.ZodType<Exporter$Outbound, z.ZodTypeDef, Exporter>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Exporter$ {
    /** @deprecated use `Exporter$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Exporter, z.ZodTypeDef, unknown>;
    /** @deprecated use `Exporter$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Exporter$Outbound, z.ZodTypeDef, Exporter>;
    /** @deprecated use `Exporter$Outbound` instead. */
    type Outbound = Exporter$Outbound;
}
export declare function exporterToJSON(exporter: Exporter): string;
export declare function exporterFromJSON(jsonString: string): SafeParseResult<Exporter, SDKValidationError>;
