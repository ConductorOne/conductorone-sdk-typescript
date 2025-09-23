import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExportServiceDeleteRequest message.
 */
export type ExportServiceDeleteRequest = {};
/** @internal */
export declare const ExportServiceDeleteRequest$inboundSchema: z.ZodType<ExportServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const ExportServiceDeleteRequest$outboundSchema: z.ZodType<ExportServiceDeleteRequest$Outbound, z.ZodTypeDef, ExportServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceDeleteRequest$ {
    /** @deprecated use `ExportServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceDeleteRequest$Outbound, z.ZodTypeDef, ExportServiceDeleteRequest>;
    /** @deprecated use `ExportServiceDeleteRequest$Outbound` instead. */
    type Outbound = ExportServiceDeleteRequest$Outbound;
}
export declare function exportServiceDeleteRequestToJSON(exportServiceDeleteRequest: ExportServiceDeleteRequest): string;
export declare function exportServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<ExportServiceDeleteRequest, SDKValidationError>;
