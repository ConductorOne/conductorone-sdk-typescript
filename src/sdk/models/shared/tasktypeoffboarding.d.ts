import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The outcome field.
 */
export declare const TaskTypeOffboardingOutcome: {
    readonly OffboardingOutcomeUnspecified: "OFFBOARDING_OUTCOME_UNSPECIFIED";
    readonly OffboardingOutcomeInProgress: "OFFBOARDING_OUTCOME_IN_PROGRESS";
    readonly OffboardingOutcomeDone: "OFFBOARDING_OUTCOME_DONE";
    readonly OffboardingOutcomeError: "OFFBOARDING_OUTCOME_ERROR";
    readonly OffboardingOutcomeCancelled: "OFFBOARDING_OUTCOME_CANCELLED";
};
/**
 * The outcome field.
 */
export type TaskTypeOffboardingOutcome = OpenEnum<typeof TaskTypeOffboardingOutcome>;
/**
 * The TaskTypeOffboarding message.
 */
export type TaskTypeOffboarding = {
    /**
     * The outcome field.
     */
    outcome?: TaskTypeOffboardingOutcome | null | undefined;
    outcomeTime?: Date | null | undefined;
    /**
     * The subjectUserId field.
     */
    subjectUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskTypeOffboardingOutcome$inboundSchema: z.ZodType<TaskTypeOffboardingOutcome, z.ZodTypeDef, unknown>;
/** @internal */
export declare const TaskTypeOffboardingOutcome$outboundSchema: z.ZodType<TaskTypeOffboardingOutcome, z.ZodTypeDef, TaskTypeOffboardingOutcome>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeOffboardingOutcome$ {
    /** @deprecated use `TaskTypeOffboardingOutcome$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeOffboardingOutcome, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeOffboardingOutcome$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeOffboardingOutcome, z.ZodTypeDef, TaskTypeOffboardingOutcome>;
}
/** @internal */
export declare const TaskTypeOffboarding$inboundSchema: z.ZodType<TaskTypeOffboarding, z.ZodTypeDef, unknown>;
/** @internal */
export type TaskTypeOffboarding$Outbound = {
    outcome?: string | null | undefined;
    outcomeTime?: string | null | undefined;
    subjectUserId?: string | null | undefined;
};
/** @internal */
export declare const TaskTypeOffboarding$outboundSchema: z.ZodType<TaskTypeOffboarding$Outbound, z.ZodTypeDef, TaskTypeOffboarding>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TaskTypeOffboarding$ {
    /** @deprecated use `TaskTypeOffboarding$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TaskTypeOffboarding, z.ZodTypeDef, unknown>;
    /** @deprecated use `TaskTypeOffboarding$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TaskTypeOffboarding$Outbound, z.ZodTypeDef, TaskTypeOffboarding>;
    /** @deprecated use `TaskTypeOffboarding$Outbound` instead. */
    type Outbound = TaskTypeOffboarding$Outbound;
}
export declare function taskTypeOffboardingToJSON(taskTypeOffboarding: TaskTypeOffboarding): string;
export declare function taskTypeOffboardingFromJSON(jsonString: string): SafeParseResult<TaskTypeOffboarding, SDKValidationError>;
