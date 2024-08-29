/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The app entitlement expand mask allows the user to get additional information when getting responses containing app entitlement views.
 */
export type AppEntitlementExpandMask = {
    /**
     * Array of strings to describe which items to expand on the return value. Can be any combination of "*", "app_id", "app_resource_type_id", or "app_resource_id".
     */
    paths?: Array<string> | null | undefined;
};

/** @internal */
export namespace AppEntitlementExpandMask$ {
    export type Inbound = {
        paths?: Array<string> | null | undefined;
    };

    export const inboundSchema: z.ZodType<AppEntitlementExpandMask, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AppEntitlementExpandMask> = z
        .object({
            paths: z.nullable(z.array(z.string())).optional(),
        })
        .transform((v) => {
            return {
                ...(v.paths === undefined ? null : { paths: v.paths }),
            };
        });
}
