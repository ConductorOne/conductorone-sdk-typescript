import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceGetResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
 */
export type TaskServiceGetResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskServiceGetResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskServiceGetResponseExpanded$inboundSchema: z.ZodType<TaskServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceGetResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskServiceGetResponseExpanded$outboundSchema: z.ZodType<TaskServiceGetResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceGetResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceGetResponseExpanded$ {
    /** @deprecated use `TaskServiceGetResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceGetResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceGetResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceGetResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceGetResponseExpanded>;
    /** @deprecated use `TaskServiceGetResponseExpanded$Outbound` instead. */
    type Outbound = TaskServiceGetResponseExpanded$Outbound;
}
export declare function taskServiceGetResponseExpandedToJSON(taskServiceGetResponseExpanded: TaskServiceGetResponseExpanded): string;
export declare function taskServiceGetResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskServiceGetResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskServiceGetResponse$inboundSchema: z.ZodType<TaskServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceGetResponse$Outbound = {
    expanded?: Array<TaskServiceGetResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskServiceGetResponse$outboundSchema: z.ZodType<TaskServiceGetResponse$Outbound, z.ZodTypeDef, TaskServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceGetResponse$ {
    /** @deprecated use `TaskServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceGetResponse$Outbound, z.ZodTypeDef, TaskServiceGetResponse>;
    /** @deprecated use `TaskServiceGetResponse$Outbound` instead. */
    type Outbound = TaskServiceGetResponse$Outbound;
}
export declare function taskServiceGetResponseToJSON(taskServiceGetResponse: TaskServiceGetResponse): string;
export declare function taskServiceGetResponseFromJSON(jsonString: string): SafeParseResult<TaskServiceGetResponse, SDKValidationError>;
