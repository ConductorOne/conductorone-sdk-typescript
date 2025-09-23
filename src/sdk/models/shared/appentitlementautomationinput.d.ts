import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomationLastRunStatusInput, AppEntitlementAutomationLastRunStatusInput$Outbound } from "./appentitlementautomationlastrunstatusinput.js";
import { AppEntitlementAutomationRuleBasic, AppEntitlementAutomationRuleBasic$Outbound } from "./appentitlementautomationrulebasic.js";
import { AppEntitlementAutomationRuleCEL, AppEntitlementAutomationRuleCEL$Outbound } from "./appentitlementautomationrulecel.js";
import { AppEntitlementAutomationRuleEntitlement, AppEntitlementAutomationRuleEntitlement$Outbound } from "./appentitlementautomationruleentitlement.js";
import { AppEntitlementAutomationRuleNone, AppEntitlementAutomationRuleNone$Outbound } from "./appentitlementautomationrulenone.js";
/**
 * The AppEntitlementAutomation message.
 *
 * @remarks
 *
 * This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
 *   - none
 *   - entitlements
 *   - cel
 *   - basic
 */
export type AppEntitlementAutomationInput = {
    basic?: AppEntitlementAutomationRuleBasic | null | undefined;
    cel?: AppEntitlementAutomationRuleCEL | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the app entitlement.
     */
    description?: string | null | undefined;
    /**
     * The display name of the app entitlement.
     */
    displayName?: string | null | undefined;
    entitlements?: AppEntitlementAutomationRuleEntitlement | null | undefined;
    lastRunStatus?: AppEntitlementAutomationLastRunStatusInput | null | undefined;
    none?: AppEntitlementAutomationRuleNone | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationInput$inboundSchema: z.ZodType<AppEntitlementAutomationInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationInput$Outbound = {
    basic?: AppEntitlementAutomationRuleBasic$Outbound | null | undefined;
    cel?: AppEntitlementAutomationRuleCEL$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    entitlements?: AppEntitlementAutomationRuleEntitlement$Outbound | null | undefined;
    lastRunStatus?: AppEntitlementAutomationLastRunStatusInput$Outbound | null | undefined;
    none?: AppEntitlementAutomationRuleNone$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationInput$outboundSchema: z.ZodType<AppEntitlementAutomationInput$Outbound, z.ZodTypeDef, AppEntitlementAutomationInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationInput$ {
    /** @deprecated use `AppEntitlementAutomationInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationInput$Outbound, z.ZodTypeDef, AppEntitlementAutomationInput>;
    /** @deprecated use `AppEntitlementAutomationInput$Outbound` instead. */
    type Outbound = AppEntitlementAutomationInput$Outbound;
}
export declare function appEntitlementAutomationInputToJSON(appEntitlementAutomationInput: AppEntitlementAutomationInput): string;
export declare function appEntitlementAutomationInputFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationInput, SDKValidationError>;
