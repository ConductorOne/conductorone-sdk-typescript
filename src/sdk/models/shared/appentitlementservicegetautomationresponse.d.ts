import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementAutomation, AppEntitlementAutomation$Outbound } from "./appentitlementautomation.js";
/**
 * The AppEntitlementServiceGetAutomationResponse message.
 */
export type AppEntitlementServiceGetAutomationResponse = {
    appEntitlementAutomation?: AppEntitlementAutomation | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceGetAutomationResponse$inboundSchema: z.ZodType<AppEntitlementServiceGetAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementServiceGetAutomationResponse$Outbound = {
    AppEntitlementAutomation?: AppEntitlementAutomation$Outbound | null | undefined;
};
/** @internal */
export declare const AppEntitlementServiceGetAutomationResponse$outboundSchema: z.ZodType<AppEntitlementServiceGetAutomationResponse$Outbound, z.ZodTypeDef, AppEntitlementServiceGetAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementServiceGetAutomationResponse$ {
    /** @deprecated use `AppEntitlementServiceGetAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementServiceGetAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementServiceGetAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementServiceGetAutomationResponse$Outbound, z.ZodTypeDef, AppEntitlementServiceGetAutomationResponse>;
    /** @deprecated use `AppEntitlementServiceGetAutomationResponse$Outbound` instead. */
    type Outbound = AppEntitlementServiceGetAutomationResponse$Outbound;
}
export declare function appEntitlementServiceGetAutomationResponseToJSON(appEntitlementServiceGetAutomationResponse: AppEntitlementServiceGetAutomationResponse): string;
export declare function appEntitlementServiceGetAutomationResponseFromJSON(jsonString: string): SafeParseResult<AppEntitlementServiceGetAutomationResponse, SDKValidationError>;
