import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Task, Task$Outbound } from "./task.js";
/**
 * Contains a task and JSONPATH expressions that describe where in the expanded array related objects are located. This view can be used to display a fully-detailed dashboard of task information.
 */
export type TaskView = {
    /**
     * JSONPATH expression indicating the location of the AccessReview object in the expanded array
     */
    accessReviewPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the App object in the expanded array
     */
    appPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the AppUser object in the expanded array
     */
    appUserPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the object of the User that created the ticket in the expanded array
     */
    createdByUserPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the Entitlements objects in the expanded array
     */
    entitlementsPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the User object of the User that this task is targeting in the expanded array. This is the user that is the identity when the target of a task is an app user.
     */
    identityUserPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the Insights objects in the expanded array
     */
    insightsPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the StepApproverUsers objects in the expanded array
     */
    stepApproversPath?: string | null | undefined;
    task?: Task | null | undefined;
    /**
     * JSONPATH expression indicating the location of the User object in the expanded array. This is the user that is a direct target of the ticket without a specific relationship to a potentially non-existent app user.
     */
    userPath?: string | null | undefined;
};
/** @internal */
export declare const TaskView$inboundSchema: z.ZodType<TaskView, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskView$Outbound = {
    accessReviewPath?: string | null | undefined;
    appPath?: string | null | undefined;
    appUserPath?: string | null | undefined;
    createdByUserPath?: string | null | undefined;
    entitlementsPath?: string | null | undefined;
    identityUserPath?: string | null | undefined;
    insightsPath?: string | null | undefined;
    stepApproversPath?: string | null | undefined;
    task?: Task$Outbound | null | undefined;
    userPath?: string | null | undefined;
};
/** @internal */
export declare const TaskView$outboundSchema: z.ZodType<TaskView$Outbound, z.ZodTypeDef, TaskView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskView$ {
    /** @deprecated use `TaskView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskView, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskView$Outbound, z.ZodTypeDef, TaskView>;
    /** @deprecated use `TaskView$Outbound` instead. */
    type Outbound = TaskView$Outbound;
}
export declare function taskViewToJSON(taskView: TaskView): string;
export declare function taskViewFromJSON(jsonString: string): SafeParseResult<TaskView, SDKValidationError>;
