/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Signal the connector to start syncing. This puts the sync on the queue. It does not guarantee immediate sync. Long syncs still take minutes to hours.
 */
export type ForceSyncRequest = {};

/** @internal */
export namespace ForceSyncRequest$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<ForceSyncRequest, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForceSyncRequest> = z.object({});
}