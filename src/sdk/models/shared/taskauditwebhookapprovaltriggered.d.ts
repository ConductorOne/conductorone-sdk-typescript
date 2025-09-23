import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookApprovalTriggered message.
 */
export type TaskAuditWebhookApprovalTriggered = {
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
export declare const TaskAuditWebhookApprovalTriggered$inboundSchema: z.ZodType<TaskAuditWebhookApprovalTriggered, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookApprovalTriggered$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalTriggered$outboundSchema: z.ZodType<TaskAuditWebhookApprovalTriggered$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalTriggered>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookApprovalTriggered$ {
    /** @deprecated use `TaskAuditWebhookApprovalTriggered$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookApprovalTriggered, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookApprovalTriggered$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookApprovalTriggered$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalTriggered>;
    /** @deprecated use `TaskAuditWebhookApprovalTriggered$Outbound` instead. */
    type Outbound = TaskAuditWebhookApprovalTriggered$Outbound;
}
export declare function taskAuditWebhookApprovalTriggeredToJSON(taskAuditWebhookApprovalTriggered: TaskAuditWebhookApprovalTriggered): string;
export declare function taskAuditWebhookApprovalTriggeredFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookApprovalTriggered, SDKValidationError>;
