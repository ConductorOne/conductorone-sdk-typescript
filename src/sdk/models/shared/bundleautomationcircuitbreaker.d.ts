import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The state field.
 */
export declare const BundleAutomationCircuitBreakerState: {
    readonly CircuitBreakerStateUnspecified: "CIRCUIT_BREAKER_STATE_UNSPECIFIED";
    readonly CircuitBreakerStateTriggered: "CIRCUIT_BREAKER_STATE_TRIGGERED";
    readonly CircuitBreakerStateBypass: "CIRCUIT_BREAKER_STATE_BYPASS";
};
/**
 * The state field.
 */
export type BundleAutomationCircuitBreakerState = OpenEnum<typeof BundleAutomationCircuitBreakerState>;
/**
 * The BundleAutomationCircuitBreaker message.
 */
export type BundleAutomationCircuitBreaker = {
    /**
     * The removedMembersThresholdPercentage field.
     */
    removedMembersThresholdPercentage?: number | null | undefined;
    /**
     * The state field.
     */
    state?: BundleAutomationCircuitBreakerState | null | undefined;
    updatedAt?: Date | null | undefined;
    userRef?: UserRef | null | undefined;
};
/** @internal */
export declare const BundleAutomationCircuitBreakerState$inboundSchema: z.ZodType<BundleAutomationCircuitBreakerState, z.ZodTypeDef, unknown>;
/** @internal */
export declare const BundleAutomationCircuitBreakerState$outboundSchema: z.ZodType<BundleAutomationCircuitBreakerState, z.ZodTypeDef, BundleAutomationCircuitBreakerState>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomationCircuitBreakerState$ {
    /** @deprecated use `BundleAutomationCircuitBreakerState$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomationCircuitBreakerState, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomationCircuitBreakerState$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomationCircuitBreakerState, z.ZodTypeDef, BundleAutomationCircuitBreakerState>;
}
/** @internal */
export declare const BundleAutomationCircuitBreaker$inboundSchema: z.ZodType<BundleAutomationCircuitBreaker, z.ZodTypeDef, unknown>;
/** @internal */
export type BundleAutomationCircuitBreaker$Outbound = {
    removedMembersThresholdPercentage?: string | null | undefined;
    state?: string | null | undefined;
    updatedAt?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
};
/** @internal */
export declare const BundleAutomationCircuitBreaker$outboundSchema: z.ZodType<BundleAutomationCircuitBreaker$Outbound, z.ZodTypeDef, BundleAutomationCircuitBreaker>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomationCircuitBreaker$ {
    /** @deprecated use `BundleAutomationCircuitBreaker$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomationCircuitBreaker, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomationCircuitBreaker$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomationCircuitBreaker$Outbound, z.ZodTypeDef, BundleAutomationCircuitBreaker>;
    /** @deprecated use `BundleAutomationCircuitBreaker$Outbound` instead. */
    type Outbound = BundleAutomationCircuitBreaker$Outbound;
}
export declare function bundleAutomationCircuitBreakerToJSON(bundleAutomationCircuitBreaker: BundleAutomationCircuitBreaker): string;
export declare function bundleAutomationCircuitBreakerFromJSON(jsonString: string): SafeParseResult<BundleAutomationCircuitBreaker, SDKValidationError>;
