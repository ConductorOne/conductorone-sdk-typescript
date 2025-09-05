import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome of the certification.
 */
export declare const Outcome: {
    readonly CertifyOutcomeUnspecified: "CERTIFY_OUTCOME_UNSPECIFIED";
    readonly CertifyOutcomeCertified: "CERTIFY_OUTCOME_CERTIFIED";
    readonly CertifyOutcomeDecertified: "CERTIFY_OUTCOME_DECERTIFIED";
    readonly CertifyOutcomeError: "CERTIFY_OUTCOME_ERROR";
    readonly CertifyOutcomeCancelled: "CERTIFY_OUTCOME_CANCELLED";
    readonly CertifyOutcomeWaitTimedOut: "CERTIFY_OUTCOME_WAIT_TIMED_OUT";
};
/**
 * The outcome of the certification.
 */
export type Outcome = OpenEnum<typeof Outcome>;
/**
 * The TaskTypeCertify message indicates that a task is a certify task and all related details.
 */
export type TaskTypeCertify = {
    /**
     * The ID of the access review.
     */
    accessReviewId?: string | null | undefined;
    /**
     * The ID of the specific access review object that owns this certify task. This is also set on a revoke task if the revoke task is created from the denied outcome of a certify task.
     */
    accessReviewSelection?: string | null | undefined;
    /**
     * The ID of the app entitlement.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app.
     */
    appId?: string | null | undefined;
    /**
     * The ID of the app user.
     */
    appUserId?: string | null | undefined;
    /**
     * The ID of the user.
     */
    identityUserId?: string | null | undefined;
    /**
     * The outcome of the certification.
     */
    outcome?: Outcome | null | undefined;
    outcomeTime?: Date | null | undefined;
};
/** @internal */
export declare const Outcome$inboundSchema: z.ZodType<Outcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const Outcome$outboundSchema: z.ZodType<Outcome, z.ZodTypeDef, Outcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Outcome$ {
    /** @deprecated use `Outcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Outcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `Outcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Outcome, z.ZodTypeDef, Outcome>;
}
/** @internal */
export declare const TaskTypeCertify$inboundSchema: z.ZodType<TaskTypeCertify, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeCertify$Outbound = {
    accessReviewId?: string | null | undefined;
    accessReviewSelection?: string | null | undefined;
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    identityUserId?: string | null | undefined;
    outcome?: string | null | undefined;
    outcomeTime?: string | null | undefined;
};
/** @internal */
export declare const TaskTypeCertify$outboundSchema: z.ZodType<TaskTypeCertify$Outbound, z.ZodTypeDef, TaskTypeCertify>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeCertify$ {
    /** @deprecated use `TaskTypeCertify$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeCertify, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeCertify$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeCertify$Outbound, z.ZodTypeDef, TaskTypeCertify>;
    /** @deprecated use `TaskTypeCertify$Outbound` instead. */
    type Outbound = TaskTypeCertify$Outbound;
}
export declare function taskTypeCertifyToJSON(taskTypeCertify: TaskTypeCertify): string;
export declare function taskTypeCertifyFromJSON(jsonString: string): SafeParseResult<TaskTypeCertify, SDKValidationError>;
