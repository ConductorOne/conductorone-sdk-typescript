import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { TargetTask, TargetTask$Outbound } from "./targettask.js";
import { TargetTest, TargetTest$Outbound } from "./targettest.js";
/**
 * Current state of the transaction
 */
export declare const StepUpTransactionState: {
    readonly StepUpTransactionStateUnspecified: "STEP_UP_TRANSACTION_STATE_UNSPECIFIED";
    readonly StepUpTransactionStatePending: "STEP_UP_TRANSACTION_STATE_PENDING";
    readonly StepUpTransactionStateVerified: "STEP_UP_TRANSACTION_STATE_VERIFIED";
    readonly StepUpTransactionStateError: "STEP_UP_TRANSACTION_STATE_ERROR";
};
/**
 * Current state of the transaction
 */
export type StepUpTransactionState = OpenEnum<typeof StepUpTransactionState>;
/**
 * StepUpTransaction represents a record of a step-up authentication attempt
 *
 * @remarks
 *
 * This message contains a oneof named target. Only a single field of the following list may be set at a time:
 *   - approveTask
 *   - test
 */
export type StepUpTransaction = {
    approveTask?: TargetTask | null | undefined;
    claims?: {
        [k: string]: any;
    } | null | undefined;
    createdAt?: Date | null | undefined;
    /**
     * Error message if the transaction failed
     */
    errorMessage?: string | null | undefined;
    expiresAt?: Date | null | undefined;
    /**
     * Unique identifier for the transaction
     */
    id?: string | null | undefined;
    /**
     * ID of the provider used for this step-up authentication
     */
    providerId?: string | null | undefined;
    /**
     * Current state of the transaction
     */
    state?: StepUpTransactionState | null | undefined;
    test?: TargetTest | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * ID of the user who performed the step-up authentication
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const StepUpTransactionState$inboundSchema: z.ZodType<StepUpTransactionState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const StepUpTransactionState$outboundSchema: z.ZodType<StepUpTransactionState, z.ZodTypeDef, StepUpTransactionState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpTransactionState$ {
    /** @deprecated use `StepUpTransactionState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpTransactionState, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpTransactionState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpTransactionState, z.ZodTypeDef, StepUpTransactionState>;
}
/** @internal */
export declare const StepUpTransaction$inboundSchema: z.ZodType<StepUpTransaction, z.ZodTypeDef, unknown>;
/** @internal */
export type StepUpTransaction$Outbound = {
    approveTask?: TargetTask$Outbound | null | undefined;
    claims?: {
        [k: string]: any;
    } | null | undefined;
    createdAt?: string | null | undefined;
    errorMessage?: string | null | undefined;
    expiresAt?: string | null | undefined;
    id?: string | null | undefined;
    providerId?: string | null | undefined;
    state?: string | null | undefined;
    test?: TargetTest$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const StepUpTransaction$outboundSchema: z.ZodType<StepUpTransaction$Outbound, z.ZodTypeDef, StepUpTransaction>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace StepUpTransaction$ {
    /** @deprecated use `StepUpTransaction$inboundSchema` instead. */
    const inboundSchema: z.ZodType<StepUpTransaction, z.ZodTypeDef, unknown>;
    /** @deprecated use `StepUpTransaction$outboundSchema` instead. */
    const outboundSchema: z.ZodType<StepUpTransaction$Outbound, z.ZodTypeDef, StepUpTransaction>;
    /** @deprecated use `StepUpTransaction$Outbound` instead. */
    type Outbound = StepUpTransaction$Outbound;
}
export declare function stepUpTransactionToJSON(stepUpTransaction: StepUpTransaction): string;
export declare function stepUpTransactionFromJSON(jsonString: string): SafeParseResult<StepUpTransaction, SDKValidationError>;
