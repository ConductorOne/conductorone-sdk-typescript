import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSourceApprovalStep message.
 */
export type WebhookSourceApprovalStep = {
    /**
     * The ticketId field.
     */
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceApprovalStep$inboundSchema: z.ZodType<WebhookSourceApprovalStep, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSourceApprovalStep$Outbound = {
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceApprovalStep$outboundSchema: z.ZodType<WebhookSourceApprovalStep$Outbound, z.ZodTypeDef, WebhookSourceApprovalStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSourceApprovalStep$ {
    /** @deprecated use `WebhookSourceApprovalStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSourceApprovalStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSourceApprovalStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSourceApprovalStep$Outbound, z.ZodTypeDef, WebhookSourceApprovalStep>;
    /** @deprecated use `WebhookSourceApprovalStep$Outbound` instead. */
    type Outbound = WebhookSourceApprovalStep$Outbound;
}
export declare function webhookSourceApprovalStepToJSON(webhookSourceApprovalStep: WebhookSourceApprovalStep): string;
export declare function webhookSourceApprovalStepFromJSON(jsonString: string): SafeParseResult<WebhookSourceApprovalStep, SDKValidationError>;
