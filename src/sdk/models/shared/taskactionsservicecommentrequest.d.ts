import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceCommentRequest object lets you create a new comment on a task.
 */
export type TaskActionsServiceCommentRequest = {
    /**
     * The comment to be posted to the ticket
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCommentRequest$inboundSchema: z.ZodType<TaskActionsServiceCommentRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCommentRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCommentRequest$outboundSchema: z.ZodType<TaskActionsServiceCommentRequest$Outbound, z.ZodTypeDef, TaskActionsServiceCommentRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCommentRequest$ {
    /** @deprecated use `TaskActionsServiceCommentRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCommentRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCommentRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCommentRequest$Outbound, z.ZodTypeDef, TaskActionsServiceCommentRequest>;
    /** @deprecated use `TaskActionsServiceCommentRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceCommentRequest$Outbound;
}
export declare function taskActionsServiceCommentRequestToJSON(taskActionsServiceCommentRequest: TaskActionsServiceCommentRequest): string;
export declare function taskActionsServiceCommentRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCommentRequest, SDKValidationError>;
