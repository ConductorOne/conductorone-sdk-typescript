/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TaskExpandMask, TaskExpandMask$ } from "./taskexpandmask";
import { TaskRef, TaskRef$ } from "./taskref";
import { TaskTypeInput, TaskTypeInput$ } from "./tasktypeinput";
import * as z from "zod";

/**
 * Search tasks that have this type of step as the current step.
 */
export enum CurrentStep {
    TaskSearchCurrentStepUnspecified = "TASK_SEARCH_CURRENT_STEP_UNSPECIFIED",
    TaskSearchCurrentStepApproval = "TASK_SEARCH_CURRENT_STEP_APPROVAL",
    TaskSearchCurrentStepProvision = "TASK_SEARCH_CURRENT_STEP_PROVISION",
}

/**
 * Search tasks that are or are not emergency access.
 */
export enum EmergencyStatus {
    Unspecified = "UNSPECIFIED",
    All = "ALL",
    NonEmergency = "NON_EMERGENCY",
    Emergency = "EMERGENCY",
}

/**
 * Sort tasks in a specific order.
 */
export enum SortBy {
    TaskSearchSortByUnspecified = "TASK_SEARCH_SORT_BY_UNSPECIFIED",
    TaskSearchSortByAccount = "TASK_SEARCH_SORT_BY_ACCOUNT",
    TaskSearchSortByResource = "TASK_SEARCH_SORT_BY_RESOURCE",
    TaskSearchSortByAccountOwner = "TASK_SEARCH_SORT_BY_ACCOUNT_OWNER",
    TaskSearchSortByReverseTicketId = "TASK_SEARCH_SORT_BY_REVERSE_TICKET_ID",
}

export enum TaskStates {
    TaskStateUnspecified = "TASK_STATE_UNSPECIFIED",
    TaskStateOpen = "TASK_STATE_OPEN",
    TaskStateClosed = "TASK_STATE_CLOSED",
}

/**
 * Search for tasks based on a plethora filters.
 */
export type TaskSearchRequest = {
    /**
     * The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.
     */
    taskExpandMask?: TaskExpandMask | undefined;
    /**
     * Search tasks that belong to any of the access reviews included in this list.
     */
    accessReviewIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have any of these account owners.
     */
    accountOwnerIds?: Array<string> | null | undefined;
    /**
     * Search tasks that have this actor ID.
     */
    actorId?: string | undefined;
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
     * Search tasks by  List of UserIDs which are currently assigned these Tasks
     */
    assigneesInIds?: Array<string> | null | undefined;
    createdAfter?: Date | undefined;
    createdBefore?: Date | undefined;
    /**
     * Search tasks that have this type of step as the current step.
     */
    currentStep?: CurrentStep | undefined;
    /**
     * Search tasks that are or are not emergency access.
     */
    emergencyStatus?: EmergencyStatus | undefined;
    /**
     * Search tasks that do not have any of these app entitlement IDs.
     */
    excludeAppEntitlementIds?: Array<string> | null | undefined;
    /**
     * Exclude Specific TaskIDs from this serach result.
     */
    excludeIds?: Array<string> | null | undefined;
    /**
     * Whether or not to include deleted tasks.
     */
    includeDeleted?: boolean | undefined;
    /**
     * Search tasks where the user would see this task in the My Work section
     */
    myWorkUserIds?: Array<string> | null | undefined;
    olderThanDuration?: string | undefined;
    /**
     * Search tasks that were created by any of the users in this array.
     */
    openerIds?: Array<string> | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | undefined;
    /**
     * Search tasks that were acted on by any of these users.
     */
    previouslyActedOnIds?: Array<string> | null | undefined;
    /**
     * Fuzzy search tasks by display name or description. Also can search by numeric ID.
     */
    query?: string | undefined;
    /**
     * Query tasks by display name, description, or numeric ID.
     */
    refs?: Array<TaskRef> | null | undefined;
    /**
     * Sort tasks in a specific order.
     */
    sortBy?: SortBy | undefined;
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
};

/** @internal */
export const CurrentStep$ = z.nativeEnum(CurrentStep);

/** @internal */
export const EmergencyStatus$ = z.nativeEnum(EmergencyStatus);

