import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
import { TaskRef, TaskRef$Outbound } from "./taskref.js";
import { TaskTypeInput, TaskTypeInput$Outbound } from "./tasktypeinput.js";
export declare const AccountTypes: {
    readonly AppUserTypeUnspecified: "APP_USER_TYPE_UNSPECIFIED";
    readonly AppUserTypeUser: "APP_USER_TYPE_USER";
    readonly AppUserTypeServiceAccount: "APP_USER_TYPE_SERVICE_ACCOUNT";
    readonly AppUserTypeSystemAccount: "APP_USER_TYPE_SYSTEM_ACCOUNT";
};
export type AccountTypes = OpenEnum<typeof AccountTypes>;
/**
 * Search tasks that have this type of step as the current step.
 */
export declare const CurrentStep: {
    readonly TaskSearchCurrentStepUnspecified: "TASK_SEARCH_CURRENT_STEP_UNSPECIFIED";
    readonly TaskSearchCurrentStepApproval: "TASK_SEARCH_CURRENT_STEP_APPROVAL";
    readonly TaskSearchCurrentStepProvision: "TASK_SEARCH_CURRENT_STEP_PROVISION";
};
/**
 * Search tasks that have this type of step as the current step.
 */
export type CurrentStep = OpenEnum<typeof CurrentStep>;
/**
 * Search tasks that are or are not emergency access.
 */
export declare const EmergencyStatus: {
    readonly Unspecified: "UNSPECIFIED";
    readonly All: "ALL";
    readonly NonEmergency: "NON_EMERGENCY";
    readonly Emergency: "EMERGENCY";
};
/**
 * Search tasks that are or are not emergency access.
 */
export type EmergencyStatus = OpenEnum<typeof EmergencyStatus>;
/**
 * Sort tasks in a specific order.
 */
export declare const SortBy: {
    readonly TaskSearchSortByUnspecified: "TASK_SEARCH_SORT_BY_UNSPECIFIED";
    readonly TaskSearchSortByAccount: "TASK_SEARCH_SORT_BY_ACCOUNT";
    readonly TaskSearchSortByResource: "TASK_SEARCH_SORT_BY_RESOURCE";
    readonly TaskSearchSortByAccountOwner: "TASK_SEARCH_SORT_BY_ACCOUNT_OWNER";
    readonly TaskSearchSortByReverseTicketId: "TASK_SEARCH_SORT_BY_REVERSE_TICKET_ID";
    readonly TaskSearchSortByTicketId: "TASK_SEARCH_SORT_BY_TICKET_ID";
    readonly TaskSearchSortByCreatedAt: "TASK_SEARCH_SORT_BY_CREATED_AT";
    readonly TaskSearchSortByReverseCreatedAt: "TASK_SEARCH_SORT_BY_REVERSE_CREATED_AT";
};
/**
 * Sort tasks in a specific order.
 */
export type SortBy = OpenEnum<typeof SortBy>;
export declare const StepApprovalTypes: {
    readonly StepApprovalTypeUnspecified: "STEP_APPROVAL_TYPE_UNSPECIFIED";
    readonly StepApprovalTypeUsers: "STEP_APPROVAL_TYPE_USERS";
    readonly StepApprovalTypeManager: "STEP_APPROVAL_TYPE_MANAGER";
    readonly StepApprovalTypeAppOwners: "STEP_APPROVAL_TYPE_APP_OWNERS";
    readonly StepApprovalTypeGroup: "STEP_APPROVAL_TYPE_GROUP";
    readonly StepApprovalTypeSelf: "STEP_APPROVAL_TYPE_SELF";
    readonly StepApprovalTypeEntitlementOwners: "STEP_APPROVAL_TYPE_ENTITLEMENT_OWNERS";
    readonly StepApprovalTypeExpression: "STEP_APPROVAL_TYPE_EXPRESSION";
    readonly StepApprovalTypeWebhook: "STEP_APPROVAL_TYPE_WEBHOOK";
    readonly StepApprovalTypeResourceOwners: "STEP_APPROVAL_TYPE_RESOURCE_OWNERS";
    readonly StepApprovalTypeAgent: "STEP_APPROVAL_TYPE_AGENT";
};
export type StepApprovalTypes = OpenEnum<typeof StepApprovalTypes>;
export declare const TaskStates: {
    readonly TaskStateUnspecified: "TASK_STATE_UNSPECIFIED";
    readonly TaskStateOpen: "TASK_STATE_OPEN";
    readonly TaskStateClosed: "TASK_STATE_CLOSED";
};
export type TaskStates = OpenEnum<typeof TaskStates>;
/**
 * Search for tasks based on a plethora filters.
 */
