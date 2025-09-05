import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AppEntitlementAutomationLastRunStatus message.
 */
export type AppEntitlementAutomationLastRunStatusInput = {
    lastCompletedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationLastRunStatusInput$inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusInput, z.ZodTypeDef, unknown>;
/** @internal */
export type AppEntitlementAutomationLastRunStatusInput$Outbound = {
    lastCompletedAt?: string | null | undefined;
};
/** @internal */
export declare const AppEntitlementAutomationLastRunStatusInput$outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusInput$Outbound, z.ZodTypeDef, AppEntitlementAutomationLastRunStatusInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppEntitlementAutomationLastRunStatusInput$ {
    /** @deprecated use `AppEntitlementAutomationLastRunStatusInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppEntitlementAutomationLastRunStatusInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppEntitlementAutomationLastRunStatusInput$Outbound, z.ZodTypeDef, AppEntitlementAutomationLastRunStatusInput>;
    /** @deprecated use `AppEntitlementAutomationLastRunStatusInput$Outbound` instead. */
    type Outbound = AppEntitlementAutomationLastRunStatusInput$Outbound;
}
export declare function appEntitlementAutomationLastRunStatusInputToJSON(appEntitlementAutomationLastRunStatusInput: AppEntitlementAutomationLastRunStatusInput): string;
export declare function appEntitlementAutomationLastRunStatusInputFromJSON(jsonString: string): SafeParseResult<AppEntitlementAutomationLastRunStatusInput, SDKValidationError>;
