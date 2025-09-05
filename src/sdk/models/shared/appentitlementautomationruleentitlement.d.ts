import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The AppEntitlementAutomationRuleEntitlement message.
 */
export type AppEntitlementAutomationRuleEntitlement = {
    /**
     * The entitlementRefs field.
     */
    entitlementRefs?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleEntitlement$inboundSchema: z.ZodType<AppEntitlementAutomationRuleEntitlement, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationRuleEntitlement$Outbound = {
    entitlementRefs?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleEntitlement$outboundSchema: z.ZodType<AppEntitlementAutomationRuleEntitlement$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleEntitlement>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationRuleEntitlement$ {
    /** @deprecated use `AppEntitlementAutomationRuleEntitlement$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationRuleEntitlement, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationRuleEntitlement$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationRuleEntitlement$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleEntitlement>;
    /** @deprecated use `AppEntitlementAutomationRuleEntitlement$Outbound` instead. */
    type Outbound = AppEntitlementAutomationRuleEntitlement$Outbound;
}
export declare function appEntitlementAutomationRuleEntitlementToJSON(appEntitlementAutomationRuleEntitlement: AppEntitlementAutomationRuleEntitlement): string;
export declare function appEntitlementAutomationRuleEntitlementFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationRuleEntitlement, SDKValidationError>;
