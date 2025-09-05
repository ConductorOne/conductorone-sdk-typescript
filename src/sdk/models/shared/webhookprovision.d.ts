import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This provision step indicates that a webhook should be called to provision this entitlement.
 */
export type WebhookProvision = {
    /**
     * The ID of the webhook to call for provisioning.
     */
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookProvision$inboundSchema: z.ZodType<WebhookProvision, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookProvision$Outbound = {
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookProvision$outboundSchema: z.ZodType<WebhookProvision$Outbound, z.ZodTypeDef, WebhookProvision>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookProvision$ {
    /** @deprecated use `WebhookProvision$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookProvision, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookProvision$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookProvision$Outbound, z.ZodTypeDef, WebhookProvision>;
    /** @deprecated use `WebhookProvision$Outbound` instead. */
    type Outbound = WebhookProvision$Outbound;
}
export declare function webhookProvisionToJSON(webhookProvision: WebhookProvision): string;
export declare function webhookProvisionFromJSON(jsonString: string): SafeParseResult<WebhookProvision, SDKValidationError>;
