import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ExecuteAutomationResponse message.
 */
export type ExecuteAutomationResponse = {
    /**
     * The executionId field.
     */
    executionId?: number | null | undefined;
};
/** @internal */
export declare const ExecuteAutomationResponse$inboundSchema: z.ZodType<ExecuteAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ExecuteAutomationResponse$Outbound = {
    executionId?: string | null | undefined;
};
/** @internal */
export declare const ExecuteAutomationResponse$outboundSchema: z.ZodType<ExecuteAutomationResponse$Outbound, z.ZodTypeDef, ExecuteAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ExecuteAutomationResponse$ {
    /** @deprecated use `ExecuteAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ExecuteAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ExecuteAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ExecuteAutomationResponse$Outbound, z.ZodTypeDef, ExecuteAutomationResponse>;
    /** @deprecated use `ExecuteAutomationResponse$Outbound` instead. */
    type Outbound = ExecuteAutomationResponse$Outbound;
}
export declare function executeAutomationResponseToJSON(executeAutomationResponse: ExecuteAutomationResponse): string;
export declare function executeAutomationResponseFromJSON(jsonString: string): SafeParseResult<ExecuteAutomationResponse, SDKValidationError>;
