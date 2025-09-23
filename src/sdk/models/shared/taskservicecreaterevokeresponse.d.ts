import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskServiceCreateRevokeResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskServiceCreateRevokeResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
 */
export type TaskServiceCreateRevokeResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskServiceCreateRevokeResponseExpanded> | null | undefined;
    taskView?: TaskView | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateRevokeResponseExpanded$inboundSchema: z.ZodType<TaskServiceCreateRevokeResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateRevokeResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskServiceCreateRevokeResponseExpanded$outboundSchema: z.ZodType<TaskServiceCreateRevokeResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateRevokeResponseExpanded$ {
    /** @deprecated use `TaskServiceCreateRevokeResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateRevokeResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateRevokeResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateRevokeResponseExpanded$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeResponseExpanded>;
    /** @deprecated use `TaskServiceCreateRevokeResponseExpanded$Outbound` instead. */
    type Outbound = TaskServiceCreateRevokeResponseExpanded$Outbound;
}
export declare function taskServiceCreateRevokeResponseExpandedToJSON(taskServiceCreateRevokeResponseExpanded: TaskServiceCreateRevokeResponseExpanded): string;
export declare function taskServiceCreateRevokeResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateRevokeResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskServiceCreateRevokeResponse$inboundSchema: z.ZodType<TaskServiceCreateRevokeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateRevokeResponse$Outbound = {
    expanded?: Array<TaskServiceCreateRevokeResponseExpanded$Outbound> | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateRevokeResponse$outboundSchema: z.ZodType<TaskServiceCreateRevokeResponse$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateRevokeResponse$ {
    /** @deprecated use `TaskServiceCreateRevokeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateRevokeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateRevokeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateRevokeResponse$Outbound, z.ZodTypeDef, TaskServiceCreateRevokeResponse>;
    /** @deprecated use `TaskServiceCreateRevokeResponse$Outbound` instead. */
    type Outbound = TaskServiceCreateRevokeResponse$Outbound;
}
export declare function taskServiceCreateRevokeResponseToJSON(taskServiceCreateRevokeResponse: TaskServiceCreateRevokeResponse): string;
export declare function taskServiceCreateRevokeResponseFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateRevokeResponse, SDKValidationError>;
