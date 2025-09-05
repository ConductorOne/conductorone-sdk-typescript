import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomation, AppEntitlementAutomation$Outbound } from "./appentitlementautomation.js";
/**
 * The AppEntitlementServiceUpdateAutomationResponse message.
 */
export type AppEntitlementServiceUpdateAutomationResponse = {
    appEntitlementAutomation?: AppEntitlementAutomation | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceUpdateAutomationResponse$inboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementServiceUpdateAutomationResponse$Outbound = {
    AppEntitlementAutomation?: AppEntitlementAutomation$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceUpdateAutomationResponse$outboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationResponse$Outbound, z.ZodTypeDef, AppEntitlementServiceUpdateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementServiceUpdateAutomationResponse$ {
    /** @deprecated use `AppEntitlementServiceUpdateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementServiceUpdateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementServiceUpdateAutomationResponse$Outbound, z.ZodTypeDef, AppEntitlementServiceUpdateAutomationResponse>;
    /** @deprecated use `AppEntitlementServiceUpdateAutomationResponse$Outbound` instead. */
    type Outbound = AppEntitlementServiceUpdateAutomationResponse$Outbound;
}
export declare function appEntitlementServiceUpdateAutomationResponseToJSON(appEntitlementServiceUpdateAutomationResponse: AppEntitlementServiceUpdateAutomationResponse): string;
export declare function appEntitlementServiceUpdateAutomationResponseFromJSON(jsonString: string): SafeParseResult<AppEntitlementServiceUpdateAutomationResponse, SDKValidationError>;
