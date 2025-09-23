import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookAttempt message.
 */
export type TaskAuditWebhookAttempt = {
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
export declare const TaskAuditWebhookAttempt$inboundSchema: z.ZodType<TaskAuditWebhookAttempt, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookAttempt$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookAttempt$outboundSchema: z.ZodType<TaskAuditWebhookAttempt$Outbound, z.ZodTypeDef, TaskAuditWebhookAttempt>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookAttempt$ {
    /** @deprecated use `TaskAuditWebhookAttempt$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookAttempt, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookAttempt$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookAttempt$Outbound, z.ZodTypeDef, TaskAuditWebhookAttempt>;
    /** @deprecated use `TaskAuditWebhookAttempt$Outbound` instead. */
    type Outbound = TaskAuditWebhookAttempt$Outbound;
}
export declare function taskAuditWebhookAttemptToJSON(taskAuditWebhookAttempt: TaskAuditWebhookAttempt): string;
export declare function taskAuditWebhookAttemptFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookAttempt, SDKValidationError>;
