import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskActionsServiceUpdateRequestDataRequest message.
 */
export type TaskActionsServiceUpdateRequestDataRequest = {
    data?: {
        [k: string]: any;
    } | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceUpdateRequestDataRequest$inboundSchema: z.ZodType<TaskActionsServiceUpdateRequestDataRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceUpdateRequestDataRequest$Outbound = {
    data?: {
        [k: string]: any;
    } | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceUpdateRequestDataRequest$outboundSchema: z.ZodType<TaskActionsServiceUpdateRequestDataRequest$Outbound, z.ZodTypeDef, TaskActionsServiceUpdateRequestDataRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceUpdateRequestDataRequest$ {
    /** @deprecated use `TaskActionsServiceUpdateRequestDataRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceUpdateRequestDataRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceUpdateRequestDataRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceUpdateRequestDataRequest$Outbound, z.ZodTypeDef, TaskActionsServiceUpdateRequestDataRequest>;
    /** @deprecated use `TaskActionsServiceUpdateRequestDataRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceUpdateRequestDataRequest$Outbound;
}
export declare function taskActionsServiceUpdateRequestDataRequestToJSON(taskActionsServiceUpdateRequestDataRequest: TaskActionsServiceUpdateRequestDataRequest): string;
export declare function taskActionsServiceUpdateRequestDataRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceUpdateRequestDataRequest, SDKValidationError>;
