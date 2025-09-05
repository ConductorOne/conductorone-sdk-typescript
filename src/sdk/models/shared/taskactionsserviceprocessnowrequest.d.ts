import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceProcessNowRequest object lets you trigger processing of a task immediately.
 */
export type TaskActionsServiceProcessNowRequest = {
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceProcessNowRequest$inboundSchema: z.ZodType<TaskActionsServiceProcessNowRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceProcessNowRequest$Outbound = {
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceProcessNowRequest$outboundSchema: z.ZodType<TaskActionsServiceProcessNowRequest$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceProcessNowRequest$ {
    /** @deprecated use `TaskActionsServiceProcessNowRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceProcessNowRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceProcessNowRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceProcessNowRequest$Outbound, z.ZodTypeDef, TaskActionsServiceProcessNowRequest>;
    /** @deprecated use `TaskActionsServiceProcessNowRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceProcessNowRequest$Outbound;
}
export declare function taskActionsServiceProcessNowRequestToJSON(taskActionsServiceProcessNowRequest: TaskActionsServiceProcessNowRequest): string;
export declare function taskActionsServiceProcessNowRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceProcessNowRequest, SDKValidationError>;
