/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The source of the external reference.
 */
export enum ExternalRefSource {
    Unspecified = "UNSPECIFIED",
    Jira = "JIRA",
}

/**
 * A reference to an external source. This value is unused currently, but may be brought back.
 */
export type ExternalRef = {
    /**
     * The source of the external reference.
     */
    externalRefSource?: ExternalRefSource | undefined;
    /**
     * The name of the external reference.
     */
    name?: string | undefined;
    /**
     * The URL to the external reference.
     */
    url?: string | undefined;
};

/** @internal */
export const ExternalRefSource$ = z.nativeEnum(ExternalRefSource);

/** @internal */
export namespace ExternalRef$ {
    export type Inbound = {
        externalRefSource?: ExternalRefSource | undefined;
        name?: string | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ExternalRef, z.ZodTypeDef, Inbound> = z
        .object({
            externalRefSource: ExternalRefSource$.optional(),
            name: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalRefSource === undefined
                    ? null
                    : { externalRefSource: v.externalRefSource }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        externalRefSource?: ExternalRefSource | undefined;
        name?: string | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExternalRef> = z
        .object({
            externalRefSource: ExternalRefSource$.optional(),
            name: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.externalRefSource === undefined
                    ? null
                    : { externalRefSource: v.externalRefSource }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}
