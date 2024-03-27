/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The fields to be included in the directory response.
 */
export type DirectoryExpandMask = {
    /**
     * An array of fields to be included in the directory response.
     */
    paths?: Array<string> | null | undefined;
};

/** @internal */
export namespace DirectoryExpandMask$ {
    export type Inbound = {
        paths?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<DirectoryExpandMask, z.ZodTypeDef, Inbound> = z
        .object({
            paths: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.paths === undefined ? null : { paths: v.paths }),
            };
        });

    export type Outbound = {
        paths?: Array<string> | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DirectoryExpandMask> = z
        .object({
            paths: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.paths === undefined ? null : { paths: v.paths }),
            };
        });
}