export type TaskSearchRequest = {
    /**
     * Search tasks that belong to any of the access reviews included in this list.
     */
    accessReviewIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these account owners.
     */
    accountOwnerIds?: Array<string> | null | undefined;
    /**
     * The accountTypes field.
     */
    accountTypes?: Array<AccountTypes> | null | undefined;
    /**
     * Search tasks that have this actor ID.
     */
    actorId?: string | null | undefined;
    /**
     * Search tasks that have any of these app entitlement IDs.
     */
    appEntitlementIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these app resource IDs.
     */
    appResourceIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these app resource type IDs.
     */
    appResourceTypeIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these app users as subjects.
     */
    appUserSubjectIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these apps as targets.
     */
    applicationIds?: Array<string> | null | undefined;
    /**
     * Search tasks that are currently assigned to this user, or that are closed and were previously approved by this user.
     */
    assignedOrStepApproverUserId?: string | null | undefined;
    /**
     * Search tasks by  List of UserIDs which are currently assigned these Tasks
     */
    assigneesInIds?: Array<string> | null | undefined;
    createdAfter?: Date | null | undefined;
    createdBefore?: Date | null | undefined;
    /**
     * Search tasks that have this type of step as the current step.
     */
    currentStep?: CurrentStep | null | undefined;
    /**
     * Search tasks that are or are not emergency access.
     */
    emergencyStatus?: EmergencyStatus | null | undefined;
    /**
     * Search tasks that do not have any of these app entitlement IDs.
     */
    excludeAppEntitlementIds?: Array<string> | null | undefined;
    /**
     * Search tasks that do not have any of these app resource type IDs.
     */
    excludeAppResourceTypeIds?: Array<string> | null | undefined;
    /**
     * Exclude Specific TaskIDs from this serach result.
     */
    excludeIds?: Array<string> | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * Whether or not to include deleted tasks.
     */
    includeDeleted?: boolean | null | undefined;
    /**
     * Search tasks where the user would see this task in the My Work section
     */
    myWorkUserIds?: Array<string> | null | undefined;
    olderThanDuration?: string | null | undefined;
    /**
     * Search tasks that were created by any of the users in this array.
     */
    openerIds?: Array<string> | null | undefined;
    /**
     * Search tasks that were opened by this user, or that the user is the subject of.
     */
    openerOrSubjectUserId?: string | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * Search tasks that were acted on by any of these users.
     */
    previouslyActedOnIds?: Array<string> | null | undefined;
    /**
     * Fuzzy search tasks by display name or description. Also can search by numeric ID.
     */
    query?: string | null | undefined;
    /**
     * Query tasks by display name, description, or numeric ID.
     */
    refs?: Array<TaskRef> | null | undefined;
    /**
     * Sort tasks in a specific order.
     */
    sortBy?: SortBy | null | undefined;
    /**
     * Search tasks that have a current policy step of this type
     */
    stepApprovalTypes?: Array<StepApprovalTypes> | null | undefined;
    /**
     * Search tasks where these users are the subject.
     */
    subjectIds?: Array<string> | null | undefined;
    /**
     * Search tasks with this task state.
     */
    taskStates?: Array<TaskStates> | null | undefined;
    /**
     * Search tasks with this task type. This is a oneOf, and needs an object, which can be empty, to sort.
     */
    taskTypes?: Array<TaskTypeInput> | null | undefined;
    /**
     * The userEmploymentStatuses field.
     */
    userEmploymentStatuses?: Array<string> | null | undefined;
};
/** @internal */
export declare const AccountTypes$inboundSchema: z.ZodType<AccountTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const AccountTypes$outboundSchema: z.ZodType<AccountTypes, z.ZodTypeDef, AccountTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AccountTypes$ {
    /** @deprecated use `AccountTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AccountTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `AccountTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AccountTypes, z.ZodTypeDef, AccountTypes>;
}
/** @internal */
export declare const CurrentStep$inboundSchema: z.ZodType<CurrentStep, z.ZodTypeDef, unknown>;
/** @internal */
export declare const CurrentStep$outboundSchema: z.ZodType<CurrentStep, z.ZodTypeDef, CurrentStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CurrentStep$ {
    /** @deprecated use `CurrentStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CurrentStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `CurrentStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CurrentStep, z.ZodTypeDef, CurrentStep>;
}
/** @internal */
export declare const EmergencyStatus$inboundSchema: z.ZodType<EmergencyStatus, z.ZodTypeDef, unknown>;
/** @internal */
export declare const EmergencyStatus$outboundSchema: z.ZodType<EmergencyStatus, z.ZodTypeDef, EmergencyStatus>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EmergencyStatus$ {
    /** @deprecated use `EmergencyStatus$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EmergencyStatus, z.ZodTypeDef, unknown>;
    /** @deprecated use `EmergencyStatus$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EmergencyStatus, z.ZodTypeDef, EmergencyStatus>;
}
/** @internal */
export declare const SortBy$inboundSchema: z.ZodType<SortBy, z.ZodTypeDef, unknown>;
/** @internal */
export declare const SortBy$outboundSchema: z.ZodType<SortBy, z.ZodTypeDef, SortBy>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SortBy$ {
    /** @deprecated use `SortBy$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SortBy, z.ZodTypeDef, unknown>;
    /** @deprecated use `SortBy$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SortBy, z.ZodTypeDef, SortBy>;
}
/** @internal */
export declare const StepApprovalTypes$inboundSchema: z.ZodType<StepApprovalTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const StepApprovalTypes$outboundSchema: z.ZodType<StepApprovalTypes, z.ZodTypeDef, StepApprovalTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepApprovalTypes$ {
    /** @deprecated use `StepApprovalTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepApprovalTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepApprovalTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepApprovalTypes, z.ZodTypeDef, StepApprovalTypes>;
}
/** @internal */
export declare const TaskStates$inboundSchema: z.ZodType<TaskStates, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskStates$outboundSchema: z.ZodType<TaskStates, z.ZodTypeDef, TaskStates>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskStates$ {
    /** @deprecated use `TaskStates$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskStates, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskStates$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskStates, z.ZodTypeDef, TaskStates>;
}
/** @internal */
export declare const TaskSearchRequest$inboundSchema: z.ZodType<TaskSearchRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskSearchRequest$Outbound = {
    accessReviewIds?: Array<string> | null | undefined;
    accountOwnerIds?: Array<string> | null | undefined;
    accountTypes?: Array<string> | null | undefined;
    actorId?: string | null | undefined;
    appEntitlementIds?: Array<string> | null | undefined;
    appResourceIds?: Array<string> | null | undefined;
    appResourceTypeIds?: Array<string> | null | undefined;
    appUserSubjectIds?: Array<string> | null | undefined;
    applicationIds?: Array<string> | null | undefined;
    assignedOrStepApproverUserId?: string | null | undefined;
    assigneesInIds?: Array<string> | null | undefined;
    createdAfter?: string | null | undefined;
    createdBefore?: string | null | undefined;
    currentStep?: string | null | undefined;
    emergencyStatus?: string | null | undefined;
    excludeAppEntitlementIds?: Array<string> | null | undefined;
    excludeAppResourceTypeIds?: Array<string> | null | undefined;
    excludeIds?: Array<string> | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    includeDeleted?: boolean | null | undefined;
    myWorkUserIds?: Array<string> | null | undefined;
    olderThanDuration?: string | null | undefined;
    openerIds?: Array<string> | null | undefined;
    openerOrSubjectUserId?: string | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    previouslyActedOnIds?: Array<string> | null | undefined;
    query?: string | null | undefined;
    refs?: Array<TaskRef$Outbound> | null | undefined;
    sortBy?: string | null | undefined;
    stepApprovalTypes?: Array<string> | null | undefined;
    subjectIds?: Array<string> | null | undefined;
    taskStates?: Array<string> | null | undefined;
    taskTypes?: Array<TaskTypeInput$Outbound> | null | undefined;
    userEmploymentStatuses?: Array<string> | null | undefined;
};
/** @internal */
export declare const TaskSearchRequest$outboundSchema: z.ZodType<TaskSearchRequest$Outbound, z.ZodTypeDef, TaskSearchRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskSearchRequest$ {
    /** @deprecated use `TaskSearchRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskSearchRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskSearchRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskSearchRequest$Outbound, z.ZodTypeDef, TaskSearchRequest>;
    /** @deprecated use `TaskSearchRequest$Outbound` instead. */
    type Outbound = TaskSearchRequest$Outbound;
}
export declare function taskSearchRequestToJSON(taskSearchRequest: TaskSearchRequest): string;
export declare function taskSearchRequestFromJSON(jsonString: string): SafeParseResult<TaskSearchRequest, SDKValidationError>;
