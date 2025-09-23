import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookTriggered message.
 */
export type TaskAuditWebhookTriggered = {
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
export declare const TaskAuditWebhookTriggered$inboundSchema: z.ZodType<TaskAuditWebhookTriggered, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookTriggered$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookTriggered$outboundSchema: z.ZodType<TaskAuditWebhookTriggered$Outbound, z.ZodTypeDef, TaskAuditWebhookTriggered>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookTriggered$ {
    /** @deprecated use `TaskAuditWebhookTriggered$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookTriggered, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookTriggered$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookTriggered$Outbound, z.ZodTypeDef, TaskAuditWebhookTriggered>;
    /** @deprecated use `TaskAuditWebhookTriggered$Outbound` instead. */
    type Outbound = TaskAuditWebhookTriggered$Outbound;
}
export declare function taskAuditWebhookTriggeredToJSON(taskAuditWebhookTriggered: TaskAuditWebhookTriggered): string;
export declare function taskAuditWebhookTriggeredFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookTriggered, SDKValidationError>;
