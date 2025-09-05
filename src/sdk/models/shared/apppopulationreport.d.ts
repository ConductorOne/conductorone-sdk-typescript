import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The state field tracks the state of the AppPopulationReport. This state field can be one of REPORT_STATE_PENDING, REPORT_STATE_UNSPECIFIED, REPORT_STATE_OK, REPORT_STATE_ERROR.
 */
export declare const AppPopulationReportState: {
    readonly ReportStateUnspecified: "REPORT_STATE_UNSPECIFIED";
    readonly ReportStatePending: "REPORT_STATE_PENDING";
    readonly ReportStateOk: "REPORT_STATE_OK";
    readonly ReportStateError: "REPORT_STATE_ERROR";
};
/**
 * The state field tracks the state of the AppPopulationReport. This state field can be one of REPORT_STATE_PENDING, REPORT_STATE_UNSPECIFIED, REPORT_STATE_OK, REPORT_STATE_ERROR.
 */
export type AppPopulationReportState = OpenEnum<typeof AppPopulationReportState>;
/**
 * The AppPopulationReport is a generated report for a specific app that gives details about the app's users. These details include what groups, roles, and other entitlements the users have access to.
 */
export type AppPopulationReport = {
    /**
     * The appId is the Id of the app which the report is generated for.
     */
    appId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The downloadUrl is the url used for downloading the AppPopulationReport.
     */
    downloadUrl?: string | null | undefined;
    /**
     * The hashes field contains the file hashes of the report.
     */
    hashes?: {
        [k: string]: string;
    } | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The state field tracks the state of the AppPopulationReport. This state field can be one of REPORT_STATE_PENDING, REPORT_STATE_UNSPECIFIED, REPORT_STATE_OK, REPORT_STATE_ERROR.
     */
    state?: AppPopulationReportState | null | undefined;
};
/** @internal */
export declare const AppPopulationReportState$inboundSchema: z.ZodType<AppPopulationReportState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppPopulationReportState$outboundSchema: z.ZodType<AppPopulationReportState, z.ZodTypeDef, AppPopulationReportState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppPopulationReportState$ {
    /** @deprecated use `AppPopulationReportState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppPopulationReportState, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppPopulationReportState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppPopulationReportState, z.ZodTypeDef, AppPopulationReportState>;
}
/** @internal */
export declare const AppPopulationReport$inboundSchema: z.ZodType<AppPopulationReport, z.ZodTypeDef, unknown>;
/** @internal */
export type AppPopulationReport$Outbound = {
    appId?: string | null | undefined;
    createdAt?: string | null | undefined;
    downloadUrl?: string | null | undefined;
    hashes?: {
        [k: string]: string;
    } | null | undefined;
    id?: string | null | undefined;
    state?: string | null | undefined;
};
/** @internal */
export declare const AppPopulationReport$outboundSchema: z.ZodType<AppPopulationReport$Outbound, z.ZodTypeDef, AppPopulationReport>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppPopulationReport$ {
    /** @deprecated use `AppPopulationReport$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppPopulationReport, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppPopulationReport$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppPopulationReport$Outbound, z.ZodTypeDef, AppPopulationReport>;
    /** @deprecated use `AppPopulationReport$Outbound` instead. */
    type Outbound = AppPopulationReport$Outbound;
}
export declare function appPopulationReportToJSON(appPopulationReport: AppPopulationReport): string;
export declare function appPopulationReportFromJSON(jsonString: string): SafeParseResult<AppPopulationReport, SDKValidationError>;
