import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookApprovalBadResponse message.
 */
export type TaskAuditWebhookApprovalBadResponse = {
    /**
     * The error field.
     */
    error?: string | null | undefined;
    /**
     * The webhookId field.
     */
    webhookId?: string | null | undefined;
    /**
     * The webhookInstanceId field.
     */
    webhookInstanceId?: string | null | undefined;
    /**
     * The webhookName field.
     */
    webhookName?: string | null | undefined;
    /**
     * The webhookUrl field.
     */
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalBadResponse$inboundSchema: z.ZodType<TaskAuditWebhookApprovalBadResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookApprovalBadResponse$Outbound = {
    error?: string | null | undefined;
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalBadResponse$outboundSchema: z.ZodType<TaskAuditWebhookApprovalBadResponse$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalBadResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookApprovalBadResponse$ {
    /** @deprecated use `TaskAuditWebhookApprovalBadResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookApprovalBadResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookApprovalBadResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookApprovalBadResponse$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalBadResponse>;
    /** @deprecated use `TaskAuditWebhookApprovalBadResponse$Outbound` instead. */
    type Outbound = TaskAuditWebhookApprovalBadResponse$Outbound;
}
export declare function taskAuditWebhookApprovalBadResponseToJSON(taskAuditWebhookApprovalBadResponse: TaskAuditWebhookApprovalBadResponse): string;
export declare function taskAuditWebhookApprovalBadResponseFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookApprovalBadResponse, SDKValidationError>;
