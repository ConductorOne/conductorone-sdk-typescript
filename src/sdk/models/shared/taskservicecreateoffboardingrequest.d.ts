import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * The TaskServiceCreateOffboardingRequest message.
 */
export type TaskServiceCreateOffboardingRequest = {
    /**
     * The description field.
     */
    description?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The subjectUserId field.
     */
    subjectUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateOffboardingRequest$inboundSchema: z.ZodType<TaskServiceCreateOffboardingRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskServiceCreateOffboardingRequest$Outbound = {
    description?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    subjectUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskServiceCreateOffboardingRequest$outboundSchema: z.ZodType<TaskServiceCreateOffboardingRequest$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskServiceCreateOffboardingRequest$ {
    /** @deprecated use `TaskServiceCreateOffboardingRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskServiceCreateOffboardingRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskServiceCreateOffboardingRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskServiceCreateOffboardingRequest$Outbound, z.ZodTypeDef, TaskServiceCreateOffboardingRequest>;
    /** @deprecated use `TaskServiceCreateOffboardingRequest$Outbound` instead. */
    type Outbound = TaskServiceCreateOffboardingRequest$Outbound;
}
export declare function taskServiceCreateOffboardingRequestToJSON(taskServiceCreateOffboardingRequest: TaskServiceCreateOffboardingRequest): string;
export declare function taskServiceCreateOffboardingRequestFromJSON(jsonString: string): SafeParseResult<TaskServiceCreateOffboardingRequest, SDKValidationError>;
