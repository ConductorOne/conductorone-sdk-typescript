/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * This policy step indicates that a ticket should have an approved outcome. This is a terminal approval state and is used to explicitly define the end of approval steps.
 */
export type Accept = {
    /**
     * An optional message to include in the comments when a task is automatically accepted.
     */
    acceptMessage?: string | undefined;
};

/** @internal */
export namespace Accept$ {
    export type Inbound = {
        acceptMessage?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Accept, z.ZodTypeDef, Inbound> = z
        .object({
            acceptMessage: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptMessage === undefined ? null : { acceptMessage: v.acceptMessage }),
            };
        });

    export type Outbound = {
        acceptMessage?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Accept> = z
        .object({
            acceptMessage: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.acceptMessage === undefined ? null : { acceptMessage: v.acceptMessage }),
            };
        });
}
