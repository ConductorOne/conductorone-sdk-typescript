import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The status field.
 */
export declare const BundleAutomationLastRunStateStatus: {
    readonly BundleAutomationRunStatusUnspecified: "BUNDLE_AUTOMATION_RUN_STATUS_UNSPECIFIED";
    readonly BundleAutomationRunStatusSuccess: "BUNDLE_AUTOMATION_RUN_STATUS_SUCCESS";
    readonly BundleAutomationRunStatusFailure: "BUNDLE_AUTOMATION_RUN_STATUS_FAILURE";
    readonly BundleAutomationRunStatusInProgress: "BUNDLE_AUTOMATION_RUN_STATUS_IN_PROGRESS";
    readonly BundleAutomationRunStatusWaitingForApproval: "BUNDLE_AUTOMATION_RUN_STATUS_WAITING_FOR_APPROVAL";
};
/**
 * The status field.
 */
export type BundleAutomationLastRunStateStatus = OpenEnum<typeof BundleAutomationLastRunStateStatus>;
/**
 * The BundleAutomationLastRunState message.
 */
export type BundleAutomationLastRunState = {
    /**
     * The errorMessage field.
     */
    errorMessage?: string | null | undefined;
    lastRunAt?: Date | null | undefined;
    /**
     * The status field.
     */
    status?: BundleAutomationLastRunStateStatus | null | undefined;
};
/** @internal */
export declare const BundleAutomationLastRunStateStatus$inboundSchema: z.ZodType<BundleAutomationLastRunStateStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BundleAutomationLastRunStateStatus$outboundSchema: z.ZodType<BundleAutomationLastRunStateStatus, z.ZodTypeDef, BundleAutomationLastRunStateStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomationLastRunStateStatus$ {
    /** @deprecated use `BundleAutomationLastRunStateStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomationLastRunStateStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomationLastRunStateStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomationLastRunStateStatus, z.ZodTypeDef, BundleAutomationLastRunStateStatus>;
}
/** @internal */
export declare const BundleAutomationLastRunState$inboundSchema: z.ZodType<BundleAutomationLastRunState, z.ZodTypeDef, unknown>;
/** @internal */
export type BundleAutomationLastRunState$Outbound = {
    errorMessage?: string | null | undefined;
    lastRunAt?: string | null | undefined;
    status?: string | null | undefined;
};
/** @internal */
export declare const BundleAutomationLastRunState$outboundSchema: z.ZodType<BundleAutomationLastRunState$Outbound, z.ZodTypeDef, BundleAutomationLastRunState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomationLastRunState$ {
    /** @deprecated use `BundleAutomationLastRunState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomationLastRunState, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomationLastRunState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomationLastRunState$Outbound, z.ZodTypeDef, BundleAutomationLastRunState>;
    /** @deprecated use `BundleAutomationLastRunState$Outbound` instead. */
    type Outbound = BundleAutomationLastRunState$Outbound;
}
export declare function bundleAutomationLastRunStateToJSON(bundleAutomationLastRunState: BundleAutomationLastRunState): string;
export declare function bundleAutomationLastRunStateFromJSON(jsonString: string): SafeParseResult<BundleAutomationLastRunState, SDKValidationError>;
