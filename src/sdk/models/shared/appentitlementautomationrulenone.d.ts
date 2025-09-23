import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementAutomationRuleNone message.
 */
export type AppEntitlementAutomationRuleNone = {};
/** @internal */
export declare const AppEntitlementAutomationRuleNone$inboundSchema: z.ZodType<AppEntitlementAutomationRuleNone, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationRuleNone$Outbound = {};
/** @internal */
export declare const AppEntitlementAutomationRuleNone$outboundSchema: z.ZodType<AppEntitlementAutomationRuleNone$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleNone>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationRuleNone$ {
    /** @deprecated use `AppEntitlementAutomationRuleNone$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationRuleNone, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationRuleNone$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationRuleNone$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleNone>;
    /** @deprecated use `AppEntitlementAutomationRuleNone$Outbound` instead. */
    type Outbound = AppEntitlementAutomationRuleNone$Outbound;
}
export declare function appEntitlementAutomationRuleNoneToJSON(appEntitlementAutomationRuleNone: AppEntitlementAutomationRuleNone): string;
export declare function appEntitlementAutomationRuleNoneFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationRuleNone, SDKValidationError>;
