import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Payload = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * The Body message.
 */
export type Body = {
    /**
     * If your receiver returns HTTP Status Code 202 Accepted, it MUST send its resposne to this URL as a POST
     *
     * @remarks
     *  message body.
     *
     *  If your receiver returns any other status code, it is expected to not use the callback url.
     *
     *  This value will match the "Webhook-Callback-Url" header.
     */
    callbackUrl?: string | null | undefined;
    /**
     * The type of event that triggered this Webhook.
     *
     * @remarks
     *
     *  This value will match the "Webhook-Event" header.
     *
     *  The value will be one of:
     *  - "c1.webhooks.v1.PayloadTest"
     *  - "c1.webhooks.v1.PayloadPolicyApprovalStep"
     *  - "c1.webhooks.v1.PayloadPolicyPostAction"
     *  - "c1.webhooks.v1.PayloadProvisionStep"
     */
    event?: string | null | undefined;
    payload?: Payload | null | undefined;
    /**
     * version contains the constant value "v1". Future versions of the Webhook body will use a different string.
     *
     * @remarks
     *
     *  This value will match the "Webhook-Version" header.
     */
    version?: string | null | undefined;
    /**
     * Unique ID for this Webhook. Your receiver should only process this ID once.
     *
     * @remarks
     *
     *  This value will match the "Webhook-Id" header.
     */
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const Payload$inboundSchema: z.ZodType<Payload, z.ZodTypeDef, unknown>;
/** @internal */
export type Payload$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Payload$outboundSchema: z.ZodType<Payload$Outbound, z.ZodTypeDef, Payload>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Payload$ {
    /** @deprecated use `Payload$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Payload, z.ZodTypeDef, unknown>;
    /** @deprecated use `Payload$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Payload$Outbound, z.ZodTypeDef, Payload>;
    /** @deprecated use `Payload$Outbound` instead. */
    type Outbound = Payload$Outbound;
}
export declare function payloadToJSON(payload: Payload): string;
export declare function payloadFromJSON(jsonString: string): SafeParseResult<Payload, SDKValidationError>;
/** @internal */
export declare const Body$inboundSchema: z.ZodType<Body, z.ZodTypeDef, unknown>;
/** @internal */
export type Body$Outbound = {
    callbackUrl?: string | null | undefined;
    event?: string | null | undefined;
    payload?: Payload$Outbound | null | undefined;
    version?: string | null | undefined;
    webhookId?: string | null | undefined;
};
/** @internal */
export declare const Body$outboundSchema: z.ZodType<Body$Outbound, z.ZodTypeDef, Body>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Body$ {
    /** @deprecated use `Body$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Body, z.ZodTypeDef, unknown>;
    /** @deprecated use `Body$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Body$Outbound, z.ZodTypeDef, Body>;
    /** @deprecated use `Body$Outbound` instead. */
    type Outbound = Body$Outbound;
}
export declare function bodyToJSON(body: Body): string;
export declare function bodyFromJSON(jsonString: string): SafeParseResult<Body, SDKValidationError>;
