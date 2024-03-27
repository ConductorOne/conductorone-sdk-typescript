/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The ValidatePolicyCELRequest message.
 */
export type ValidatePolicyCELRequest = {
    /**
     * The cel field.
     */
    cel?: string | undefined;
};

/** @internal */
export namespace ValidatePolicyCELRequest$ {
    export type Inbound = {
        cel?: string | undefined;
    };

    export const inboundSchema: z.ZodType<ValidatePolicyCELRequest, z.ZodTypeDef, Inbound> = z
        .object({
            cel: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cel === undefined ? null : { cel: v.cel }),
            };
        });

    export type Outbound = {
        cel?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ValidatePolicyCELRequest> = z
        .object({
            cel: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.cel === undefined ? null : { cel: v.cel }),
            };
        });
}
