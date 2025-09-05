import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceRestartRequest object lets you restart a task.
 */
export type TaskActionsServiceRestartRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the policy step on the given task to restart.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceRestartRequest$inboundSchema: z.ZodType<TaskActionsServiceRestartRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceRestartRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceRestartRequest$outboundSchema: z.ZodType<TaskActionsServiceRestartRequest$Outbound, z.ZodTypeDef, TaskActionsServiceRestartRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceRestartRequest$ {
    /** @deprecated use `TaskActionsServiceRestartRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceRestartRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceRestartRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceRestartRequest$Outbound, z.ZodTypeDef, TaskActionsServiceRestartRequest>;
    /** @deprecated use `TaskActionsServiceRestartRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceRestartRequest$Outbound;
}
export declare function taskActionsServiceRestartRequestToJSON(taskActionsServiceRestartRequest: TaskActionsServiceRestartRequest): string;
export declare function taskActionsServiceRestartRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceRestartRequest, SDKValidationError>;
