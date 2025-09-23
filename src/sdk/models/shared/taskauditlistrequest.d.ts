import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskAuditViewRef, TaskAuditViewRef$Outbound } from "./taskauditviewref.js";
/**
 * The TaskAuditListRequest message.
 */
export type TaskAuditListRequest = {
    /**
     * The pageSize field.
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<TaskAuditViewRef> | null | undefined;
    /**
     * The taskId field.
     */
    taskId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditListRequest$inboundSchema: z.ZodType<TaskAuditListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditListRequest$Outbound = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    refs?: Array<TaskAuditViewRef$Outbound> | null | undefined;
    taskId?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditListRequest$outboundSchema: z.ZodType<TaskAuditListRequest$Outbound, z.ZodTypeDef, TaskAuditListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditListRequest$ {
    /** @deprecated use `TaskAuditListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditListRequest$Outbound, z.ZodTypeDef, TaskAuditListRequest>;
    /** @deprecated use `TaskAuditListRequest$Outbound` instead. */
    type Outbound = TaskAuditListRequest$Outbound;
}
export declare function taskAuditListRequestToJSON(taskAuditListRequest: TaskAuditListRequest): string;
export declare function taskAuditListRequestFromJSON(jsonString: string): SafeParseResult<TaskAuditListRequest, SDKValidationError>;
