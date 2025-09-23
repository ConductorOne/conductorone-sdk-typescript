import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TaskAuditWebhookSuccess message.
 */
export type TaskAuditWebhookSuccess = {
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
export declare const TaskAuditWebhookSuccess$inboundSchema: z.ZodType<TaskAuditWebhookSuccess, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskAuditWebhookSuccess$Outbound = {
    webhookId?: string | null | undefined;
    webhookInstanceId?: string | null | undefined;
    webhookName?: string | null | undefined;
    webhookUrl?: string | null | undefined;
};
/** @internal */
export declare const TaskAuditWebhookSuccess$outboundSchema: z.ZodType<TaskAuditWebhookSuccess$Outbound, z.ZodTypeDef, TaskAuditWebhookSuccess>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskAuditWebhookSuccess$ {
    /** @deprecated use `TaskAuditWebhookSuccess$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskAuditWebhookSuccess, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskAuditWebhookSuccess$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskAuditWebhookSuccess$Outbound, z.ZodTypeDef, TaskAuditWebhookSuccess>;
    /** @deprecated use `TaskAuditWebhookSuccess$Outbound` instead. */
    type Outbound = TaskAuditWebhookSuccess$Outbound;
}
export declare function taskAuditWebhookSuccessToJSON(taskAuditWebhookSuccess: TaskAuditWebhookSuccess): string;
export declare function taskAuditWebhookSuccessFromJSON(jsonString: string): SafeParseResult<TaskAuditWebhookSuccess, SDKValidationError>;
