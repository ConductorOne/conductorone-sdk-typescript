import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.
 */
export type TaskExpandMask = {
    /**
     * A list of paths to expand in the response. May be any combination of "*", "access_review_id", "user_id", "created_by_user_id", "app_id", "app_user_id", "app_entitlement_ids", "step_approver_ids", "identity_user_id", and "insight_ids".
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const TaskExpandMask$inboundSchema: z.ZodType<TaskExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const TaskExpandMask$outboundSchema: z.ZodType<TaskExpandMask$Outbound, z.ZodTypeDef, TaskExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskExpandMask$ {
    /** @deprecated use `TaskExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskExpandMask$Outbound, z.ZodTypeDef, TaskExpandMask>;
    /** @deprecated use `TaskExpandMask$Outbound` instead. */
    type Outbound = TaskExpandMask$Outbound;
}
export declare function taskExpandMaskToJSON(taskExpandMask: TaskExpandMask): string;
export declare function taskExpandMaskFromJSON(jsonString: string): SafeParseResult<TaskExpandMask, SDKValidationError>;
