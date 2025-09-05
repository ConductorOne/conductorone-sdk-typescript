import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The actionType field.
 */
export declare const ActionType: {
    readonly TaskActionTypeUnspecified: "TASK_ACTION_TYPE_UNSPECIFIED";
    readonly TaskActionTypeClose: "TASK_ACTION_TYPE_CLOSE";
    readonly TaskActionTypeApprove: "TASK_ACTION_TYPE_APPROVE";
    readonly TaskActionTypeDeny: "TASK_ACTION_TYPE_DENY";
    readonly TaskActionTypeComment: "TASK_ACTION_TYPE_COMMENT";
    readonly TaskActionTypeDelete: "TASK_ACTION_TYPE_DELETE";
    readonly TaskActionTypeReassign: "TASK_ACTION_TYPE_REASSIGN";
    readonly TaskActionTypeRestart: "TASK_ACTION_TYPE_RESTART";
    readonly TaskActionTypeSendReminder: "TASK_ACTION_TYPE_SEND_REMINDER";
    readonly TaskActionTypeProvisionComplete: "TASK_ACTION_TYPE_PROVISION_COMPLETE";
    readonly TaskActionTypeProvisionCancelled: "TASK_ACTION_TYPE_PROVISION_CANCELLED";
    readonly TaskActionTypeProvisionErrored: "TASK_ACTION_TYPE_PROVISION_ERRORED";
    readonly TaskActionTypeRollbackSkipped: "TASK_ACTION_TYPE_ROLLBACK_SKIPPED";
    readonly TaskActionTypeProvisionAppUserTargetCreated: "TASK_ACTION_TYPE_PROVISION_APP_USER_TARGET_CREATED";
    readonly TaskActionTypeHardReset: "TASK_ACTION_TYPE_HARD_RESET";
    readonly TaskActionTypeEscalateToEmergencyAccess: "TASK_ACTION_TYPE_ESCALATE_TO_EMERGENCY_ACCESS";
    readonly TaskActionTypeChangePolicy: "TASK_ACTION_TYPE_CHANGE_POLICY";
    readonly TaskActionTypeRecalculateDenialFromBasePolicyDecisions: "TASK_ACTION_TYPE_RECALCULATE_DENIAL_FROM_BASE_POLICY_DECISIONS";
    readonly TaskActionTypeSetInsightsAndRecommendation: "TASK_ACTION_TYPE_SET_INSIGHTS_AND_RECOMMENDATION";
    readonly TaskActionTypeSetAnalysisId: "TASK_ACTION_TYPE_SET_ANALYSIS_ID";
    readonly TaskActionTypeRecalculateApproversList: "TASK_ACTION_TYPE_RECALCULATE_APPROVERS_LIST";
    readonly TaskActionTypeProcessNow: "TASK_ACTION_TYPE_PROCESS_NOW";
    readonly TaskActionTypeApproveWithStepUp: "TASK_ACTION_TYPE_APPROVE_WITH_STEP_UP";
    readonly TaskActionTypeSkipStep: "TASK_ACTION_TYPE_SKIP_STEP";
    readonly TaskActionTypeRollbackCancelled: "TASK_ACTION_TYPE_ROLLBACK_CANCELLED";
    readonly TaskActionTypeUpdateRequestData: "TASK_ACTION_TYPE_UPDATE_REQUEST_DATA";
    readonly TaskActionTypeUpdateGrantDuration: "TASK_ACTION_TYPE_UPDATE_GRANT_DURATION";
};
/**
 * The actionType field.
 */
export type ActionType = OpenEnum<typeof ActionType>;
/**
 * The TaskAction message.
 */
export type TaskAction1 = {
    /**
     * The actionType field.
     */
    actionType?: ActionType | null | undefined;
    /**
     * The bulkActionId field.
     */
    bulkActionId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    /**
     * The policyStepId field.
     */
    policyStepId?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The userId field.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const ActionType$inboundSchema: z.ZodType<ActionType, z.ZodTypeDef, unknown>;
/** @internal */
export declare const ActionType$outboundSchema: z.ZodType<ActionType, z.ZodTypeDef, ActionType>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ActionType$ {
    /** @deprecated use `ActionType$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ActionType, z.ZodTypeDef, unknown>;
    /** @deprecated use `ActionType$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ActionType, z.ZodTypeDef, ActionType>;
}
/** @internal */
export declare const TaskAction1$inboundSchema: z.ZodType<TaskAction1, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAction1$Outbound = {
    actionType?: string | null | undefined;
    bulkActionId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    id?: string | null | undefined;
    policyStepId?: string | null | undefined;
    updatedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const TaskAction1$outboundSchema: z.ZodType<TaskAction1$Outbound, z.ZodTypeDef, TaskAction1>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAction1$ {
    /** @deprecated use `TaskAction1$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAction1, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAction1$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAction1$Outbound, z.ZodTypeDef, TaskAction1>;
    /** @deprecated use `TaskAction1$Outbound` instead. */
    type Outbound = TaskAction1$Outbound;
}
export declare function taskAction1ToJSON(taskAction1: TaskAction1): string;
export declare function taskAction1FromJSON(jsonString: string): SafeParseResult<TaskAction1, SDKValidationError>;
