import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskView, TaskView$Outbound } from "./taskview.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type TaskActionsServiceApproveWithStepUpResponseExpanded = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * TaskActionsServiceApproveWithStepUpResponse is the response for approving a task with step-up authentication
 */
export type TaskActionsServiceApproveWithStepUpResponse = {
    /**
     * List of serialized related objects.
     */
    expanded?: Array<TaskActionsServiceApproveWithStepUpResponseExpanded> | null | undefined;
    /**
     * The redirect URL the client must visit to complete the step-up authentication.
     */
    redirectUrl?: string | null | undefined;
    taskView?: TaskView | null | undefined;
    /**
     * The ID of the ticket (task) approve action created by this request.
     */
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpResponseExpanded$inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponseExpanded, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpResponseExpanded$outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpResponseExpanded>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveWithStepUpResponseExpanded$ {
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponseExpanded$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponseExpanded, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponseExpanded$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpResponseExpanded>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound;
}
export declare function taskActionsServiceApproveWithStepUpResponseExpandedToJSON(taskActionsServiceApproveWithStepUpResponseExpanded: TaskActionsServiceApproveWithStepUpResponseExpanded): string;
export declare function taskActionsServiceApproveWithStepUpResponseExpandedFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveWithStepUpResponseExpanded, SDKValidationError>;
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpResponse$inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveWithStepUpResponse$Outbound = {
    expanded?: Array<TaskActionsServiceApproveWithStepUpResponseExpanded$Outbound> | null | undefined;
    redirectUrl?: string | null | undefined;
    taskView?: TaskView$Outbound | null | undefined;
    ticketActionId?: string | null | undefined;
};
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpResponse$outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponse$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveWithStepUpResponse$ {
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpResponse$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpResponse>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpResponse$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveWithStepUpResponse$Outbound;
}
export declare function taskActionsServiceApproveWithStepUpResponseToJSON(taskActionsServiceApproveWithStepUpResponse: TaskActionsServiceApproveWithStepUpResponse): string;
export declare function taskActionsServiceApproveWithStepUpResponseFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveWithStepUpResponse, SDKValidationError>;
