import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status field.
 */
export declare const AppEntitlementAutomationLastRunStatusStatus: {
    readonly AppEntitlementAutomationRunStatusUnspecified: "APP_ENTITLEMENT_AUTOMATION_RUN_STATUS_UNSPECIFIED";
    readonly AppEntitlementAutomationRunStatusSuccess: "APP_ENTITLEMENT_AUTOMATION_RUN_STATUS_SUCCESS";
    readonly AppEntitlementAutomationRunStatusFailed: "APP_ENTITLEMENT_AUTOMATION_RUN_STATUS_FAILED";
    readonly AppEntitlementAutomationRunStatusInProgress: "APP_ENTITLEMENT_AUTOMATION_RUN_STATUS_IN_PROGRESS";
};
/**
 * The status field.
 */
export type AppEntitlementAutomationLastRunStatusStatus = OpenEnum<typeof AppEntitlementAutomationLastRunStatusStatus>;
/**
 * The AppEntitlementAutomationLastRunStatus message.
 */
export type AppEntitlementAutomationLastRunStatus = {
    /**
     * The errorMessage field.
     */
    errorMessage?: string | null | undefined;
    lastCompletedAt?: Date | null | undefined;
    /**
     * The status field.
     */
    status?: AppEntitlementAutomationLastRunStatusStatus | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationLastRunStatusStatus$inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AppEntitlementAutomationLastRunStatusStatus$outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusStatus, z.ZodTypeDef, AppEntitlementAutomationLastRunStatusStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationLastRunStatusStatus$ {
    /** @deprecated use `AppEntitlementAutomationLastRunStatusStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationLastRunStatusStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusStatus, z.ZodTypeDef, AppEntitlementAutomationLastRunStatusStatus>;
}
/** @internal */
export declare const AppEntitlementAutomationLastRunStatus$inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatus, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationLastRunStatus$Outbound = {
    errorMessage?: string | null | undefined;
    lastCompletedAt?: string | null | undefined;
    status?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationLastRunStatus$outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatus$Outbound, z.ZodTypeDef, AppEntitlementAutomationLastRunStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationLastRunStatus$ {
    /** @deprecated use `AppEntitlementAutomationLastRunStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationLastRunStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatus$Outbound, z.ZodTypeDef, AppEntitlementAutomationLastRunStatus>;
    /** @deprecated use `AppEntitlementAutomationLastRunStatus$Outbound` instead. */
    type Outbound = AppEntitlementAutomationLastRunStatus$Outbound;
}
export declare function appEntitlementAutomationLastRunStatusToJSON(appEntitlementAutomationLastRunStatus: AppEntitlementAutomationLastRunStatus): string;
export declare function appEntitlementAutomationLastRunStatusFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationLastRunStatus, SDKValidationError>;
