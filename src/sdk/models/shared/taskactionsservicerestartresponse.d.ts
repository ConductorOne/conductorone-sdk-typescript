import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceRestartResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceRestartResponse message.
 */
export type TaskActionsServiceRestartResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<TaskActionsServiceRestartResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ticketActionId field.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceRestartResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceRestartResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceRestartResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceRestartResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceRestartResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceRestartResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceRestartResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceRestartResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceRestartResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceRestartResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceRestartResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceRestartResponseExpanded>;
    /** @deprecated use `TaskActionsServiceRestartResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceRestartResponseExpanded$Outbound;
}
export declare function taskActionsServiceRestartResponseExpandedToJSON(taskActionsServiceRestartResponseExpanded: TaskActionsServiceRestartResponseExpanded): string;
export declare function taskActionsServiceRestartResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceRestartResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceRestartResponse$inboundSchema: z.ZodType<TaskActionsServiceRestartResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceRestartResponse$Outbound = {
    expanded?: Array<TaskActionsServiceRestartResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceRestartResponse$outboundSchema: z.ZodType<TaskActionsServiceRestartResponse$Outbound, z.ZodTypeDef, TaskActionsServiceRestartResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceRestartResponse$ {
    /** @deprecated use `TaskActionsServiceRestartResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceRestartResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceRestartResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceRestartResponse$Outbound, z.ZodTypeDef, TaskActionsServiceRestartResponse>;
    /** @deprecated use `TaskActionsServiceRestartResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceRestartResponse$Outbound;
}
export declare function taskActionsServiceRestartResponseToJSON(taskActionsServiceRestartResponse: TaskActionsServiceRestartResponse): string;
export declare function taskActionsServiceRestartResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceRestartResponse, SDKValidationError>;
