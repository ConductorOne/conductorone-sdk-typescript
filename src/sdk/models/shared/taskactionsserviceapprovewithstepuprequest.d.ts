import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskExpandMask, TaskExpandMask$Outbound } from "./taskexpandmask.js";
/**
 * TaskActionsServiceApproveWithStepUpRequest is used to approve a task with step-up authentication
 */
export type TaskActionsServiceApproveWithStepUpRequest = {
    /**
     * The comment attached to the request.
     */
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask | null | undefined;
    /**
     * The ID of the policy step on the given task to approve.
     */
    policyStepId: string;
    /**
     * The step-up transaction ID that was verified.
     *
     * @remarks
     *  If unset, the response will include a redirect URL to
     *  complete the step-up authentication.
     */
    stepUpTransactionId: string;
};
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpRequest$inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskActionsServiceApproveWithStepUpRequest$Outbound = {
    comment?: string | null | undefined;
    expandMask?: TaskExpandMask$Outbound | null | undefined;
    policyStepId: string;
    stepUpTransactionId: string;
};
/** @internal */
export declare const TaskActionsServiceApproveWithStepUpRequest$outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpRequest$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskActionsServiceApproveWithStepUpRequest$ {
    /** @deprecated use `TaskActionsServiceApproveWithStepUpRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskActionsServiceApproveWithStepUpRequest$Outbound, z.ZodTypeDef, TaskActionsServiceApproveWithStepUpRequest>;
    /** @deprecated use `TaskActionsServiceApproveWithStepUpRequest$Outbound` instead. */
    type Outbound = TaskActionsServiceApproveWithStepUpRequest$Outbound;
}
export declare function taskActionsServiceApproveWithStepUpRequestToJSON(taskActionsServiceApproveWithStepUpRequest: TaskActionsServiceApproveWithStepUpRequest): string;
export declare function taskActionsServiceApproveWithStepUpRequestFromJSON(jsonString: string): SafeParseResult<TaskActionsServiceApproveWithStepUpRequest, SDKValidationError>;
