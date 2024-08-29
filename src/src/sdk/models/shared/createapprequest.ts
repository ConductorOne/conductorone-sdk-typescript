/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The CreateAppRequest message is used to create a new app.
 */
export type CreateAppRequest = {
    /**
     * Creates the app with this certify policy.
     */
    certifyPolicyId?: string | undefined;
    /**
     * Creates the app with this description.
     */
    description?: string | undefined;
    /**
     * Creates the app with this display name.
     */
    displayName?: string | undefined;
    /**
     * Creates the app with this grant policy.
     */
    grantPolicyId?: string | undefined;
    /**
     * Creates the app with this monthly cost per seat.
     */
    monthlyCostUsd?: number | undefined;
    /**
     * Creates the app with this array of owners.
     */
    owners?: Array<string> | null | undefined;
    /**
     * Creates the app with this revoke policy.
     */
    revokePolicyId?: string | undefined;
};

/** @internal */
export namespace CreateAppRequest$ {
    export type Inbound = {
        certifyPolicyId?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        grantPolicyId?: string | undefined;
        monthlyCostUsd?: number | undefined;
        owners?: Array<string> | null | undefined;
        revokePolicyId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateAppRequest, z.ZodTypeDef, Inbound> = z
        .object({
            certifyPolicyId: z.string().optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            grantPolicyId: z.string().optional(),
            monthlyCostUsd: z.number().int().optional(),
            owners: z.nullable(z.array(z.string())).optional(),
            revokePolicyId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.certifyPolicyId === undefined
                    ? null
                    : { certifyPolicyId: v.certifyPolicyId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.grantPolicyId === undefined ? null : { grantPolicyId: v.grantPolicyId }),
                ...(v.monthlyCostUsd === undefined ? null : { monthlyCostUsd: v.monthlyCostUsd }),
                ...(v.owners === undefined ? null : { owners: v.owners }),
                ...(v.revokePolicyId === undefined ? null : { revokePolicyId: v.revokePolicyId }),
            };
        });

    export type Outbound = {
        certifyPolicyId?: string | undefined;
        description?: string | undefined;
        displayName?: string | undefined;
        grantPolicyId?: string | undefined;
        monthlyCostUsd?: number | undefined;
        owners?: Array<string> | null | undefined;
        revokePolicyId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateAppRequest> = z
        .object({
            certifyPolicyId: z.string().optional(),
            description: z.string().optional(),
            displayName: z.string().optional(),
            grantPolicyId: z.string().optional(),
            monthlyCostUsd: z.number().int().optional(),
            owners: z.nullable(z.array(z.string())).optional(),
            revokePolicyId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.certifyPolicyId === undefined
                    ? null
                    : { certifyPolicyId: v.certifyPolicyId }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.displayName === undefined ? null : { displayName: v.displayName }),
                ...(v.grantPolicyId === undefined ? null : { grantPolicyId: v.grantPolicyId }),
                ...(v.monthlyCostUsd === undefined ? null : { monthlyCostUsd: v.monthlyCostUsd }),
                ...(v.owners === undefined ? null : { owners: v.owners }),
                ...(v.revokePolicyId === undefined ? null : { revokePolicyId: v.revokePolicyId }),
            };
        });
}
