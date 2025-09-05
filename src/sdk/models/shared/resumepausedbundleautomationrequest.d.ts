import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ResumePausedBundleAutomationRequest message.
 */
export type ResumePausedBundleAutomationRequest = {};
/** @internal */
export declare const ResumePausedBundleAutomationRequest$inboundSchema: z.ZodType<ResumePausedBundleAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ResumePausedBundleAutomationRequest$Outbound = {};
/** @internal */
export declare const ResumePausedBundleAutomationRequest$outboundSchema: z.ZodType<ResumePausedBundleAutomationRequest$Outbound, z.ZodTypeDef, ResumePausedBundleAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ResumePausedBundleAutomationRequest$ {
    /** @deprecated use `ResumePausedBundleAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ResumePausedBundleAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ResumePausedBundleAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ResumePausedBundleAutomationRequest$Outbound, z.ZodTypeDef, ResumePausedBundleAutomationRequest>;
    /** @deprecated use `ResumePausedBundleAutomationRequest$Outbound` instead. */
    type Outbound = ResumePausedBundleAutomationRequest$Outbound;
}
export declare function resumePausedBundleAutomationRequestToJSON(resumePausedBundleAutomationRequest: ResumePausedBundleAutomationRequest): string;
export declare function resumePausedBundleAutomationRequestFromJSON(jsonString: string): SafeParseResult<ResumePausedBundleAutomationRequest, SDKValidationError>;
