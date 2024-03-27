/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The outcome of the certification.
 */
export enum Outcome {
    CertifyOutcomeUnspecified = "CERTIFY_OUTCOME_UNSPECIFIED",
    CertifyOutcomeCertified = "CERTIFY_OUTCOME_CERTIFIED",
    CertifyOutcomeDecertified = "CERTIFY_OUTCOME_DECERTIFIED",
    CertifyOutcomeError = "CERTIFY_OUTCOME_ERROR",
    CertifyOutcomeCancelled = "CERTIFY_OUTCOME_CANCELLED",
}

/**
 * The TaskTypeCertify message indicates that a task is a certify task and all related details.
 */
export type TaskTypeCertify = {
    /**
     * The ID of the access review.
     */
    accessReviewId?: string | undefined;
    /**
     * The ID of the specific access review object that owns this certify task. This is also set on a revoke task if the revoke task is created from the denied outcome of a certify task.
     */
    accessReviewSelection?: string | undefined;
    /**
     * The ID of the app entitlement.
     */
    appEntitlementId?: string | undefined;
    /**
     * The ID of the app.
     */
    appId?: string | undefined;
    /**
     * The ID of the app user.
     */
    appUserId?: string | undefined;
    /**
     * The ID of the user.
     */
    identityUserId?: string | undefined;
    /**
     * The outcome of the certification.
     */
    outcome?: Outcome | undefined;
    outcomeTime?: Date | undefined;
};

/** @internal */
export const Outcome$ = z.nativeEnum(Outcome);

/** @internal */
export namespace TaskTypeCertify$ {
    export type Inbound = {
        accessReviewId?: string | undefined;
        accessReviewSelection?: string | undefined;
        appEntitlementId?: string | undefined;
        appId?: string | undefined;
        appUserId?: string | undefined;
        identityUserId?: string | undefined;
        outcome?: Outcome | undefined;
        outcomeTime?: string | undefined;
    };

    export const inboundSchema: z.ZodType<TaskTypeCertify, z.ZodTypeDef, Inbound> = z
        .object({
            accessReviewId: z.string().optional(),
            accessReviewSelection: z.string().optional(),
            appEntitlementId: z.string().optional(),
            appId: z.string().optional(),
            appUserId: z.string().optional(),
            identityUserId: z.string().optional(),
            outcome: Outcome$.optional(),
            outcomeTime: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.accessReviewId === undefined ? null : { accessReviewId: v.accessReviewId }),
                ...(v.accessReviewSelection === undefined
                    ? null
                    : { accessReviewSelection: v.accessReviewSelection }),
                ...(v.appEntitlementId === undefined
                    ? null
                    : { appEntitlementId: v.appEntitlementId }),
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.appUserId === undefined ? null : { appUserId: v.appUserId }),
                ...(v.identityUserId === undefined ? null : { identityUserId: v.identityUserId }),
                ...(v.outcome === undefined ? null : { outcome: v.outcome }),
                ...(v.outcomeTime === undefined ? null : { outcomeTime: v.outcomeTime }),
            };
        });

    export type Outbound = {
        accessReviewId?: string | undefined;
        accessReviewSelection?: string | undefined;
        appEntitlementId?: string | undefined;
        appId?: string | undefined;
        appUserId?: string | undefined;
        identityUserId?: string | undefined;
        outcome?: Outcome | undefined;
        outcomeTime?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TaskTypeCertify> = z
        .object({
            accessReviewId: z.string().optional(),
            accessReviewSelection: z.string().optional(),
            appEntitlementId: z.string().optional(),
            appId: z.string().optional(),
            appUserId: z.string().optional(),
            identityUserId: z.string().optional(),
            outcome: Outcome$.optional(),
            outcomeTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.accessReviewId === undefined ? null : { accessReviewId: v.accessReviewId }),
                ...(v.accessReviewSelection === undefined
                    ? null
                    : { accessReviewSelection: v.accessReviewSelection }),
                ...(v.appEntitlementId === undefined
                    ? null
                    : { appEntitlementId: v.appEntitlementId }),
                ...(v.appId === undefined ? null : { appId: v.appId }),
                ...(v.appUserId === undefined ? null : { appUserId: v.appUserId }),
                ...(v.identityUserId === undefined ? null : { identityUserId: v.identityUserId }),
                ...(v.outcome === undefined ? null : { outcome: v.outcome }),
                ...(v.outcomeTime === undefined ? null : { outcomeTime: v.outcomeTime }),
            };
        });
}
