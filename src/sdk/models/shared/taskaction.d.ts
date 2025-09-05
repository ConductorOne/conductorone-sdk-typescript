import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { CloseAction, CloseAction$Outbound } from "./closeaction.js";
import { ReassignAction, ReassignAction$Outbound } from "./reassignaction.js";
export declare const TaskTypes: {
    readonly TaskTypeUnspecified: "TASK_TYPE_UNSPECIFIED";
    readonly TaskTypeRequest: "TASK_TYPE_REQUEST";
    readonly TaskTypeRevoke: "TASK_TYPE_REVOKE";
    readonly TaskTypeReview: "TASK_TYPE_REVIEW";
};
export type TaskTypes = OpenEnum<typeof TaskTypes>;
/**
 * The taskUserRelation field.
 */
export declare const TaskUserRelation: {
    readonly TaskUserRelationUnspecified: "TASK_USER_RELATION_UNSPECIFIED";
    readonly TaskUserRelationAssignee: "TASK_USER_RELATION_ASSIGNEE";
    readonly TaskUserRelationSubject: "TASK_USER_RELATION_SUBJECT";
};
/**
 * The taskUserRelation field.
 */
export type TaskUserRelation = OpenEnum<typeof TaskUserRelation>;
/**
 * The TaskAction message.
 *
 * @remarks
 *
 * This message contains a oneof named action. Only a single field of the following list may be set at a time:
 *   - close
 *   - reassign
 */
export type TaskAction = {
    close?: CloseAction | null | undefined;
    reassign?: ReassignAction | null | undefined;
    /**
     * The taskTypes field.
     */
    taskTypes?: Array<TaskTypes> | null | undefined;
    /**
     * The taskUserRelation field.
     */
    taskUserRelation?: TaskUserRelation | null | undefined;
};
/** @internal */
export declare const TaskTypes$inboundSchema: z.ZodType<TaskTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskTypes$outboundSchema: z.ZodType<TaskTypes, z.ZodTypeDef, TaskTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypes$ {
    /** @deprecated use `TaskTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypes, z.ZodTypeDef, TaskTypes>;
}
/** @internal */
export declare const TaskUserRelation$inboundSchema: z.ZodType<TaskUserRelation, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskUserRelation$outboundSchema: z.ZodType<TaskUserRelation, z.ZodTypeDef, TaskUserRelation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskUserRelation$ {
    /** @deprecated use `TaskUserRelation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskUserRelation, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskUserRelation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskUserRelation, z.ZodTypeDef, TaskUserRelation>;
}
/** @internal */
export declare const TaskAction$inboundSchema: z.ZodType<TaskAction, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAction$Outbound = {
    close?: CloseAction$Outbound | null | undefined;
    reassign?: ReassignAction$Outbound | null | undefined;
    taskTypes?: Array<string> | null | undefined;
    taskUserRelation?: string | null | undefined;
};
/** @internal */
export declare const TaskAction$outboundSchema: z.ZodType<TaskAction$Outbound, z.ZodTypeDef, TaskAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAction$ {
    /** @deprecated use `TaskAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAction$Outbound, z.ZodTypeDef, TaskAction>;
    /** @deprecated use `TaskAction$Outbound` instead. */
    type Outbound = TaskAction$Outbound;
}
export declare function taskActionToJSON(taskAction: TaskAction): string;
export declare function taskActionFromJSON(jsonString: string): SafeParseResult<TaskAction, SDKValidationError>;
