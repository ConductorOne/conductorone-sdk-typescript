import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceUpdateGrantDurationRequest message.
 */
export type TaskActionsServiceUpdateGrantDurationRequest = {
    duration: string;
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceUpdateGrantDurationRequest$inboundSchema: z.ZodType<TaskActionsServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceUpdateGrantDurationRequest$Outbound = {
    duration: string;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceUpdateGrantDurationRequest$outboundSchema: z.ZodType<TaskActionsServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, TaskActionsServiceUpdateGrantDurationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceUpdateGrantDurationRequest$ {
    /** @deprecated use `TaskActionsServiceUpdateGrantDurationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceUpdateGrantDurationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceUpdateGrantDurationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceUpdateGrantDurationRequest$Outbound, z.ZodTypeDef, TaskActionsServiceUpdateGrantDurationRequest>;
    /** @deprecated use `TaskActionsServiceUpdateGrantDurationRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceUpdateGrantDurationRequest$Outbound;
}
export declare function taskActionsServiceUpdateGrantDurationRequestToJSON(taskActionsServiceUpdateGrantDurationRequest: TaskActionsServiceUpdateGrantDurationRequest): string;
export declare function taskActionsServiceUpdateGrantDurationRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceUpdateGrantDurationRequest, SDKValidationError>;
