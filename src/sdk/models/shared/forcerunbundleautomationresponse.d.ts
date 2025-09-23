import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ForceRunBundleAutomationResponse message.
 */
export type ForceRunBundleAutomationResponse = {};
/** @internal */
export declare const ForceRunBundleAutomationResponse$inboundSchema: z.ZodType<ForceRunBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ForceRunBundleAutomationResponse$Outbound = {};
/** @internal */
export declare const ForceRunBundleAutomationResponse$outboundSchema: z.ZodType<ForceRunBundleAutomationResponse$Outbound, z.ZodTypeDef, ForceRunBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ForceRunBundleAutomationResponse$ {
    /** @deprecated use `ForceRunBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ForceRunBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ForceRunBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ForceRunBundleAutomationResponse$Outbound, z.ZodTypeDef, ForceRunBundleAutomationResponse>;
    /** @deprecated use `ForceRunBundleAutomationResponse$Outbound` instead. */
    type Outbound = ForceRunBundleAutomationResponse$Outbound;
}
export declare function forceRunBundleAutomationResponseToJSON(forceRunBundleAutomationResponse: ForceRunBundleAutomationResponse): string;
export declare function forceRunBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<ForceRunBundleAutomationResponse, SDKValidationError>;
