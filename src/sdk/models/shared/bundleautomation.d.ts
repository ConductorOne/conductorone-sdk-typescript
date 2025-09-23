import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BundleAutomationCircuitBreaker, BundleAutomationCircuitBreaker$Outbound } from "./bundleautomationcircuitbreaker.js";
import { BundleAutomationLastRunState, BundleAutomationLastRunState$Outbound } from "./bundleautomationlastrunstate.js";
import { BundleAutomationRuleEntitlement, BundleAutomationRuleEntitlement$Outbound } from "./bundleautomationruleentitlement.js";
/**
 * The BundleAutomation message.
 *
 * @remarks
 *
 * This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
 *   - entitlements
 */
export type BundleAutomation = {
    circuitBreaker?: BundleAutomationCircuitBreaker | null | undefined;
    /**
     * The createTasks field.
     */
    createTasks?: boolean | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The disableCircuitBreaker field.
     */
    disableCircuitBreaker?: boolean | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    entitlements?: BundleAutomationRuleEntitlement | null | undefined;
    /**
     * The requestCatalogId field.
     */
    requestCatalogId?: string | null | undefined;
    state?: BundleAutomationLastRunState | null | undefined;
    /**
     * The tenantId field.
     */
    tenantId?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const BundleAutomation$inboundSchema: z.ZodType<BundleAutomation, z.ZodTypeDef, unknown>;
/** @internal */
export type BundleAutomation$Outbound = {
    circuitBreaker?: BundleAutomationCircuitBreaker$Outbound | null | undefined;
    createTasks?: boolean | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    disableCircuitBreaker?: boolean | null | undefined;
    enabled?: boolean | null | undefined;
    entitlements?: BundleAutomationRuleEntitlement$Outbound | null | undefined;
    requestCatalogId?: string | null | undefined;
    state?: BundleAutomationLastRunState$Outbound | null | undefined;
    tenantId?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const BundleAutomation$outboundSchema: z.ZodType<BundleAutomation$Outbound, z.ZodTypeDef, BundleAutomation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomation$ {
    /** @deprecated use `BundleAutomation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomation, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomation$Outbound, z.ZodTypeDef, BundleAutomation>;
    /** @deprecated use `BundleAutomation$Outbound` instead. */
    type Outbound = BundleAutomation$Outbound;
}
export declare function bundleAutomationToJSON(bundleAutomation: BundleAutomation): string;
export declare function bundleAutomationFromJSON(jsonString: string): SafeParseResult<BundleAutomation, SDKValidationError>;
