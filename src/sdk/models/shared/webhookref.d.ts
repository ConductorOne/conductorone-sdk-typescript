import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The WebhookRef message.
 */
export type WebhookRef = {
    /**
     * The id field.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const WebhookRef$inboundSchema: z.ZodType<WebhookRef, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const WebhookRef$outboundSchema: z.ZodType<WebhookRef$Outbound, z.ZodTypeDef, WebhookRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookRef$ {
    /** @deprecated use `WebhookRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookRef$Outbound, z.ZodTypeDef, WebhookRef>;
    /** @deprecated use `WebhookRef$Outbound` instead. */
    type Outbound = WebhookRef$Outbound;
}
export declare function webhookRefToJSON(webhookRef: WebhookRef): string;
export declare function webhookRefFromJSON(jsonString: string): SafeParseResult<WebhookRef, SDKValidationError>;
