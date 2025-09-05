import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskRevokeSourceReview message tracks which access review was the source of the specificed revoke ticket.
 */
export type TaskRevokeSourceReview = {
    /**
     * The ID of the access review associated with the revoke task.
     */
    accessReviewId?: string | null | undefined;
    /**
     * The ID of the certify ticket that was denied and created this revoke task.
     */
    certTicketId?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceReview$inboundSchema: z.ZodType<TaskRevokeSourceReview, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRevokeSourceReview$Outbound = {
    accessReviewId?: string | null | undefined;
    certTicketId?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceReview$outboundSchema: z.ZodType<TaskRevokeSourceReview$Outbound, z.ZodTypeDef, TaskRevokeSourceReview>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRevokeSourceReview$ {
    /** @deprecated use `TaskRevokeSourceReview$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRevokeSourceReview, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRevokeSourceReview$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRevokeSourceReview$Outbound, z.ZodTypeDef, TaskRevokeSourceReview>;
    /** @deprecated use `TaskRevokeSourceReview$Outbound` instead. */
    type Outbound = TaskRevokeSourceReview$Outbound;
}
export declare function taskRevokeSourceReviewToJSON(taskRevokeSourceReview: TaskRevokeSourceReview): string;
export declare function taskRevokeSourceReviewFromJSON(jsonString: string): SafeParseResult<TaskRevokeSourceReview, SDKValidationError>;
