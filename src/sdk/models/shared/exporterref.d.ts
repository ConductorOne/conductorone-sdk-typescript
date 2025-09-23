import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExporterRef message.
 */
export type ExporterRef = {
    /**
     * The exportId field.
     */
    exportId?: string | null | undefined;
};
/** @internal */
export declare const ExporterRef$inboundSchema: z.ZodType<ExporterRef, z.ZodTypeDef, unknown>;
/** @internal */
export type ExporterRef$Outbound = {
    exportId?: string | null | undefined;
};
/** @internal */
export declare const ExporterRef$outboundSchema: z.ZodType<ExporterRef$Outbound, z.ZodTypeDef, ExporterRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExporterRef$ {
    /** @deprecated use `ExporterRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExporterRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExporterRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExporterRef$Outbound, z.ZodTypeDef, ExporterRef>;
    /** @deprecated use `ExporterRef$Outbound` instead. */
    type Outbound = ExporterRef$Outbound;
}
export declare function exporterRefToJSON(exporterRef: ExporterRef): string;
export declare function exporterRefFromJSON(jsonString: string): SafeParseResult<ExporterRef, SDKValidationError>;
