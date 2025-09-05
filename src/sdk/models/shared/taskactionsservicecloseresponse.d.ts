import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceCloseResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceCloseResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export type TaskActionsServiceCloseResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceCloseResponseExpanded> | null | undefined;
    /**
     * The ID of the task close action created by this request.
     */
    taskActionId?: string | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCloseResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceCloseResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCloseResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceCloseResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceCloseResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceCloseResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCloseResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceCloseResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCloseResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCloseResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCloseResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceCloseResponseExpanded>;
    /** @deprecated use `TaskActionsServiceCloseResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceCloseResponseExpanded$Outbound;
}
export declare function taskActionsServiceCloseResponseExpandedToJSON(taskActionsServiceCloseResponseExpanded: TaskActionsServiceCloseResponseExpanded): string;
export declare function taskActionsServiceCloseResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCloseResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceCloseResponse$inboundSchema: z.ZodType<TaskActionsServiceCloseResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCloseResponse$Outbound = {
    expanded?: Array<TaskActionsServiceCloseResponseExpanded$Outbound> | null | undefined;
    taskActionId?: string | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCloseResponse$outboundSchema: z.ZodType<TaskActionsServiceCloseResponse$Outbound, z.ZodTypeDef, TaskActionsServiceCloseResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCloseResponse$ {
    /** @deprecated use `TaskActionsServiceCloseResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCloseResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCloseResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCloseResponse$Outbound, z.ZodTypeDef, TaskActionsServiceCloseResponse>;
    /** @deprecated use `TaskActionsServiceCloseResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceCloseResponse$Outbound;
}
export declare function taskActionsServiceCloseResponseToJSON(taskActionsServiceCloseResponse: TaskActionsServiceCloseResponse): string;
export declare function taskActionsServiceCloseResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCloseResponse, SDKValidationError>;
