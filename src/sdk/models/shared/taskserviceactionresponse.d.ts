import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceActionResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskServiceActionResponse message.
 */
export type TaskServiceActionResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<TaskServiceActionResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ticketActionId field.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceActionResponseExpanded$inboundSchema: z.ZodType<TaskServiceActionResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceActionResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskServiceActionResponseExpanded$outboundSchema: z.ZodType<TaskServiceActionResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceActionResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceActionResponseExpanded$ {
    /** @deprecated use `TaskServiceActionResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceActionResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceActionResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceActionResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceActionResponseExpanded>;
    /** @deprecated use `TaskServiceActionResponseExpanded$Outbound` instead. */
    type Outbound = TaskServiceActionResponseExpanded$Outbound;
}
export declare function taskServiceActionResponseExpandedToJSON(taskServiceActionResponseExpanded: TaskServiceActionResponseExpanded): string;
export declare function taskServiceActionResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskServiceActionResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskServiceActionResponse$inboundSchema: z.ZodType<TaskServiceActionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceActionResponse$Outbound = {
    expanded?: Array<TaskServiceActionResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceActionResponse$outboundSchema: z.ZodType<TaskServiceActionResponse$Outbound, z.ZodTypeDef, TaskServiceActionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceActionResponse$ {
    /** @deprecated use `TaskServiceActionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceActionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceActionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceActionResponse$Outbound, z.ZodTypeDef, TaskServiceActionResponse>;
    /** @deprecated use `TaskServiceActionResponse$Outbound` instead. */
    type Outbound = TaskServiceActionResponse$Outbound;
}
export declare function taskServiceActionResponseToJSON(taskServiceActionResponse: TaskServiceActionResponse): string;
export declare function taskServiceActionResponseFromJSON(jsonString: string): SafeParseResult<TaskServiceActionResponse, SDKValidationError>;