/** @internal */
export const SortBy$ = z.nativeEnum(SortBy);

/** @internal */
export const TaskStates$ = z.nativeEnum(TaskStates);

/** @internal */
export namespace TaskSearchRequest$ {
    export type Inbound = {
        TaskExpandMask?: TaskExpandMask$.Inbound | undefined;
        accessReviewIds?: Array<string> | null | undefined;
        accountOwnerIds?: Array<string> | null | undefined;
        actorId?: string | undefined;
        appEntitlementIds?: Array<string> | null | undefined;
        appResourceIds?: Array<string> | null | undefined;
        appResourceTypeIds?: Array<string> | null | undefined;
        appUserSubjectIds?: Array<string> | null | undefined;
        applicationIds?: Array<string> | null | undefined;
        assigneesInIds?: Array<string> | null | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        currentStep?: CurrentStep | undefined;
        emergencyStatus?: EmergencyStatus | undefined;
        excludeAppEntitlementIds?: Array<string> | null | undefined;
        excludeIds?: Array<string> | null | undefined;
        includeDeleted?: boolean | undefined;
        myWorkUserIds?: Array<string> | null | undefined;
        olderThanDuration?: string | undefined;
        openerIds?: Array<string> | null | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        previouslyActedOnIds?: Array<string> | null | undefined;
        query?: string | undefined;
        refs?: Array<TaskRef$.Inbound> | null | undefined;
        sortBy?: SortBy | undefined;
        subjectIds?: Array<string> | null | undefined;
        taskStates?: Array<TaskStates> | null | undefined;
        taskTypes?: Array<TaskTypeInput$.Inbound> | null | undefined;
    };

    export const inboundSchema: z.ZodType<TaskSearchRequest, z.ZodTypeDef, Inbound> = z
        .object({
            TaskExpandMask: TaskExpandMask$.inboundSchema.optional(),
            accessReviewIds: z.nullable(z.array(z.string())).optional(),
            accountOwnerIds: z.nullable(z.array(z.string())).optional(),
            actorId: z.string().optional(),
            appEntitlementIds: z.nullable(z.array(z.string())).optional(),
            appResourceIds: z.nullable(z.array(z.string())).optional(),
            appResourceTypeIds: z.nullable(z.array(z.string())).optional(),
            appUserSubjectIds: z.nullable(z.array(z.string())).optional(),
            applicationIds: z.nullable(z.array(z.string())).optional(),
            assigneesInIds: z.nullable(z.array(z.string())).optional(),
            createdAfter: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            createdBefore: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            currentStep: CurrentStep$.optional(),
            emergencyStatus: EmergencyStatus$.optional(),
            excludeAppEntitlementIds: z.nullable(z.array(z.string())).optional(),
            excludeIds: z.nullable(z.array(z.string())).optional(),
            includeDeleted: z.boolean().optional(),
            myWorkUserIds: z.nullable(z.array(z.string())).optional(),
            olderThanDuration: z.string().optional(),
            openerIds: z.nullable(z.array(z.string())).optional(),
            pageSize: z.number().int().optional(),
            pageToken: z.string().optional(),
            previouslyActedOnIds: z.nullable(z.array(z.string())).optional(),
            query: z.string().optional(),
            refs: z.nullable(z.array(TaskRef$.inboundSchema)).optional(),
            sortBy: SortBy$.optional(),
            subjectIds: z.nullable(z.array(z.string())).optional(),
            taskStates: z.nullable(z.array(TaskStates$)).optional(),
            taskTypes: z.nullable(z.array(TaskTypeInput$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.TaskExpandMask === undefined ? null : { taskExpandMask: v.TaskExpandMask }),
                ...(v.accessReviewIds === undefined
                    ? null
                    : { accessReviewIds: v.accessReviewIds }),
                ...(v.accountOwnerIds === undefined
                    ? null
                    : { accountOwnerIds: v.accountOwnerIds }),
                ...(v.actorId === undefined ? null : { actorId: v.actorId }),
                ...(v.appEntitlementIds === undefined
                    ? null
                    : { appEntitlementIds: v.appEntitlementIds }),
                ...(v.appResourceIds === undefined ? null : { appResourceIds: v.appResourceIds }),
                ...(v.appResourceTypeIds === undefined
                    ? null
                    : { appResourceTypeIds: v.appResourceTypeIds }),
                ...(v.appUserSubjectIds === undefined
                    ? null
                    : { appUserSubjectIds: v.appUserSubjectIds }),
                ...(v.applicationIds === undefined ? null : { applicationIds: v.applicationIds }),
                ...(v.assigneesInIds === undefined ? null : { assigneesInIds: v.assigneesInIds }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.currentStep === undefined ? null : { currentStep: v.currentStep }),
                ...(v.emergencyStatus === undefined
                    ? null
                    : { emergencyStatus: v.emergencyStatus }),
                ...(v.excludeAppEntitlementIds === undefined
                    ? null
                    : { excludeAppEntitlementIds: v.excludeAppEntitlementIds }),
                ...(v.excludeIds === undefined ? null : { excludeIds: v.excludeIds }),
                ...(v.includeDeleted === undefined ? null : { includeDeleted: v.includeDeleted }),
                ...(v.myWorkUserIds === undefined ? null : { myWorkUserIds: v.myWorkUserIds }),
                ...(v.olderThanDuration === undefined
                    ? null
                    : { olderThanDuration: v.olderThanDuration }),
                ...(v.openerIds === undefined ? null : { openerIds: v.openerIds }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pageToken === undefined ? null : { pageToken: v.pageToken }),
                ...(v.previouslyActedOnIds === undefined
                    ? null
                    : { previouslyActedOnIds: v.previouslyActedOnIds }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.refs === undefined ? null : { refs: v.refs }),
                ...(v.sortBy === undefined ? null : { sortBy: v.sortBy }),
                ...(v.subjectIds === undefined ? null : { subjectIds: v.subjectIds }),
                ...(v.taskStates === undefined ? null : { taskStates: v.taskStates }),
                ...(v.taskTypes === undefined ? null : { taskTypes: v.taskTypes }),
            };
        });

