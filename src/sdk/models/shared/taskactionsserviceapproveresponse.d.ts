import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceApproveResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceApproveResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export type TaskActionsServiceApproveResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceApproveResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ID of the ticket (task) approve action created by this request.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceApproveResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceApproveResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceApproveResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceApproveResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceApproveResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceApproveResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceApproveResponseExpanded>;
    /** @deprecated use `TaskActionsServiceApproveResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveResponseExpanded$Outbound;
}
export declare function taskActionsServiceApproveResponseExpandedToJSON(taskActionsServiceApproveResponseExpanded: TaskActionsServiceApproveResponseExpanded): string;
export declare function taskActionsServiceApproveResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceApproveResponse$inboundSchema: z.ZodType<TaskActionsServiceApproveResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveResponse$Outbound = {
    expanded?: Array<TaskActionsServiceApproveResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceApproveResponse$outboundSchema: z.ZodType<TaskActionsServiceApproveResponse$Outbound, z.ZodTypeDef, TaskActionsServiceApproveResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveResponse$ {
    /** @deprecated use `TaskActionsServiceApproveResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveResponse$Outbound, z.ZodTypeDef, TaskActionsServiceApproveResponse>;
    /** @deprecated use `TaskActionsServiceApproveResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveResponse$Outbound;
}
export declare function taskActionsServiceApproveResponseToJSON(taskActionsServiceApproveResponse: TaskActionsServiceApproveResponse): string;
export declare function taskActionsServiceApproveResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveResponse, SDKValidationError>;
