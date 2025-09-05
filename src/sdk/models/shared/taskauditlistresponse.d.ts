import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TaskAuditView, TaskAuditView$Outbound } from "./taskauditview.js";
/**
 * The TaskAuditListResponse message.
 */
export type TaskAuditListResponse = {
    /**
     * The list field.
     */
    list?: Array<TaskAuditView> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditListResponse$inboundSchema: z.ZodType<TaskAuditListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditListResponse$Outbound = {
    list?: Array<TaskAuditView$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditListResponse$outboundSchema: z.ZodType<TaskAuditListResponse$Outbound, z.ZodTypeDef, TaskAuditListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditListResponse$ {
    /** @deprecated use `TaskAuditListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditListResponse$Outbound, z.ZodTypeDef, TaskAuditListResponse>;
    /** @deprecated use `TaskAuditListResponse$Outbound` instead. */
    type Outbound = TaskAuditListResponse$Outbound;
}
export declare function taskAuditListResponseToJSON(taskAuditListResponse: TaskAuditListResponse): string;
export declare function taskAuditListResponseFromJSON(jsonString: string): SafeParseResult<TaskAuditListResponse, SDKValidationError>;
