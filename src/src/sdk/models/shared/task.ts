/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExternalRef } from "./externalref";
import { PolicyInstance } from "./policyinstance";
import { TaskType } from "./tasktype";
import { Expose, Transform, Type } from "class-transformer";

export enum TaskActions {
    TaskActionTypeUnspecified = "TASK_ACTION_TYPE_UNSPECIFIED",
    TaskActionTypeClose = "TASK_ACTION_TYPE_CLOSE",
    TaskActionTypeApprove = "TASK_ACTION_TYPE_APPROVE",
    TaskActionTypeDeny = "TASK_ACTION_TYPE_DENY",
    TaskActionTypeComment = "TASK_ACTION_TYPE_COMMENT",
    TaskActionTypeDelete = "TASK_ACTION_TYPE_DELETE",
    TaskActionTypeReassign = "TASK_ACTION_TYPE_REASSIGN",
    TaskActionTypeRestart = "TASK_ACTION_TYPE_RESTART",
    TaskActionTypeSendReminder = "TASK_ACTION_TYPE_SEND_REMINDER",
    TaskActionTypeProvisionComplete = "TASK_ACTION_TYPE_PROVISION_COMPLETE",
    TaskActionTypeProvisionCancelled = "TASK_ACTION_TYPE_PROVISION_CANCELLED",
    TaskActionTypeProvisionErrored = "TASK_ACTION_TYPE_PROVISION_ERRORED",
    TaskActionTypeProvisionAppUserTargetCreated = "TASK_ACTION_TYPE_PROVISION_APP_USER_TARGET_CREATED",
    TaskActionTypeRollbackSkipped = "TASK_ACTION_TYPE_ROLLBACK_SKIPPED",
    TaskActionTypeHardReset = "TASK_ACTION_TYPE_HARD_RESET",
    TaskActionTypeEscalateToEmergencyAccess = "TASK_ACTION_TYPE_ESCALATE_TO_EMERGENCY_ACCESS",
    TaskActionTypeChangePolicy = "TASK_ACTION_TYPE_CHANGE_POLICY",
    TaskActionTypeRecalculateDenialFromBasePolicyDecisions = "TASK_ACTION_TYPE_RECALCULATE_DENIAL_FROM_BASE_POLICY_DECISIONS",
}

/**
 * The processing state of a task as defined by the `processing_enum`
 */
export enum TaskProcessing {
    TaskProcessingTypeUnspecified = "TASK_PROCESSING_TYPE_UNSPECIFIED",
    TaskProcessingTypeProcessing = "TASK_PROCESSING_TYPE_PROCESSING",
    TaskProcessingTypeWaiting = "TASK_PROCESSING_TYPE_WAITING",
    TaskProcessingTypeDone = "TASK_PROCESSING_TYPE_DONE",
}

/**
 * The current state of the task as defined by the `state_enum`
 */
export enum TaskState {
    TaskStateUnspecified = "TASK_STATE_UNSPECIFIED",
    TaskStateOpen = "TASK_STATE_OPEN",
    TaskStateClosed = "TASK_STATE_CLOSED",
}

/**
 * A fully-fleged task object. Includes its policy, references to external apps, its type, its processing history, and more.
 */
export class Task extends SpeakeasyBase {
    /**
     * A policy instance is an object that contains a reference to the policy it was created from, the currently executing step, the next steps, and the history of previously completed steps.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policy" })
    @Type(() => PolicyInstance)
    policyInstance?: PolicyInstance;

    /**
     * Task Type provides configuration for the type of task: certify, grant, or revoke
     *
     * @remarks
     *
     * This message contains a oneof named task_type. Only a single field of the following list may be set at a time:
     *   - grant
     *   - revoke
     *   - certify
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    @Type(() => TaskType)
    taskType?: TaskType;

    /**
     * The actions that can be performed on the task by the current user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actions" })
    actions?: TaskActions[];

    /**
     * The ID of the analysis object associated with this task created by an analysis workflow if the analysis feature is enabled for your tenant.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "analysisId" })
    analysisId?: string;

    /**
     * An array of `google.protobuf.Any` annotations with various base64-encoded data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "annotations" })
    annotations?: Record<string, any>[];

    /**
     * The count of comments.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "commentCount" })
    commentCount?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    /**
     * The ID of the user that is the creator of this task. This may not always match the userId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserId" })
    createdByUserId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * The description of the task. This is also known as justification.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The display name of the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * A field indicating whether this task was created using an emergency access flow, or escalated to emergency access. On task creation, it will also use the app entitlement's emergency policy when possible.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emergencyAccess" })
    emergencyAccess?: boolean;

    /**
     * An array of external references to the task. Historically that has been items like Jira task IDs. This is currently unused, but may come back in the future for integrations.
     */
    @SpeakeasyMetadata({ elemType: ExternalRef })
    @Expose({ name: "externalRefs" })
    @Type(() => ExternalRef)
    externalRefs?: ExternalRef[];

    /**
     * The ID of the task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * A human-usable numeric ID of a task which can be included in place of the fully qualified task id in path parmeters (but not search queries).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "numericId" })
    numericId?: string;

    /**
     * The policy generation id refers to the current policy's generation ID. This is changed when the policy is changed on a task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyGenerationId" })
    policyGenerationId?: string;

    /**
     * The processing state of a task as defined by the `processing_enum`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processing" })
    processing?: TaskProcessing;

    /**
     * The current state of the task as defined by the `state_enum`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state?: TaskState;

    /**
     * An array of IDs belonging to Identity Users that are allowed to review this step in a task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stepApproverIds" })
    stepApproverIds?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The ID of the user that is the target of this task. This may be empty if we're targeting a specific app user that has no known identity user.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
