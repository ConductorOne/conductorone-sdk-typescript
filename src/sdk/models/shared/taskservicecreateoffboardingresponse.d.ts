import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceCreateOffboardingResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskServiceCreateOffboardingResponse message.
 */
export type TaskServiceCreateOffboardingResponse = {
    /**
     * The expanded field.
     */
    expanded?: Array<TaskServiceCreateOffboardingResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateOffboardingResponseExpanded$inboundSchema: z.ZodType<TaskServiceCreateOffboardingResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateOffboardingResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskServiceCreateOffboardingResponseExpanded$outboundSchema: z.ZodType<TaskServiceCreateOffboardingResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateOffboardingResponseExpanded$ {
    /** @deprecated use `TaskServiceCreateOffboardingResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateOffboardingResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateOffboardingResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateOffboardingResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingResponseExpanded>;
    /** @deprecated use `TaskServiceCreateOffboardingResponseExpanded$Outbound` instead. */
    type Outbound = TaskServiceCreateOffboardingResponseExpanded$Outbound;
}
export declare function taskServiceCreateOffboardingResponseExpandedToJSON(taskServiceCreateOffboardingResponseExpanded: TaskServiceCreateOffboardingResponseExpanded): string;
export declare function taskServiceCreateOffboardingResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateOffboardingResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskServiceCreateOffboardingResponse$inboundSchema: z.ZodType<TaskServiceCreateOffboardingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateOffboardingResponse$Outbound = {
    expanded?: Array<TaskServiceCreateOffboardingResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateOffboardingResponse$outboundSchema: z.ZodType<TaskServiceCreateOffboardingResponse$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateOffboardingResponse$ {
    /** @deprecated use `TaskServiceCreateOffboardingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateOffboardingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateOffboardingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateOffboardingResponse$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingResponse>;
    /** @deprecated use `TaskServiceCreateOffboardingResponse$Outbound` instead. */
    type Outbound = TaskServiceCreateOffboardingResponse$Outbound;
}
export declare function taskServiceCreateOffboardingResponseToJSON(taskServiceCreateOffboardingResponse: TaskServiceCreateOffboardingResponse): string;
export declare function taskServiceCreateOffboardingResponseFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateOffboardingResponse, SDKValidationError>;
