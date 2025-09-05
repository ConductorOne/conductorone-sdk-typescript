import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationContext, AutomationContext$Outbound } from "./automationcontext.js";
/**
 * The ExecuteAutomationRequest message.
 */
export type ExecuteAutomationRequest = {
    context?: AutomationContext | null | undefined;
};
/** @internal */
export declare const ExecuteAutomationRequest$inboundSchema: z.ZodType<ExecuteAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecuteAutomationRequest$Outbound = {
    context?: AutomationContext$Outbound | null | undefined;
};
/** @internal */
export declare const ExecuteAutomationRequest$outboundSchema: z.ZodType<ExecuteAutomationRequest$Outbound, z.ZodTypeDef, ExecuteAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecuteAutomationRequest$ {
    /** @deprecated use `ExecuteAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecuteAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecuteAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecuteAutomationRequest$Outbound, z.ZodTypeDef, ExecuteAutomationRequest>;
    /** @deprecated use `ExecuteAutomationRequest$Outbound` instead. */
    type Outbound = ExecuteAutomationRequest$Outbound;
}
export declare function executeAutomationRequestToJSON(executeAutomationRequest: ExecuteAutomationRequest): string;
export declare function executeAutomationRequestFromJSON(jsonString: string): SafeParseResult<ExecuteAutomationRequest, SDKValidationError>;
