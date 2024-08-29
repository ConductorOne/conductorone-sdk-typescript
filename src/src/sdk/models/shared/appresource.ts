/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The app resource message is a single resource that can have entitlements.
 */
export type AppResource = {
    /**
     * The app that this resource belongs to.
     */
    appId?: string | undefined;
    /**
     * The resource type that this resource is.
     */
    appResourceTypeId?: string | undefined;
    createdAt?: Date | undefined;
    /**
     * A custom description that can be set for a resource.
     */
    customDescription?: string | undefined;
    deletedAt?: Date | undefined;
    /**
     * The description set for the resource.
     */
    description?: string | undefined;
    /**
     * The display name for this resource.
     */
    displayName?: string | undefined;
    /**
     * The number of grants to this resource.
     */
    grantCount?: string | undefined;
    /**
     * The id of the resource.
     */
    id?: string | undefined;
    /**
     * The parent resource id, if this resource is a child of another resource.
     */
    parentAppResourceId?: string | undefined;
    /**
     * The parent resource type id, if this resource is a child of another resource.
     */
    parentAppResourceTypeId?: string | undefined;
    updatedAt?: Date | undefined;
};

/** @internal */
export namespace AppResource$ {
    export type Inbound = {
        appId?: string | undefined;
        appResourceTypeId?: string | undefined;
        createdAt?: string | undefined;
        customDescription?: string | undefined;
        deletedAt?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        grantCount?: string | undefined;
        id?: string | undefined;
        parentAppResourceId?: string | undefined;
        parentAppResourceTypeId?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const inboundSchema: z.ZodType<AppResource, z.ZodTypeDef, Inbound> = z
        .object({
            appId: z.string().optional(),
            appResourceTypeId: z.string().optional(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            customDescription: z.string().optional(),
            deletedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            grantCount: z.string().optional(),
            id: z.string().optional(),
            parentAppResourceId: z.string().optional(),
            parentAppResourceTypeId: z.string().optional(),
            updatedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.appResourceTypeId === undefined
                    ? null
                    : { appResourceTypeId: v.appResourceTypeId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.customDescription === undefined
                    ? null
                    : { customDescription: v.customDescription }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.grantCount === undefined ? null : { grantCount: v.grantCount }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.parentAppResourceId === undefined
                    ? null
                    : { parentAppResourceId: v.parentAppResourceId }),
                ...(v.parentAppResourceTypeId === undefined
                    ? null
                    : { parentAppResourceTypeId: v.parentAppResourceTypeId }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });

    export type Outbound = {
        appId?: string | undefined;
        appResourceTypeId?: string | undefined;
        createdAt?: string | undefined;
        customDescription?: string | undefined;
        deletedAt?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        grantCount?: string | undefined;
        id?: string | undefined;
        parentAppResourceId?: string | undefined;
        parentAppResourceTypeId?: string | undefined;
        updatedAt?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppResource> = z
        .object({
            appId: z.string().optional(),
            appResourceTypeId: z.string().optional(),
            createdAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            customDescription: z.string().optional(),
            deletedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            grantCount: z.string().optional(),
            id: z.string().optional(),
            parentAppResourceId: z.string().optional(),
            parentAppResourceTypeId: z.string().optional(),
            updatedAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.appResourceTypeId === undefined
                    ? null
                    : { appResourceTypeId: v.appResourceTypeId }),
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.customDescription === undefined
                    ? null
                    : { customDescription: v.customDescription }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.grantCount === undefined ? null : { grantCount: v.grantCount }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.parentAppResourceId === undefined
                    ? null
                    : { parentAppResourceId: v.parentAppResourceId }),
                ...(v.parentAppResourceTypeId === undefined
                    ? null
                    : { parentAppResourceTypeId: v.parentAppResourceTypeId }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
            };
        });
}
