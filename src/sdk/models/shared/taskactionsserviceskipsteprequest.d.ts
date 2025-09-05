import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceSkipStepRequest object lets you skip a policy step in a task.
 */
export type TaskActionsServiceSkipStepRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the policy step to skip.
     */
    policyStepId: string;
};
/** @internal */
export declare const TaskActionsServiceSkipStepRequest$inboundSchema: z.ZodType<TaskActionsServiceSkipStepRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceSkipStepRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId: string;
};
/** @internal */
export declare const TaskActionsServiceSkipStepRequest$outboundSchema: z.ZodType<TaskActionsServiceSkipStepRequest$Outbound, z.ZodTypeDef, TaskActionsServiceSkipStepRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceSkipStepRequest$ {
    /** @deprecated use `TaskActionsServiceSkipStepRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceSkipStepRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceSkipStepRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceSkipStepRequest$Outbound, z.ZodTypeDef, TaskActionsServiceSkipStepRequest>;
    /** @deprecated use `TaskActionsServiceSkipStepRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceSkipStepRequest$Outbound;
}
export declare function taskActionsServiceSkipStepRequestToJSON(taskActionsServiceSkipStepRequest: TaskActionsServiceSkipStepRequest): string;
export declare function taskActionsServiceSkipStepRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceSkipStepRequest, SDKValidationError>;