    export type Outbound = {
        TaskExpandMask?: TaskExpandMask$.Outbound | undefined;
        accessReviewIds?: Array<string> | null | undefined;
        accountOwnerIds?: Array<string> | null | undefined;
        actorId?: string | undefined;
        appEntitlementIds?: Array<string> | null | undefined;
        appResourceIds?: Array<string> | null | undefined;
        appResourceTypeIds?: Array<string> | null | undefined;
        appUserSubjectIds?: Array<string> | null | undefined;
        applicationIds?: Array<string> | null | undefined;
        assigneesInIds?: Array<string> | null | undefined;
        createdAfter?: string | undefined;
        createdBefore?: string | undefined;
        currentStep?: CurrentStep | undefined;
        emergencyStatus?: EmergencyStatus | undefined;
        excludeAppEntitlementIds?: Array<string> | null | undefined;
        excludeIds?: Array<string> | null | undefined;
        includeDeleted?: boolean | undefined;
        myWorkUserIds?: Array<string> | null | undefined;
        olderThanDuration?: string | undefined;
        openerIds?: Array<string> | null | undefined;
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        previouslyActedOnIds?: Array<string> | null | undefined;
        query?: string | undefined;
        refs?: Array<TaskRef$.Outbound> | null | undefined;
        sortBy?: SortBy | undefined;
        subjectIds?: Array<string> | null | undefined;
        taskStates?: Array<TaskStates> | null | undefined;
        taskTypes?: Array<TaskTypeInput$.Outbound> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskSearchRequest> = z
        .object({
            taskExpandMask: TaskExpandMask$.outboundSchema.optional(),
            accessReviewIds: z.nullable(z.array(z.string())).optional(),
            accountOwnerIds: z.nullable(z.array(z.string())).optional(),
            actorId: z.string().optional(),
            appEntitlementIds: z.nullable(z.array(z.string())).optional(),
            appResourceIds: z.nullable(z.array(z.string())).optional(),
            appResourceTypeIds: z.nullable(z.array(z.string())).optional(),
            appUserSubjectIds: z.nullable(z.array(z.string())).optional(),
            applicationIds: z.nullable(z.array(z.string())).optional(),
            assigneesInIds: z.nullable(z.array(z.string())).optional(),
            createdAfter: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            createdBefore: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            currentStep: CurrentStep$.optional(),
            emergencyStatus: EmergencyStatus$.optional(),
            excludeAppEntitlementIds: z.nullable(z.array(z.string())).optional(),
            excludeIds: z.nullable(z.array(z.string())).optional(),
            includeDeleted: z.boolean().optional(),
            myWorkUserIds: z.nullable(z.array(z.string())).optional(),
            olderThanDuration: z.string().optional(),
            openerIds: z.nullable(z.array(z.string())).optional(),
            pageSize: z.number().int().optional(),
            pageToken: z.string().optional(),
            previouslyActedOnIds: z.nullable(z.array(z.string())).optional(),
            query: z.string().optional(),
            refs: z.nullable(z.array(TaskRef$.outboundSchema)).optional(),
            sortBy: SortBy$.optional(),
            subjectIds: z.nullable(z.array(z.string())).optional(),
            taskStates: z.nullable(z.array(TaskStates$)).optional(),
            taskTypes: z.nullable(z.array(TaskTypeInput$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.taskExpandMask === undefined ? null : { TaskExpandMask: v.taskExpandMask }),
                ...(v.accessReviewIds === undefined
                    ? null
                    : { accessReviewIds: v.accessReviewIds }),
                ...(v.accountOwnerIds === undefined
                    ? null
                    : { accountOwnerIds: v.accountOwnerIds }),
                ...(v.actorId === undefined ? null : { actorId: v.actorId }),
                ...(v.appEntitlementIds === undefined
                    ? null
                    : { appEntitlementIds: v.appEntitlementIds }),
                ...(v.appResourceIds === undefined ? null : { appResourceIds: v.appResourceIds }),
                ...(v.appResourceTypeIds === undefined
                    ? null
                    : { appResourceTypeIds: v.appResourceTypeIds }),
                ...(v.appUserSubjectIds === undefined
                    ? null
                    : { appUserSubjectIds: v.appUserSubjectIds }),
                ...(v.applicationIds === undefined ? null : { applicationIds: v.applicationIds }),
                ...(v.assigneesInIds === undefined ? null : { assigneesInIds: v.assigneesInIds }),
                ...(v.createdAfter === undefined ? null : { createdAfter: v.createdAfter }),
                ...(v.createdBefore === undefined ? null : { createdBefore: v.createdBefore }),
                ...(v.currentStep === undefined ? null : { currentStep: v.currentStep }),
                ...(v.emergencyStatus === undefined
                    ? null
                    : { emergencyStatus: v.emergencyStatus }),
                ...(v.excludeAppEntitlementIds === undefined
                    ? null
                    : { excludeAppEntitlementIds: v.excludeAppEntitlementIds }),
                ...(v.excludeIds === undefined ? null : { excludeIds: v.excludeIds }),
                ...(v.includeDeleted === undefined ? null : { includeDeleted: v.includeDeleted }),
                ...(v.myWorkUserIds === undefined ? null : { myWorkUserIds: v.myWorkUserIds }),
                ...(v.olderThanDuration === undefined
                    ? null
                    : { olderThanDuration: v.olderThanDuration }),
                ...(v.openerIds === undefined ? null : { openerIds: v.openerIds }),
                ...(v.pageSize === undefined ? null : { pageSize: v.pageSize }),
                ...(v.pageToken === undefined ? null : { pageToken: v.pageToken }),
                ...(v.previouslyActedOnIds === undefined
                    ? null
                    : { previouslyActedOnIds: v.previouslyActedOnIds }),
                ...(v.query === undefined ? null : { query: v.query }),
                ...(v.refs === undefined ? null : { refs: v.refs }),
                ...(v.sortBy === undefined ? null : { sortBy: v.sortBy }),
                ...(v.subjectIds === undefined ? null : { subjectIds: v.subjectIds }),
                ...(v.taskStates === undefined ? null : { taskStates: v.taskStates }),
                ...(v.taskTypes === undefined ? null : { taskTypes: v.taskTypes }),
            };
        });
}
