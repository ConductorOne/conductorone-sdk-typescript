import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookApprovalSuccess message.
 */
export type TaskAuditWebhookApprovalSuccess = {
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
export declare const TaskAuditWebhookApprovalSuccess$inboundSchema: z.ZodType<TaskAuditWebhookApprovalSuccess, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookApprovalSuccess$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalSuccess$outboundSchema: z.ZodType<TaskAuditWebhookApprovalSuccess$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalSuccess>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookApprovalSuccess$ {
    /** @deprecated use `TaskAuditWebhookApprovalSuccess$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookApprovalSuccess, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookApprovalSuccess$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookApprovalSuccess$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalSuccess>;
    /** @deprecated use `TaskAuditWebhookApprovalSuccess$Outbound` instead. */
    type Outbound = TaskAuditWebhookApprovalSuccess$Outbound;
}
export declare function taskAuditWebhookApprovalSuccessToJSON(taskAuditWebhookApprovalSuccess: TaskAuditWebhookApprovalSuccess): string;
export declare function taskAuditWebhookApprovalSuccessFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookApprovalSuccess, SDKValidationError>;
