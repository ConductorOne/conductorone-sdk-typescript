import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceCreateGrantResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskServiceCreateGrantResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
 */
export type TaskServiceCreateGrantResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskServiceCreateGrantResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateGrantResponseExpanded$inboundSchema: z.ZodType<TaskServiceCreateGrantResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateGrantResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskServiceCreateGrantResponseExpanded$outboundSchema: z.ZodType<TaskServiceCreateGrantResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateGrantResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateGrantResponseExpanded$ {
    /** @deprecated use `TaskServiceCreateGrantResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateGrantResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateGrantResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateGrantResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateGrantResponseExpanded>;
    /** @deprecated use `TaskServiceCreateGrantResponseExpanded$Outbound` instead. */
    type Outbound = TaskServiceCreateGrantResponseExpanded$Outbound;
}
export declare function taskServiceCreateGrantResponseExpandedToJSON(taskServiceCreateGrantResponseExpanded: TaskServiceCreateGrantResponseExpanded): string;
export declare function taskServiceCreateGrantResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateGrantResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskServiceCreateGrantResponse$inboundSchema: z.ZodType<TaskServiceCreateGrantResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateGrantResponse$Outbound = {
    expanded?: Array<TaskServiceCreateGrantResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateGrantResponse$outboundSchema: z.ZodType<TaskServiceCreateGrantResponse$Outbound, z.ZodTypeDef, TaskServiceCreateGrantResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateGrantResponse$ {
    /** @deprecated use `TaskServiceCreateGrantResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateGrantResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateGrantResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateGrantResponse$Outbound, z.ZodTypeDef, TaskServiceCreateGrantResponse>;
    /** @deprecated use `TaskServiceCreateGrantResponse$Outbound` instead. */
    type Outbound = TaskServiceCreateGrantResponse$Outbound;
}
export declare function taskServiceCreateGrantResponseToJSON(taskServiceCreateGrantResponse: TaskServiceCreateGrantResponse): string;
export declare function taskServiceCreateGrantResponseFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateGrantResponse, SDKValidationError>;
