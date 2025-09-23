import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The Webhook message.
 *
 * @remarks
 *
 * This message contains a oneof named webhook_identifier. Only a single field of the following list may be set at a time:
 *   - webhookId
 *   - webhookIdCel
 */
export type Webhook = {
    payload?: {
        [k: string]: any;
    } | null | undefined;
    /**
     * The webhookId field.
     *
     * @remarks
     * This field is part of the `webhook_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.Webhook` for more details.
     */
    webhookId?: string | null | undefined;
    /**
     * The webhookIdCel field.
     *
     * @remarks
     * This field is part of the `webhook_identifier` oneof.
     * See the documentation for `c1.api.automations.v1.Webhook` for more details.
     */
    webhookIdCel?: string | null | undefined;
};
/** @internal */
export declare const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown>;
/** @internal */
export type Webhook$Outbound = {
    payload?: {
        [k: string]: any;
    } | null | undefined;
    webhookId?: string | null | undefined;
    webhookIdCel?: string | null | undefined;
};
/** @internal */
export declare const Webhook$outboundSchema: z.ZodType<Webhook$Outbound, z.ZodTypeDef, Webhook>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Webhook$ {
    /** @deprecated use `Webhook$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown>;
    /** @deprecated use `Webhook$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Webhook$Outbound, z.ZodTypeDef, Webhook>;
    /** @deprecated use `Webhook$Outbound` instead. */
    type Outbound = Webhook$Outbound;
}
export declare function webhookToJSON(webhook: Webhook): string;
export declare function webhookFromJSON(jsonString: string): SafeParseResult<Webhook, SDKValidationError>;
