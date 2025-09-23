import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response body. Status code indicates success.
 */
export type AppActionsServiceGenerateReportResponse = {};
/** @internal */
export declare const AppActionsServiceGenerateReportResponse$inboundSchema: z.ZodType<AppActionsServiceGenerateReportResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppActionsServiceGenerateReportResponse$Outbound = {};
/** @internal */
export declare const AppActionsServiceGenerateReportResponse$outboundSchema: z.ZodType<AppActionsServiceGenerateReportResponse$Outbound, z.ZodTypeDef, AppActionsServiceGenerateReportResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppActionsServiceGenerateReportResponse$ {
    /** @deprecated use `AppActionsServiceGenerateReportResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppActionsServiceGenerateReportResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppActionsServiceGenerateReportResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppActionsServiceGenerateReportResponse$Outbound, z.ZodTypeDef, AppActionsServiceGenerateReportResponse>;
    /** @deprecated use `AppActionsServiceGenerateReportResponse$Outbound` instead. */
    type Outbound = AppActionsServiceGenerateReportResponse$Outbound;
}
export declare function appActionsServiceGenerateReportResponseToJSON(appActionsServiceGenerateReportResponse: AppActionsServiceGenerateReportResponse): string;
export declare function appActionsServiceGenerateReportResponseFromJSON(jsonString: string): SafeParseResult<AppActionsServiceGenerateReportResponse, SDKValidationError>;
