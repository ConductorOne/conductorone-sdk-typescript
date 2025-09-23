import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TerminateAutomationResponse message.
 */
export type TerminateAutomationResponse = {};
/** @internal */
export declare const TerminateAutomationResponse$inboundSchema: z.ZodType<TerminateAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type TerminateAutomationResponse$Outbound = {};
/** @internal */
export declare const TerminateAutomationResponse$outboundSchema: z.ZodType<TerminateAutomationResponse$Outbound, z.ZodTypeDef, TerminateAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TerminateAutomationResponse$ {
    /** @deprecated use `TerminateAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TerminateAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `TerminateAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TerminateAutomationResponse$Outbound, z.ZodTypeDef, TerminateAutomationResponse>;
    /** @deprecated use `TerminateAutomationResponse$Outbound` instead. */
    type Outbound = TerminateAutomationResponse$Outbound;
}
export declare function terminateAutomationResponseToJSON(terminateAutomationResponse: TerminateAutomationResponse): string;
export declare function terminateAutomationResponseFromJSON(jsonString: string): SafeParseResult<TerminateAutomationResponse, SDKValidationError>;
