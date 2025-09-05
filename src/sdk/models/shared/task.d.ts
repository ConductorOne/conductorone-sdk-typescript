import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ExternalRef, ExternalRef$Outbound } from "./externalref.js";
import { FormInput, FormInput$Outbound } from "./forminput.js";
import { PolicyInstance, PolicyInstance$Outbound } from "./policyinstance.js";
import { TaskType, TaskType$Outbound } from "./tasktype.js";
export declare const Actions: {
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
export type Actions = OpenEnum<typeof Actions>;
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Annotations = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The origin field.
 */
export declare const Origin: {
    readonly TaskOriginUnspecified: "TASK_ORIGIN_UNSPECIFIED";
    readonly TaskOriginProfileMembershipAutomation: "TASK_ORIGIN_PROFILE_MEMBERSHIP_AUTOMATION";
    readonly TaskOriginSlack: "TASK_ORIGIN_SLACK";
    readonly TaskOriginApi: "TASK_ORIGIN_API";
    readonly TaskOriginJira: "TASK_ORIGIN_JIRA";
    readonly TaskOriginCopilot: "TASK_ORIGIN_COPILOT";
    readonly TaskOriginWebapp: "TASK_ORIGIN_WEBAPP";
    readonly TaskOriginTimeRevoke: "TASK_ORIGIN_TIME_REVOKE";
    readonly TaskOriginNonUsageRevoke: "TASK_ORIGIN_NON_USAGE_REVOKE";
    readonly TaskOriginProfileMembershipManual: "TASK_ORIGIN_PROFILE_MEMBERSHIP_MANUAL";
    readonly TaskOriginProfileMembership: "TASK_ORIGIN_PROFILE_MEMBERSHIP";
    readonly TaskOriginAutomation: "TASK_ORIGIN_AUTOMATION";
    readonly TaskOriginAccessReview: "TASK_ORIGIN_ACCESS_REVIEW";
};
/**
 * The origin field.
 */
export type Origin = OpenEnum<typeof Origin>;
/**
 * The processing state of a task as defined by the `processing_enum`
 */
export declare const Processing: {
    readonly TaskProcessingTypeUnspecified: "TASK_PROCESSING_TYPE_UNSPECIFIED";
    readonly TaskProcessingTypeProcessing: "TASK_PROCESSING_TYPE_PROCESSING";
    readonly TaskProcessingTypeWaiting: "TASK_PROCESSING_TYPE_WAITING";
    readonly TaskProcessingTypeDone: "TASK_PROCESSING_TYPE_DONE";
};
/**
 * The processing state of a task as defined by the `processing_enum`
 */
export type Processing = OpenEnum<typeof Processing>;
/**
 * The recommendation field.
 */
export declare const Recommendation: {
    readonly InsightRecommendationUnspecified: "INSIGHT_RECOMMENDATION_UNSPECIFIED";
    readonly InsightRecommendationApprove: "INSIGHT_RECOMMENDATION_APPROVE";
    readonly InsightRecommendationDeny: "INSIGHT_RECOMMENDATION_DENY";
    readonly InsightRecommendationReview: "INSIGHT_RECOMMENDATION_REVIEW";
};
/**
 * The recommendation field.
 */
export type Recommendation = OpenEnum<typeof Recommendation>;
/**
 * The current state of the task as defined by the `state_enum`
 */
export declare const TaskState: {
    readonly TaskStateUnspecified: "TASK_STATE_UNSPECIFIED";
    readonly TaskStateOpen: "TASK_STATE_OPEN";
    readonly TaskStateClosed: "TASK_STATE_CLOSED";
};
/**
 * The current state of the task as defined by the `state_enum`
 */
export type TaskState = OpenEnum<typeof TaskState>;
/**
 * A fully-fleged task object. Includes its policy, references to external apps, its type, its processing history, and more.
 */
export type Task = {
    /**
     * The actions that can be performed on the task by the current user.
     */
    actions?: Array<Actions> | null | undefined;
    /**
     * The ID of the analysis object associated with this task created by an analysis workflow if the analysis feature is enabled for your tenant.
     */
    analysisId?: string | null | undefined;
    /**
     * An array of `google.protobuf.Any` annotations with various base64-encoded data.
     */
    annotations?: Array<Annotations> | null | undefined;
    /**
     * The count of comments.
     */
    commentCount?: number | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * The ID of the user that is the creator of this task. This may not always match the userId field.
     */
    createdByUserId?: string | null | undefined;
    data?: {
        [k: string]: any;
    } | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the task. This is also known as justification.
     */
    description?: string | null | undefined;
    /**
     * The display name of the task.
     */
    displayName?: string | null | undefined;
    /**
     * A field indicating whether this task was created using an emergency access flow, or escalated to emergency access. On task creation, it will also use the app entitlement's emergency policy when possible.
     */
    emergencyAccess?: boolean | null | undefined;
    /**
     * An array of external references to the task. Historically that has been items like Jira task IDs. This is currently unused, but may come back in the future for integrations.
     */
    externalRefs?: Array<ExternalRef> | null | undefined;
    form?: FormInput | null | undefined;
    /**
     * The ID of the task.
     */
    id?: string | null | undefined;
    /**
     * The insightIds field.
     */
    insightIds?: Array<string> | null | undefined;
    /**
     * A human-usable numeric ID of a task which can be included in place of the fully qualified task id in path parmeters (but not search queries).
     */
    numericId?: number | null | undefined;
    /**
     * The origin field.
     */
    origin?: Origin | null | undefined;
    policy?: PolicyInstance | null | undefined;
    /**
     * The policy generation id refers to the current policy's generation ID. This is changed when the policy is changed on a task.
     */
    policyGenerationId?: string | null | undefined;
    /**
     * The processing state of a task as defined by the `processing_enum`
     */
    processing?: Processing | null | undefined;
    /**
     * The recommendation field.
     */
    recommendation?: Recommendation | null | undefined;
    /**
     * The current state of the task as defined by the `state_enum`
     */
    state?: TaskState | null | undefined;
    /**
     * An array of IDs belonging to Identity Users that are allowed to review this step in a task.
     */
    stepApproverIds?: Array<string> | null | undefined;
    type?: TaskType | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The ID of the user that is the target of this task. This may be empty if we're targeting a specific app user that has no known identity user.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const Actions$inboundSchema: z.ZodType<Actions, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Actions$outboundSchema: z.ZodType<Actions, z.ZodTypeDef, Actions>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Actions$ {
    /** @deprecated use `Actions$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Actions, z.ZodTypeDef, unknown>;
    /** @deprecated use `Actions$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Actions, z.ZodTypeDef, Actions>;
}
/** @internal */
export declare const Annotations$inboundSchema: z.ZodType<Annotations, z.ZodTypeDef, unknown>;
/** @internal */
export type Annotations$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Annotations$outboundSchema: z.ZodType<Annotations$Outbound, z.ZodTypeDef, Annotations>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Annotations$ {
    /** @deprecated use `Annotations$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Annotations, z.ZodTypeDef, unknown>;
    /** @deprecated use `Annotations$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Annotations$Outbound, z.ZodTypeDef, Annotations>;
    /** @deprecated use `Annotations$Outbound` instead. */
    type Outbound = Annotations$Outbound;
}
export declare function annotationsToJSON(annotations: Annotations): string;
export declare function annotationsFromJSON(jsonString: string): SafeParseResult<Annotations, SDKValidationError>;
/** @internal */
export declare const Origin$inboundSchema: z.ZodType<Origin, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Origin$outboundSchema: z.ZodType<Origin, z.ZodTypeDef, Origin>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Origin$ {
    /** @deprecated use `Origin$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Origin, z.ZodTypeDef, unknown>;
    /** @deprecated use `Origin$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Origin, z.ZodTypeDef, Origin>;
}
/** @internal */
export declare const Processing$inboundSchema: z.ZodType<Processing, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Processing$outboundSchema: z.ZodType<Processing, z.ZodTypeDef, Processing>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Processing$ {
    /** @deprecated use `Processing$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Processing, z.ZodTypeDef, unknown>;
    /** @deprecated use `Processing$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Processing, z.ZodTypeDef, Processing>;
}
/** @internal */
export declare const Recommendation$inboundSchema: z.ZodType<Recommendation, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Recommendation$outboundSchema: z.ZodType<Recommendation, z.ZodTypeDef, Recommendation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Recommendation$ {
    /** @deprecated use `Recommendation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Recommendation, z.ZodTypeDef, unknown>;
    /** @deprecated use `Recommendation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Recommendation, z.ZodTypeDef, Recommendation>;
}
/** @internal */
export declare const TaskState$inboundSchema: z.ZodType<TaskState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskState$outboundSchema: z.ZodType<TaskState, z.ZodTypeDef, TaskState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskState$ {
    /** @deprecated use `TaskState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskState, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskState, z.ZodTypeDef, TaskState>;
}
/** @internal */
export declare const Task$inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown>;
/** @internal */
export type Task$Outbound = {
    actions?: Array<string> | null | undefined;
    analysisId?: string | null | undefined;
    annotations?: Array<Annotations$Outbound> | null | undefined;
    commentCount?: number | null | undefined;
    createdAt?: string | null | undefined;
    createdByUserId?: string | null | undefined;
    data?: {
        [k: string]: any;
    } | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    emergencyAccess?: boolean | null | undefined;
    externalRefs?: Array<ExternalRef$Outbound> | null | undefined;
    form?: FormInput$Outbound | null | undefined;
    id?: string | null | undefined;
    insightIds?: Array<string> | null | undefined;
    numericId?: string | null | undefined;
    origin?: string | null | undefined;
    policy?: PolicyInstance$Outbound | null | undefined;
    policyGenerationId?: string | null | undefined;
    processing?: string | null | undefined;
    recommendation?: string | null | undefined;
    state?: string | null | undefined;
    stepApproverIds?: Array<string> | null | undefined;
    type?: TaskType$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const Task$outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Task$ {
    /** @deprecated use `Task$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown>;
    /** @deprecated use `Task$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task>;
    /** @deprecated use `Task$Outbound` instead. */
    type Outbound = Task$Outbound;
}
export declare function taskToJSON(task: Task): string;
export declare function taskFromJSON(jsonString: string): SafeParseResult<Task, SDKValidationError>;
