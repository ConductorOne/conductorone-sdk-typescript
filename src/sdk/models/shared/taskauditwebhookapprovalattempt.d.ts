import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookApprovalAttempt message.
 */
export type TaskAuditWebhookApprovalAttempt = {
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
export declare const TaskAuditWebhookApprovalAttempt$inboundSchema: z.ZodType<TaskAuditWebhookApprovalAttempt, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookApprovalAttempt$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalAttempt$outboundSchema: z.ZodType<TaskAuditWebhookApprovalAttempt$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalAttempt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookApprovalAttempt$ {
    /** @deprecated use `TaskAuditWebhookApprovalAttempt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookApprovalAttempt, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookApprovalAttempt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookApprovalAttempt$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalAttempt>;
    /** @deprecated use `TaskAuditWebhookApprovalAttempt$Outbound` instead. */
    type Outbound = TaskAuditWebhookApprovalAttempt$Outbound;
}
export declare function taskAuditWebhookApprovalAttemptToJSON(taskAuditWebhookApprovalAttempt: TaskAuditWebhookApprovalAttempt): string;
export declare function taskAuditWebhookApprovalAttemptFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookApprovalAttempt, SDKValidationError>;
