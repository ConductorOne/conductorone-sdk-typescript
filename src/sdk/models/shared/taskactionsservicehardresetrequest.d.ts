import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceHardResetRequest object lets you reset a task and recalculate its policy.
 */
export type TaskActionsServiceHardResetRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceHardResetRequest$inboundSchema: z.ZodType<TaskActionsServiceHardResetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceHardResetRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceHardResetRequest$outboundSchema: z.ZodType<TaskActionsServiceHardResetRequest$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceHardResetRequest$ {
    /** @deprecated use `TaskActionsServiceHardResetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceHardResetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceHardResetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceHardResetRequest$Outbound, z.ZodTypeDef, TaskActionsServiceHardResetRequest>;
    /** @deprecated use `TaskActionsServiceHardResetRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceHardResetRequest$Outbound;
}
export declare function taskActionsServiceHardResetRequestToJSON(taskActionsServiceHardResetRequest: TaskActionsServiceHardResetRequest): string;
export declare function taskActionsServiceHardResetRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceHardResetRequest, SDKValidationError>;
