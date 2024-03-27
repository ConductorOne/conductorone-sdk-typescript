/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The TaskRevokeSourceNonUsage message indicates that the source of the revoke task is due to the grant not being used.
 */
export type TaskRevokeSourceNonUsage = {
    expiresAt?: Date | undefined;
    lastLogin?: Date | undefined;
};

/** @internal */
export namespace TaskRevokeSourceNonUsage$ {
    export type Inbound = {
        expiresAt?: string | undefined;
        lastLogin?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskRevokeSourceNonUsage, z.ZodTypeDef, Inbound> = z
        .object({
            expiresAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            lastLogin: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                ...(v.lastLogin === undefined ? null : { lastLogin: v.lastLogin }),
            };
        });

    export type Outbound = {
        expiresAt?: string | undefined;
        lastLogin?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskRevokeSourceNonUsage> = z
        .object({
            expiresAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            lastLogin: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                ...(v.lastLogin === undefined ? null : { lastLogin: v.lastLogin }),
            };
        });
}
