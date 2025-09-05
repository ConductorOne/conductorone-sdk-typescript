import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSourceWorkflowStep message.
 */
export type WebhookSourceWorkflowStep = {
    /**
     * The workflowExecutionId field.
     */
    workflowExecutionId?: number | null | undefined;
    /**
     * The workflowStepId field.
     */
    workflowStepId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceWorkflowStep$inboundSchema: z.ZodType<WebhookSourceWorkflowStep, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSourceWorkflowStep$Outbound = {
    workflowExecutionId?: string | null | undefined;
    workflowStepId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceWorkflowStep$outboundSchema: z.ZodType<WebhookSourceWorkflowStep$Outbound, z.ZodTypeDef, WebhookSourceWorkflowStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSourceWorkflowStep$ {
    /** @deprecated use `WebhookSourceWorkflowStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSourceWorkflowStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSourceWorkflowStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSourceWorkflowStep$Outbound, z.ZodTypeDef, WebhookSourceWorkflowStep>;
    /** @deprecated use `WebhookSourceWorkflowStep$Outbound` instead. */
    type Outbound = WebhookSourceWorkflowStep$Outbound;
}
export declare function webhookSourceWorkflowStepToJSON(webhookSourceWorkflowStep: WebhookSourceWorkflowStep): string;
export declare function webhookSourceWorkflowStepFromJSON(jsonString: string): SafeParseResult<WebhookSourceWorkflowStep, SDKValidationError>;
