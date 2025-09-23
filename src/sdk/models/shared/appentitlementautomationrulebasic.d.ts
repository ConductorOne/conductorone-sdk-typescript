import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementAutomationRuleBasic message.
 */
export type AppEntitlementAutomationRuleBasic = {
    /**
     * The expression field.
     */
    expression?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleBasic$inboundSchema: z.ZodType<AppEntitlementAutomationRuleBasic, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationRuleBasic$Outbound = {
    expression?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleBasic$outboundSchema: z.ZodType<AppEntitlementAutomationRuleBasic$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleBasic>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationRuleBasic$ {
    /** @deprecated use `AppEntitlementAutomationRuleBasic$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationRuleBasic, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationRuleBasic$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationRuleBasic$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleBasic>;
    /** @deprecated use `AppEntitlementAutomationRuleBasic$Outbound` instead. */
    type Outbound = AppEntitlementAutomationRuleBasic$Outbound;
}
export declare function appEntitlementAutomationRuleBasicToJSON(appEntitlementAutomationRuleBasic: AppEntitlementAutomationRuleBasic): string;
export declare function appEntitlementAutomationRuleBasicFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationRuleBasic, SDKValidationError>;
