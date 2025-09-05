import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The TerminateAutomationRequest message.
 */
export type TerminateAutomationRequest = {};
/** @internal */
export declare const TerminateAutomationRequest$inboundSchema: z.ZodType<TerminateAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type TerminateAutomationRequest$Outbound = {};
/** @internal */
export declare const TerminateAutomationRequest$outboundSchema: z.ZodType<TerminateAutomationRequest$Outbound, z.ZodTypeDef, TerminateAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace TerminateAutomationRequest$ {
    /** @deprecated use `TerminateAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<TerminateAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `TerminateAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<TerminateAutomationRequest$Outbound, z.ZodTypeDef, TerminateAutomationRequest>;
    /** @deprecated use `TerminateAutomationRequest$Outbound` instead. */
    type Outbound = TerminateAutomationRequest$Outbound;
}
export declare function terminateAutomationRequestToJSON(terminateAutomationRequest: TerminateAutomationRequest): string;
export declare function terminateAutomationRequestFromJSON(jsonString: string): SafeParseResult<TerminateAutomationRequest, SDKValidationError>;
