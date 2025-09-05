import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceProcessNowResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskActionsServiceProcessNowResponse message.
 */
export type TaskActionsServiceProcessNowResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<TaskActionsServiceProcessNowResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceProcessNowResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceProcessNowResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceProcessNowResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceProcessNowResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceProcessNowResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceProcessNowResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceProcessNowResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceProcessNowResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceProcessNowResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceProcessNowResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowResponseExpanded>;
    /** @deprecated use `TaskActionsServiceProcessNowResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceProcessNowResponseExpanded$Outbound;
}
export declare function taskActionsServiceProcessNowResponseExpandedToJSON(taskActionsServiceProcessNowResponseExpanded: TaskActionsServiceProcessNowResponseExpanded): string;
export declare function taskActionsServiceProcessNowResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceProcessNowResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceProcessNowResponse$inboundSchema: z.ZodType<TaskActionsServiceProcessNowResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceProcessNowResponse$Outbound = {
    expanded?: Array<TaskActionsServiceProcessNowResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceProcessNowResponse$outboundSchema: z.ZodType<TaskActionsServiceProcessNowResponse$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceProcessNowResponse$ {
    /** @deprecated use `TaskActionsServiceProcessNowResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceProcessNowResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceProcessNowResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceProcessNowResponse$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowResponse>;
    /** @deprecated use `TaskActionsServiceProcessNowResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceProcessNowResponse$Outbound;
}
export declare function taskActionsServiceProcessNowResponseToJSON(taskActionsServiceProcessNowResponse: TaskActionsServiceProcessNowResponse): string;
export declare function taskActionsServiceProcessNowResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceProcessNowResponse, SDKValidationError>;
