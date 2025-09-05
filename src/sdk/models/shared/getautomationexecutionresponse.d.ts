import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationExecution, AutomationExecution$Outbound } from "./automationexecution.js";
/**
 * The GetAutomationExecutionResponse message.
 */
export type GetAutomationExecutionResponse = {
    automationExecution?: AutomationExecution | null | undefined;
};
/** @internal */
export declare const GetAutomationExecutionResponse$inboundSchema: z.ZodType<GetAutomationExecutionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetAutomationExecutionResponse$Outbound = {
    automationExecution?: AutomationExecution$Outbound | null | undefined;
};
/** @internal */
export declare const GetAutomationExecutionResponse$outboundSchema: z.ZodType<GetAutomationExecutionResponse$Outbound, z.ZodTypeDef, GetAutomationExecutionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetAutomationExecutionResponse$ {
    /** @deprecated use `GetAutomationExecutionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetAutomationExecutionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetAutomationExecutionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetAutomationExecutionResponse$Outbound, z.ZodTypeDef, GetAutomationExecutionResponse>;
    /** @deprecated use `GetAutomationExecutionResponse$Outbound` instead. */
    type Outbound = GetAutomationExecutionResponse$Outbound;
}
export declare function getAutomationExecutionResponseToJSON(getAutomationExecutionResponse: GetAutomationExecutionResponse): string;
export declare function getAutomationExecutionResponseFromJSON(jsonString: string): SafeParseResult<GetAutomationExecutionResponse, SDKValidationError>;
