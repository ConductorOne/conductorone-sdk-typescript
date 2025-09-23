import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookApproval message.
 */
export type WebhookApproval = {
    /**
     * The ID of the webhook to call for approval.
     */
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookApproval$inboundSchema: z.ZodType<WebhookApproval, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookApproval$Outbound = {
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookApproval$outboundSchema: z.ZodType<WebhookApproval$Outbound, z.ZodTypeDef, WebhookApproval>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookApproval$ {
    /** @deprecated use `WebhookApproval$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookApproval, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookApproval$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookApproval$Outbound, z.ZodTypeDef, WebhookApproval>;
    /** @deprecated use `WebhookApproval$Outbound` instead. */
    type Outbound = WebhookApproval$Outbound;
}
export declare function webhookApprovalToJSON(webhookApproval: WebhookApproval): string;
export declare function webhookApprovalFromJSON(jsonString: string): SafeParseResult<WebhookApproval, SDKValidationError>;
