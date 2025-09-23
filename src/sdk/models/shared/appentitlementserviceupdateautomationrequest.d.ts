import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomationRuleBasic, AppEntitlementAutomationRuleBasic$Outbound } from "./appentitlementautomationrulebasic.js";
import { AppEntitlementAutomationRuleCEL, AppEntitlementAutomationRuleCEL$Outbound } from "./appentitlementautomationrulecel.js";
import { AppEntitlementAutomationRuleEntitlement, AppEntitlementAutomationRuleEntitlement$Outbound } from "./appentitlementautomationruleentitlement.js";
import { AppEntitlementAutomationRuleNone, AppEntitlementAutomationRuleNone$Outbound } from "./appentitlementautomationrulenone.js";
/**
 * The AppEntitlementServiceUpdateAutomationRequest message.
 *
 * @remarks
 *
 * This message contains a oneof named conditions. Only a single field of the following list may be set at a time:
 *   - none
 *   - entitlements
 *   - cel
 *   - basic
 */
export type AppEntitlementServiceUpdateAutomationRequest = {
    basic?: AppEntitlementAutomationRuleBasic | null | undefined;
    cel?: AppEntitlementAutomationRuleCEL | null | undefined;
    /**
     * The description of the app entitlement.
     */
    description?: string | null | undefined;
    /**
     * The display name of the app entitlement.
     */
    displayName?: string | null | undefined;
    entitlements?: AppEntitlementAutomationRuleEntitlement | null | undefined;
    none?: AppEntitlementAutomationRuleNone | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceUpdateAutomationRequest$inboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementServiceUpdateAutomationRequest$Outbound = {
    basic?: AppEntitlementAutomationRuleBasic$Outbound | null | undefined;
    cel?: AppEntitlementAutomationRuleCEL$Outbound | null | undefined;
    description?: string | null | undefined;
    displayName?: string | null | undefined;
    entitlements?: AppEntitlementAutomationRuleEntitlement$Outbound | null | undefined;
    none?: AppEntitlementAutomationRuleNone$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceUpdateAutomationRequest$outboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationRequest$Outbound, z.ZodTypeDef, AppEntitlementServiceUpdateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementServiceUpdateAutomationRequest$ {
    /** @deprecated use `AppEntitlementServiceUpdateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementServiceUpdateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationRequest$Outbound, z.ZodTypeDef, AppEntitlementServiceUpdateAutomationRequest>;
    /** @deprecated use `AppEntitlementServiceUpdateAutomationRequest$Outbound` instead. */
    type Outbound = AppEntitlementServiceUpdateAutomationRequest$Outbound;
}
export declare function appEntitlementServiceUpdateAutomationRequestToJSON(appEntitlementServiceUpdateAutomationRequest: AppEntitlementServiceUpdateAutomationRequest): string;
export declare function appEntitlementServiceUpdateAutomationRequestFromJSON(jsonString: string): SafeParseResult<AppEntitlementServiceUpdateAutomationRequest, SDKValidationError>;
