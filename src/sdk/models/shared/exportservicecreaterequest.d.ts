import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExportToDatasource, ExportToDatasource$Outbound } from "./exporttodatasource.js";
/**
 * The ExportServiceCreateRequest message is used to create a new system log exporter.
 *
 * @remarks
 *
 * This message contains a oneof named export_to. Only a single field of the following list may be set at a time:
 *   - datasource
 */
export type ExportServiceCreateRequest = {
    datasource?: ExportToDatasource | null | undefined;
    /**
     * The display name of the new policy.
     */
    displayName?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceCreateRequest$inboundSchema: z.ZodType<ExportServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExportServiceCreateRequest$Outbound = {
    datasource?: ExportToDatasource$Outbound | null | undefined;
    displayName?: string | null | undefined;
};
/** @internal */
export declare const ExportServiceCreateRequest$outboundSchema: z.ZodType<ExportServiceCreateRequest$Outbound, z.ZodTypeDef, ExportServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExportServiceCreateRequest$ {
    /** @deprecated use `ExportServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExportServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExportServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExportServiceCreateRequest$Outbound, z.ZodTypeDef, ExportServiceCreateRequest>;
    /** @deprecated use `ExportServiceCreateRequest$Outbound` instead. */
    type Outbound = ExportServiceCreateRequest$Outbound;
}
export declare function exportServiceCreateRequestToJSON(exportServiceCreateRequest: ExportServiceCreateRequest): string;
export declare function exportServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<ExportServiceCreateRequest, SDKValidationError>;
