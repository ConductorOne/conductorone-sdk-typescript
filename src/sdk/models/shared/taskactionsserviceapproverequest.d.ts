import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceApproveRequest object lets you approve a task.
 */
export type TaskActionsServiceApproveRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the policy step on the given task to approve.
     */
    policyStepId: string;
};
/** @internal */
export declare const TaskActionsServiceApproveRequest$inboundSchema: z.ZodType<TaskActionsServiceApproveRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId: string;
};
/** @internal */
export declare const TaskActionsServiceApproveRequest$outboundSchema: z.ZodType<TaskActionsServiceApproveRequest$Outbound, z.ZodTypeDef, TaskActionsServiceApproveRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveRequest$ {
    /** @deprecated use `TaskActionsServiceApproveRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveRequest$Outbound, z.ZodTypeDef, TaskActionsServiceApproveRequest>;
    /** @deprecated use `TaskActionsServiceApproveRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveRequest$Outbound;
}
export declare function taskActionsServiceApproveRequestToJSON(taskActionsServiceApproveRequest: TaskActionsServiceApproveRequest): string;
export declare function taskActionsServiceApproveRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveRequest, SDKValidationError>;
