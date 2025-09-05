import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceCommentResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * Task actions service comment response returns the task view inluding the expanded array of items that are indicated by the expand mask on the request.
 */
export type TaskActionsServiceCommentResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceCommentResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCommentResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceCommentResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCommentResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceCommentResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceCommentResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceCommentResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCommentResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceCommentResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCommentResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCommentResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCommentResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceCommentResponseExpanded>;
    /** @deprecated use `TaskActionsServiceCommentResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceCommentResponseExpanded$Outbound;
}
export declare function taskActionsServiceCommentResponseExpandedToJSON(taskActionsServiceCommentResponseExpanded: TaskActionsServiceCommentResponseExpanded): string;
export declare function taskActionsServiceCommentResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCommentResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceCommentResponse$inboundSchema: z.ZodType<TaskActionsServiceCommentResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCommentResponse$Outbound = {
    expanded?: Array<TaskActionsServiceCommentResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCommentResponse$outboundSchema: z.ZodType<TaskActionsServiceCommentResponse$Outbound, z.ZodTypeDef, TaskActionsServiceCommentResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCommentResponse$ {
    /** @deprecated use `TaskActionsServiceCommentResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCommentResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCommentResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCommentResponse$Outbound, z.ZodTypeDef, TaskActionsServiceCommentResponse>;
    /** @deprecated use `TaskActionsServiceCommentResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceCommentResponse$Outbound;
}
export declare function taskActionsServiceCommentResponseToJSON(taskActionsServiceCommentResponse: TaskActionsServiceCommentResponse): string;
export declare function taskActionsServiceCommentResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCommentResponse, SDKValidationError>;
