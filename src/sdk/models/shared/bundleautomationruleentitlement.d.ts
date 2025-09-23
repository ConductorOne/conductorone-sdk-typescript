import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The BundleAutomationRuleEntitlement message.
 */
export type BundleAutomationRuleEntitlement = {
    /**
     * The entitlementRefs field.
     */
    entitlementRefs?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const BundleAutomationRuleEntitlement$inboundSchema: z.ZodType<BundleAutomationRuleEntitlement, z.ZodTypeDef, unknown>;
/** @internal */
export type BundleAutomationRuleEntitlement$Outbound = {
    entitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const BundleAutomationRuleEntitlement$outboundSchema: z.ZodType<BundleAutomationRuleEntitlement$Outbound, z.ZodTypeDef, BundleAutomationRuleEntitlement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace BundleAutomationRuleEntitlement$ {
    /** @deprecated use `BundleAutomationRuleEntitlement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<BundleAutomationRuleEntitlement, z.ZodTypeDef, unknown>;
    /** @deprecated use `BundleAutomationRuleEntitlement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<BundleAutomationRuleEntitlement$Outbound, z.ZodTypeDef, BundleAutomationRuleEntitlement>;
    /** @deprecated use `BundleAutomationRuleEntitlement$Outbound` instead. */
    type Outbound = BundleAutomationRuleEntitlement$Outbound;
}
export declare function bundleAutomationRuleEntitlementToJSON(bundleAutomationRuleEntitlement: BundleAutomationRuleEntitlement): string;
export declare function bundleAutomationRuleEntitlementFromJSON(jsonString: string): SafeParseResult<BundleAutomationRuleEntitlement, SDKValidationError>;
