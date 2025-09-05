import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskRevokeSourceRequest message indicates that the source of the revoke task was a request.
 */
export type TaskRevokeSourceRequest = {
    /**
     * The ID of the user who initiated the revoke request.
     */
    requestUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceRequest$inboundSchema: z.ZodType<TaskRevokeSourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskRevokeSourceRequest$Outbound = {
    requestUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskRevokeSourceRequest$outboundSchema: z.ZodType<TaskRevokeSourceRequest$Outbound, z.ZodTypeDef, TaskRevokeSourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskRevokeSourceRequest$ {
    /** @deprecated use `TaskRevokeSourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskRevokeSourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskRevokeSourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskRevokeSourceRequest$Outbound, z.ZodTypeDef, TaskRevokeSourceRequest>;
    /** @deprecated use `TaskRevokeSourceRequest$Outbound` instead. */
    type Outbound = TaskRevokeSourceRequest$Outbound;
}
export declare function taskRevokeSourceRequestToJSON(taskRevokeSourceRequest: TaskRevokeSourceRequest): string;
export declare function taskRevokeSourceRequestFromJSON(jsonString: string): SafeParseResult<TaskRevokeSourceRequest, SDKValidationError>;
