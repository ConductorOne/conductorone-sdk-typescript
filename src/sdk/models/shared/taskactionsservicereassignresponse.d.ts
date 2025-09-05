import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceReassignResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceReassignResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export type TaskActionsServiceReassignResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceReassignResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ID of the ticket (task) deny action created by this request.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceReassignResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceReassignResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceReassignResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceReassignResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceReassignResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceReassignResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceReassignResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceReassignResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceReassignResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceReassignResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceReassignResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceReassignResponseExpanded>;
    /** @deprecated use `TaskActionsServiceReassignResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceReassignResponseExpanded$Outbound;
}
export declare function taskActionsServiceReassignResponseExpandedToJSON(taskActionsServiceReassignResponseExpanded: TaskActionsServiceReassignResponseExpanded): string;
export declare function taskActionsServiceReassignResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceReassignResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceReassignResponse$inboundSchema: z.ZodType<TaskActionsServiceReassignResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceReassignResponse$Outbound = {
    expanded?: Array<TaskActionsServiceReassignResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceReassignResponse$outboundSchema: z.ZodType<TaskActionsServiceReassignResponse$Outbound, z.ZodTypeDef, TaskActionsServiceReassignResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceReassignResponse$ {
    /** @deprecated use `TaskActionsServiceReassignResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceReassignResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceReassignResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceReassignResponse$Outbound, z.ZodTypeDef, TaskActionsServiceReassignResponse>;
    /** @deprecated use `TaskActionsServiceReassignResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceReassignResponse$Outbound;
}
export declare function taskActionsServiceReassignResponseToJSON(taskActionsServiceReassignResponse: TaskActionsServiceReassignResponse): string;
export declare function taskActionsServiceReassignResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceReassignResponse, SDKValidationError>;
