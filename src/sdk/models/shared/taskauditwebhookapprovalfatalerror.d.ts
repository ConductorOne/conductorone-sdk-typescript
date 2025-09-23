import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookApprovalFatalError message.
 */
export type TaskAuditWebhookApprovalFatalError = {
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
export declare const TaskAuditWebhookApprovalFatalError$inboundSchema: z.ZodType<TaskAuditWebhookApprovalFatalError, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookApprovalFatalError$Outbound = {
    error?: string | null | undefined;
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookApprovalFatalError$outboundSchema: z.ZodType<TaskAuditWebhookApprovalFatalError$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalFatalError>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookApprovalFatalError$ {
    /** @deprecated use `TaskAuditWebhookApprovalFatalError$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookApprovalFatalError, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookApprovalFatalError$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookApprovalFatalError$Outbound, z.ZodTypeDef, TaskAuditWebhookApprovalFatalError>;
    /** @deprecated use `TaskAuditWebhookApprovalFatalError$Outbound` instead. */
    type Outbound = TaskAuditWebhookApprovalFatalError$Outbound;
}
export declare function taskAuditWebhookApprovalFatalErrorToJSON(taskAuditWebhookApprovalFatalError: TaskAuditWebhookApprovalFatalError): string;
export declare function taskAuditWebhookApprovalFatalErrorFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookApprovalFatalError, SDKValidationError>;
