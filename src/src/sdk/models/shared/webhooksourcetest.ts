/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The WebhookSourceTest message.
 */
export type WebhookSourceTest = {};

/** @internal */
export namespace WebhookSourceTest$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<WebhookSourceTest, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookSourceTest> = z.object(
        {}
    );
}
