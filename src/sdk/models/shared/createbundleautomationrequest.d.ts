import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { BundleAutomationRuleEntitlement, BundleAutomationRuleEntitlement$Outbound } from "./bundleautomationruleentitlement.js";
/**
 * The CreateBundleAutomationRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
 *   - entitlements
 */
export type CreateBundleAutomationRequest = {
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
export declare const CreateBundleAutomationRequest$inboundSchema: z.ZodType<CreateBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateBundleAutomationRequest$Outbound = {
    createTasks?: boolean | null | undefined;
    disableCircuitBreaker?: boolean | null | undefined;
    enabled?: boolean | null | undefined;
    entitlements?: BundleAutomationRuleEntitlement$Outbound | null | undefined;
};
/** @internal */
export declare const CreateBundleAutomationRequest$outboundSchema: z.ZodType<CreateBundleAutomationRequest$Outbound, z.ZodTypeDef, CreateBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateBundleAutomationRequest$ {
    /** @deprecated use `CreateBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateBundleAutomationRequest$Outbound, z.ZodTypeDef, CreateBundleAutomationRequest>;
    /** @deprecated use `CreateBundleAutomationRequest$Outbound` instead. */
    type Outbound = CreateBundleAutomationRequest$Outbound;
}
export declare function createBundleAutomationRequestToJSON(createBundleAutomationRequest: CreateBundleAutomationRequest): string;
export declare function createBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<CreateBundleAutomationRequest, SDKValidationError>;
