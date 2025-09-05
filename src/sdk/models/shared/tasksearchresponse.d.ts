import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskSearchResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The TaskSearchResponse message contains a list of results and a nextPageToken if applicable.
 */
export type TaskSearchResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    expanded?: Array<TaskSearchResponseExpanded> | null | undefined;
    /**
     * List of serialized related objects.
     */
    list?: Array<TaskView> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const TaskSearchResponseExpanded$inboundSchema: z.ZodType<TaskSearchResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskSearchResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskSearchResponseExpanded$outboundSchema: z.ZodType<TaskSearchResponseExpanded$Outbound, z.ZodTypeDef, TaskSearchResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskSearchResponseExpanded$ {
    /** @deprecated use `TaskSearchResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskSearchResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskSearchResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskSearchResponseExpanded$Outbound, z.ZodTypeDef, TaskSearchResponseExpanded>;
    /** @deprecated use `TaskSearchResponseExpanded$Outbound` instead. */
    type Outbound = TaskSearchResponseExpanded$Outbound;
}
export declare function taskSearchResponseExpandedToJSON(taskSearchResponseExpanded: TaskSearchResponseExpanded): string;
export declare function taskSearchResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskSearchResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskSearchResponse$inboundSchema: z.ZodType<TaskSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskSearchResponse$Outbound = {
    expanded?: Array<TaskSearchResponseExpanded$Outbound> | null | undefined;
    list?: Array<TaskView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const TaskSearchResponse$outboundSchema: z.ZodType<TaskSearchResponse$Outbound, z.ZodTypeDef, TaskSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskSearchResponse$ {
    /** @deprecated use `TaskSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskSearchResponse$Outbound, z.ZodTypeDef, TaskSearchResponse>;
    /** @deprecated use `TaskSearchResponse$Outbound` instead. */
    type Outbound = TaskSearchResponse$Outbound;
}
export declare function taskSearchResponseToJSON(taskSearchResponse: TaskSearchResponse): string;
export declare function taskSearchResponseFromJSON(jsonString: string): SafeParseResult<TaskSearchResponse, SDKValidationError>;
