import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceCloseRequest object lets you close or cancel a task.
 */
export type TaskActionsServiceCloseRequest = {
    /**
     * The comment field.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCloseRequest$inboundSchema: z.ZodType<TaskActionsServiceCloseRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceCloseRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceCloseRequest$outboundSchema: z.ZodType<TaskActionsServiceCloseRequest$Outbound, z.ZodTypeDef, TaskActionsServiceCloseRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceCloseRequest$ {
    /** @deprecated use `TaskActionsServiceCloseRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceCloseRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceCloseRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceCloseRequest$Outbound, z.ZodTypeDef, TaskActionsServiceCloseRequest>;
    /** @deprecated use `TaskActionsServiceCloseRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceCloseRequest$Outbound;
}
export declare function taskActionsServiceCloseRequestToJSON(taskActionsServiceCloseRequest: TaskActionsServiceCloseRequest): string;
export declare function taskActionsServiceCloseRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceCloseRequest, SDKValidationError>;
