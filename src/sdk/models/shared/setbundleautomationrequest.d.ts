import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BundleAutomationRuleEntitlement, BundleAutomationRuleEntitlement$Outbound } from "./bundleautomationruleentitlement.js";
/**
 * The SetBundleAutomationRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
 *   - entitlements
 */
export type SetBundleAutomationRequest = {
    /**
     * The createTasks field.
     */
    createTasks?: boolean | null | undefined;
    /**
     * The disableCircuitBreaker field.
     */
    disableCircuitBreaker?: boolean | null | undefined;
    /**
     * The enabled field.
     */
    enabled?: boolean | null | undefined;
    entitlements?: BundleAutomationRuleEntitlement | null | undefined;
};
/** @internal */
export declare const SetBundleAutomationRequest$inboundSchema: z.ZodType<SetBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SetBundleAutomationRequest$Outbound = {
    createTasks?: boolean | null | undefined;
    disableCircuitBreaker?: boolean | null | undefined;
    enabled?: boolean | null | undefined;
    entitlements?: BundleAutomationRuleEntitlement$Outbound | null | undefined;
};
/** @internal */
export declare const SetBundleAutomationRequest$outboundSchema: z.ZodType<SetBundleAutomationRequest$Outbound, z.ZodTypeDef, SetBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SetBundleAutomationRequest$ {
    /** @deprecated use `SetBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SetBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SetBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SetBundleAutomationRequest$Outbound, z.ZodTypeDef, SetBundleAutomationRequest>;
    /** @deprecated use `SetBundleAutomationRequest$Outbound` instead. */
    type Outbound = SetBundleAutomationRequest$Outbound;
}
export declare function setBundleAutomationRequestToJSON(setBundleAutomationRequest: SetBundleAutomationRequest): string;
export declare function setBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<SetBundleAutomationRequest, SDKValidationError>;
