import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { WebhookSource, WebhookSource$Outbound } from "./webhooksource.js";
import { WebhookSpec, WebhookSpec$Outbound } from "./webhookspec.js";
/**
 * The state field.
 */
export declare const WebhookInstanceState: {
    readonly WebhookStateUnspecified: "WEBHOOK_STATE_UNSPECIFIED";
    readonly WebhookStatePending: "WEBHOOK_STATE_PENDING";
    readonly WebhookStateRunning: "WEBHOOK_STATE_RUNNING";
    readonly WebhookStateError: "WEBHOOK_STATE_ERROR";
    readonly WebhookStateWaitingCallback: "WEBHOOK_STATE_WAITING_CALLBACK";
    readonly WebhookStateProcessResponse: "WEBHOOK_STATE_PROCESS_RESPONSE";
    readonly WebhookStateSuccess: "WEBHOOK_STATE_SUCCESS";
    readonly WebhookStateFatalError: "WEBHOOK_STATE_FATAL_ERROR";
};
/**
 * The state field.
 */
export type WebhookInstanceState = OpenEnum<typeof WebhookInstanceState>;
/**
 * The WebhookInstance message.
 */
export type WebhookInstance = {
    /**
     * The attempts field.
     */
    attempts?: number | null | undefined;
    completedAt?: Date | null | undefined;
    createdAt?: Date | null | undefined;
    expiresAt?: Date | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    lastAttemptedAt?: Date | null | undefined;
    source?: WebhookSource | null | undefined;
    spec?: WebhookSpec | null | undefined;
    /**
     * The state field.
     */
    state?: WebhookInstanceState | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The webhookId field.
     */
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookInstanceState$inboundSchema: z.ZodType<WebhookInstanceState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const WebhookInstanceState$outboundSchema: z.ZodType<WebhookInstanceState, z.ZodTypeDef, WebhookInstanceState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookInstanceState$ {
    /** @deprecated use `WebhookInstanceState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookInstanceState, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookInstanceState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookInstanceState, z.ZodTypeDef, WebhookInstanceState>;
}
/** @internal */
export declare const WebhookInstance$inboundSchema: z.ZodType<WebhookInstance, z.ZodTypeDef, unknown>;
/** @internal */
export type WebhookInstance$Outbound = {
    attempts?: number | null | undefined;
    completedAt?: string | null | undefined;
    createdAt?: string | null | undefined;
    expiresAt?: string | null | undefined;
    id?: string | null | undefined;
    lastAttemptedAt?: string | null | undefined;
    source?: WebhookSource$Outbound | null | undefined;
    spec?: WebhookSpec$Outbound | null | undefined;
    state?: string | null | undefined;
    updatedAt?: string | null | undefined;
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const WebhookInstance$outboundSchema: z.ZodType<WebhookInstance$Outbound, z.ZodTypeDef, WebhookInstance>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace WebhookInstance$ {
    /** @deprecated use `WebhookInstance$inboundSchema` instead. */
    const inboundSchema: z.ZodType<WebhookInstance, z.ZodTypeDef, unknown>;
    /** @deprecated use `WebhookInstance$outboundSchema` instead. */
    const outboundSchema: z.ZodType<WebhookInstance$Outbound, z.ZodTypeDef, WebhookInstance>;
    /** @deprecated use `WebhookInstance$Outbound` instead. */
    type Outbound = WebhookInstance$Outbound;
}
export declare function webhookInstanceToJSON(webhookInstance: WebhookInstance): string;
export declare function webhookInstanceFromJSON(jsonString: string): SafeParseResult<WebhookInstance, SDKValidationError>;
