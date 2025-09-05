import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceHardResetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceHardResetResponse message.
 */
export type TaskActionsServiceHardResetResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<TaskActionsServiceHardResetResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ticketActionId field.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceHardResetResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceHardResetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceHardResetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceHardResetResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceHardResetResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceHardResetResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceHardResetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceHardResetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceHardResetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceHardResetResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetResponseExpanded>;
    /** @deprecated use `TaskActionsServiceHardResetResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceHardResetResponseExpanded$Outbound;
}
export declare function taskActionsServiceHardResetResponseExpandedToJSON(taskActionsServiceHardResetResponseExpanded: TaskActionsServiceHardResetResponseExpanded): string;
export declare function taskActionsServiceHardResetResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceHardResetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceHardResetResponse$inboundSchema: z.ZodType<TaskActionsServiceHardResetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceHardResetResponse$Outbound = {
    expanded?: Array<TaskActionsServiceHardResetResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceHardResetResponse$outboundSchema: z.ZodType<TaskActionsServiceHardResetResponse$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceHardResetResponse$ {
    /** @deprecated use `TaskActionsServiceHardResetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceHardResetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceHardResetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceHardResetResponse$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetResponse>;
    /** @deprecated use `TaskActionsServiceHardResetResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceHardResetResponse$Outbound;
}
export declare function taskActionsServiceHardResetResponseToJSON(taskActionsServiceHardResetResponse: TaskActionsServiceHardResetResponse): string;
export declare function taskActionsServiceHardResetResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceHardResetResponse, SDKValidationError>;
