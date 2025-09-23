import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExportServiceDeleteResponse message.
 */
export type ExportServiceDeleteResponse = {};
/** @internal */
export declare const ExportServiceDeleteResponse$inboundSchema: z.ZodType<ExportServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const ExportServiceDeleteResponse$outboundSchema: z.ZodType<ExportServiceDeleteResponse$Outbound, z.ZodTypeDef, ExportServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceDeleteResponse$ {
    /** @deprecated use `ExportServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceDeleteResponse$Outbound, z.ZodTypeDef, ExportServiceDeleteResponse>;
    /** @deprecated use `ExportServiceDeleteResponse$Outbound` instead. */
    type Outbound = ExportServiceDeleteResponse$Outbound;
}
export declare function exportServiceDeleteResponseToJSON(exportServiceDeleteResponse: ExportServiceDeleteResponse): string;
export declare function exportServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<ExportServiceDeleteResponse, SDKValidationError>;
