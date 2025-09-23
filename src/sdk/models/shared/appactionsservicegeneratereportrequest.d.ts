import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty request body. Just placeholder for the generate app report request which uses URL values for input.
 */
export type AppActionsServiceGenerateReportRequest = {};
/** @internal */
export declare const AppActionsServiceGenerateReportRequest$inboundSchema: z.ZodType<AppActionsServiceGenerateReportRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppActionsServiceGenerateReportRequest$Outbound = {};
/** @internal */
export declare const AppActionsServiceGenerateReportRequest$outboundSchema: z.ZodType<AppActionsServiceGenerateReportRequest$Outbound, z.ZodTypeDef, AppActionsServiceGenerateReportRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppActionsServiceGenerateReportRequest$ {
    /** @deprecated use `AppActionsServiceGenerateReportRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppActionsServiceGenerateReportRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppActionsServiceGenerateReportRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppActionsServiceGenerateReportRequest$Outbound, z.ZodTypeDef, AppActionsServiceGenerateReportRequest>;
    /** @deprecated use `AppActionsServiceGenerateReportRequest$Outbound` instead. */
    type Outbound = AppActionsServiceGenerateReportRequest$Outbound;
}
export declare function appActionsServiceGenerateReportRequestToJSON(appActionsServiceGenerateReportRequest: AppActionsServiceGenerateReportRequest): string;
export declare function appActionsServiceGenerateReportRequestFromJSON(jsonString: string): SafeParseResult<AppActionsServiceGenerateReportRequest, SDKValidationError>;
