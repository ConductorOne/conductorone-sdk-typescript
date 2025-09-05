import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementAutomationRuleCEL message.
 */
export type AppEntitlementAutomationRuleCEL = {
    /**
     * The expression field.
     */
    expression?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleCEL$inboundSchema: z.ZodType<AppEntitlementAutomationRuleCEL, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationRuleCEL$Outbound = {
    expression?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationRuleCEL$outboundSchema: z.ZodType<AppEntitlementAutomationRuleCEL$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleCEL>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationRuleCEL$ {
    /** @deprecated use `AppEntitlementAutomationRuleCEL$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationRuleCEL, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationRuleCEL$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationRuleCEL$Outbound, z.ZodTypeDef, AppEntitlementAutomationRuleCEL>;
    /** @deprecated use `AppEntitlementAutomationRuleCEL$Outbound` instead. */
    type Outbound = AppEntitlementAutomationRuleCEL$Outbound;
}
export declare function appEntitlementAutomationRuleCELToJSON(appEntitlementAutomationRuleCEL: AppEntitlementAutomationRuleCEL): string;
export declare function appEntitlementAutomationRuleCELFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationRuleCEL, SDKValidationError>;
