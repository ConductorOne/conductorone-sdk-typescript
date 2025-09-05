import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceDenyResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.
 */
export type TaskActionsServiceDenyResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceDenyResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ID of the ticket (task) deny action created by this request.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceDenyResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceDenyResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceDenyResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceDenyResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceDenyResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceDenyResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceDenyResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceDenyResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceDenyResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceDenyResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceDenyResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceDenyResponseExpanded>;
    /** @deprecated use `TaskActionsServiceDenyResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceDenyResponseExpanded$Outbound;
}
export declare function taskActionsServiceDenyResponseExpandedToJSON(taskActionsServiceDenyResponseExpanded: TaskActionsServiceDenyResponseExpanded): string;
export declare function taskActionsServiceDenyResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceDenyResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceDenyResponse$inboundSchema: z.ZodType<TaskActionsServiceDenyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceDenyResponse$Outbound = {
    expanded?: Array<TaskActionsServiceDenyResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceDenyResponse$outboundSchema: z.ZodType<TaskActionsServiceDenyResponse$Outbound, z.ZodTypeDef, TaskActionsServiceDenyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceDenyResponse$ {
    /** @deprecated use `TaskActionsServiceDenyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceDenyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceDenyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceDenyResponse$Outbound, z.ZodTypeDef, TaskActionsServiceDenyResponse>;
    /** @deprecated use `TaskActionsServiceDenyResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceDenyResponse$Outbound;
}
export declare function taskActionsServiceDenyResponseToJSON(taskActionsServiceDenyResponse: TaskActionsServiceDenyResponse): string;
export declare function taskActionsServiceDenyResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceDenyResponse, SDKValidationError>;
