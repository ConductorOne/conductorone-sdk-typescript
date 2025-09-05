import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceDenyRequest object lets you deny a task.
 */
export type TaskActionsServiceDenyRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the currently policy step. This is the step you want to deny.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceDenyRequest$inboundSchema: z.ZodType<TaskActionsServiceDenyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceDenyRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceDenyRequest$outboundSchema: z.ZodType<TaskActionsServiceDenyRequest$Outbound, z.ZodTypeDef, TaskActionsServiceDenyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceDenyRequest$ {
    /** @deprecated use `TaskActionsServiceDenyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceDenyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceDenyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceDenyRequest$Outbound, z.ZodTypeDef, TaskActionsServiceDenyRequest>;
    /** @deprecated use `TaskActionsServiceDenyRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceDenyRequest$Outbound;
}
export declare function taskActionsServiceDenyRequestToJSON(taskActionsServiceDenyRequest: TaskActionsServiceDenyRequest): string;
export declare function taskActionsServiceDenyRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceDenyRequest, SDKValidationError>;
