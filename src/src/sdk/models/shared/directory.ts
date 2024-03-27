/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * This object indicates that an app is also a directory.
 */
export type Directory = {
    /**
     * The ID of the app associated with the directory.
     */
    appId?: string | undefined;
    createdAt?: Date | undefined;
    deletedAt?: Date | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace Directory$ {
    export type Inbound = {
        appId?: string | undefined;
        createdAt?: string | undefined;
        deletedAt?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Directory, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            deletedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        createdAt?: string | undefined;
        deletedAt?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Directory> = z
        .object({
            appId: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            deletedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}
