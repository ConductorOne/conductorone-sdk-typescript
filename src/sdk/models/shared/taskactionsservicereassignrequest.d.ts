import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceReassignRequest message.
 */
export type TaskActionsServiceReassignRequest = {
    /**
     * The comment field.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The newStepUserIds field.
     */
    newStepUserIds?: Array<string> | null | undefined;
    /**
     * The policyStepId field.
     */
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceReassignRequest$inboundSchema: z.ZodType<TaskActionsServiceReassignRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceReassignRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    newStepUserIds?: Array<string> | null | undefined;
    policyStepId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceReassignRequest$outboundSchema: z.ZodType<TaskActionsServiceReassignRequest$Outbound, z.ZodTypeDef, TaskActionsServiceReassignRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceReassignRequest$ {
    /** @deprecated use `TaskActionsServiceReassignRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceReassignRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceReassignRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceReassignRequest$Outbound, z.ZodTypeDef, TaskActionsServiceReassignRequest>;
    /** @deprecated use `TaskActionsServiceReassignRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceReassignRequest$Outbound;
}
export declare function taskActionsServiceReassignRequestToJSON(taskActionsServiceReassignRequest: TaskActionsServiceReassignRequest): string;
export declare function taskActionsServiceReassignRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceReassignRequest, SDKValidationError>;
