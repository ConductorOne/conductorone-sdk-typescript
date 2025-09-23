import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The format field.
 */
export declare const Format: {
    readonly ExportFormatUnspecified: "EXPORT_FORMAT_UNSPECIFIED";
    readonly ExportFormatOcsfJsonZstd: "EXPORT_FORMAT_OCSF_JSON_ZSTD";
    readonly ExportFormatOcsfJsonGzip: "EXPORT_FORMAT_OCSF_JSON_GZIP";
};
/**
 * The format field.
 */
export type Format = OpenEnum<typeof Format>;
/**
 * The ExportToDatasource message.
 */
export type ExportToDatasource = {
    /**
     * The datasourceId field.
     */
    datasourceId?: string | null | undefined;
    /**
     * The format field.
     */
    format?: Format | null | undefined;
    /**
     * The prefix field.
     */
    prefix?: string | null | undefined;
};
/** @internal */
export declare const Format$inboundSchema: z.ZodType<Format, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Format$outboundSchema: z.ZodType<Format, z.ZodTypeDef, Format>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Format$ {
    /** @deprecated use `Format$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Format, z.ZodTypeDef, unknown>;
    /** @deprecated use `Format$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Format, z.ZodTypeDef, Format>;
}
/** @internal */
export declare const ExportToDatasource$inboundSchema: z.ZodType<ExportToDatasource, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportToDatasource$Outbound = {
    datasourceId?: string | null | undefined;
    format?: string | null | undefined;
    prefix?: string | null | undefined;
};
/** @internal */
export declare const ExportToDatasource$outboundSchema: z.ZodType<ExportToDatasource$Outbound, z.ZodTypeDef, ExportToDatasource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportToDatasource$ {
    /** @deprecated use `ExportToDatasource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportToDatasource, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportToDatasource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportToDatasource$Outbound, z.ZodTypeDef, ExportToDatasource>;
    /** @deprecated use `ExportToDatasource$Outbound` instead. */
    type Outbound = ExportToDatasource$Outbound;
}
export declare function exportToDatasourceToJSON(exportToDatasource: ExportToDatasource): string;
export declare function exportToDatasourceFromJSON(jsonString: string): SafeParseResult<ExportToDatasource, SDKValidationError>;
