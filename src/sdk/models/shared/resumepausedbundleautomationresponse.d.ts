import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResumePausedBundleAutomationResponse message.
 */
export type ResumePausedBundleAutomationResponse = {};
/** @internal */
export declare const ResumePausedBundleAutomationResponse$inboundSchema: z.ZodType<ResumePausedBundleAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ResumePausedBundleAutomationResponse$Outbound = {};
/** @internal */
export declare const ResumePausedBundleAutomationResponse$outboundSchema: z.ZodType<ResumePausedBundleAutomationResponse$Outbound, z.ZodTypeDef, ResumePausedBundleAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResumePausedBundleAutomationResponse$ {
    /** @deprecated use `ResumePausedBundleAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResumePausedBundleAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResumePausedBundleAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResumePausedBundleAutomationResponse$Outbound, z.ZodTypeDef, ResumePausedBundleAutomationResponse>;
    /** @deprecated use `ResumePausedBundleAutomationResponse$Outbound` instead. */
    type Outbound = ResumePausedBundleAutomationResponse$Outbound;
}
export declare function resumePausedBundleAutomationResponseToJSON(resumePausedBundleAutomationResponse: ResumePausedBundleAutomationResponse): string;
export declare function resumePausedBundleAutomationResponseFromJSON(jsonString: string): SafeParseResult<ResumePausedBundleAutomationResponse, SDKValidationError>;
