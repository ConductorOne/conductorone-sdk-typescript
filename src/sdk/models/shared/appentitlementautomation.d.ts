import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomationLastRunStatus, AppEntitlementAutomationLastRunStatus$Outbound } from "./appentitlementautomationlastrunstatus.js";
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
export type AppEntitlementAutomation = {
    /**
     * The unique ID for the App Entitlement.
     */
    appEntitlementId?: string | null | undefined;
    /**
     * The ID of the app that is associated with the app entitlement.
     */
    appId?: string | null | undefined;
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
    lastRunStatus?: AppEntitlementAutomationLastRunStatus | null | undefined;
    none?: AppEntitlementAutomationRuleNone | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomation$inboundSchema: z.ZodType<AppEntitlementAutomation, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomation$Outbound = {
    appEntitlementId?: string | null | undefined;
    appId?: string | null | undefined;
    basic?: AppEntitlementAutomationRuleBasic$Outbound | null | undefined;
    cel?: AppEntitlementAutomationRuleCEL$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    entitlements?: AppEntitlementAutomationRuleEntitlement$Outbound | null | undefined;
    lastRunStatus?: AppEntitlementAutomationLastRunStatus$Outbound | null | undefined;
    none?: AppEntitlementAutomationRuleNone$Outbound | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomation$outboundSchema: z.ZodType<AppEntitlementAutomation$Outbound, z.ZodTypeDef, AppEntitlementAutomation>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomation$ {
    /** @deprecated use `AppEntitlementAutomation$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomation, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomation$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomation$Outbound, z.ZodTypeDef, AppEntitlementAutomation>;
    /** @deprecated use `AppEntitlementAutomation$Outbound` instead. */
    type Outbound = AppEntitlementAutomation$Outbound;
}
export declare function appEntitlementAutomationToJSON(appEntitlementAutomation: AppEntitlementAutomation): string;
export declare function appEntitlementAutomationFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomation, SDKValidationError>;
