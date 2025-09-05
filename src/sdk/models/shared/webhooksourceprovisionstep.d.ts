import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookSourceProvisionStep message.
 */
export type WebhookSourceProvisionStep = {
    /**
     * The ticketId field.
     */
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceProvisionStep$inboundSchema: z.ZodType<WebhookSourceProvisionStep, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookSourceProvisionStep$Outbound = {
    ticketId?: string | null | undefined;
};
/** @internal */
export declare const WebhookSourceProvisionStep$outboundSchema: z.ZodType<WebhookSourceProvisionStep$Outbound, z.ZodTypeDef, WebhookSourceProvisionStep>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookSourceProvisionStep$ {
    /** @deprecated use `WebhookSourceProvisionStep$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookSourceProvisionStep, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookSourceProvisionStep$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookSourceProvisionStep$Outbound, z.ZodTypeDef, WebhookSourceProvisionStep>;
    /** @deprecated use `WebhookSourceProvisionStep$Outbound` instead. */
    type Outbound = WebhookSourceProvisionStep$Outbound;
}
export declare function webhookSourceProvisionStepToJSON(webhookSourceProvisionStep: WebhookSourceProvisionStep): string;
export declare function webhookSourceProvisionStepFromJSON(jsonString: string): SafeParseResult<WebhookSourceProvisionStep, SDKValidationError>;
