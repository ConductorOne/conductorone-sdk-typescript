import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSourcePolicyPostAction message.
 */
export type WebhookSourcePolicyPostAction = {
    /**
     * The ticketId field.
     */
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourcePolicyPostAction$inboundSchema: z.ZodType<WebhookSourcePolicyPostAction, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSourcePolicyPostAction$Outbound = {
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourcePolicyPostAction$outboundSchema: z.ZodType<WebhookSourcePolicyPostAction$Outbound, z.ZodTypeDef, WebhookSourcePolicyPostAction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSourcePolicyPostAction$ {
    /** @deprecated use `WebhookSourcePolicyPostAction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSourcePolicyPostAction, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSourcePolicyPostAction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSourcePolicyPostAction$Outbound, z.ZodTypeDef, WebhookSourcePolicyPostAction>;
    /** @deprecated use `WebhookSourcePolicyPostAction$Outbound` instead. */
    type Outbound = WebhookSourcePolicyPostAction$Outbound;
}
export declare function webhookSourcePolicyPostActionToJSON(webhookSourcePolicyPostAction: WebhookSourcePolicyPostAction): string;
export declare function webhookSourcePolicyPostActionFromJSON(jsonString: string): SafeParseResult<WebhookSourcePolicyPostAction, SDKValidationError>;
