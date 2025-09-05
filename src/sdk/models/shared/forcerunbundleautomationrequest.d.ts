import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementRef, AppEntitlementRef$Outbound } from "./appentitlementref.js";
/**
 * The ForceRunBundleAutomationRequest message.
 */
export type ForceRunBundleAutomationRequest = {
    /**
     * The refs field.
     */
    refs?: Array<AppEntitlementRef> | null | undefined;
};
/** @internal */
export declare const ForceRunBundleAutomationRequest$inboundSchema: z.ZodType<ForceRunBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRunBundleAutomationRequest$Outbound = {
    refs?: Array<AppEntitlementRef$Outbound> | null | undefined;
};
/** @internal */
export declare const ForceRunBundleAutomationRequest$outboundSchema: z.ZodType<ForceRunBundleAutomationRequest$Outbound, z.ZodTypeDef, ForceRunBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRunBundleAutomationRequest$ {
    /** @deprecated use `ForceRunBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRunBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRunBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRunBundleAutomationRequest$Outbound, z.ZodTypeDef, ForceRunBundleAutomationRequest>;
    /** @deprecated use `ForceRunBundleAutomationRequest$Outbound` instead. */
    type Outbound = ForceRunBundleAutomationRequest$Outbound;
}
export declare function forceRunBundleAutomationRequestToJSON(forceRunBundleAutomationRequest: ForceRunBundleAutomationRequest): string;
export declare function forceRunBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<ForceRunBundleAutomationRequest, SDKValidationError>;
