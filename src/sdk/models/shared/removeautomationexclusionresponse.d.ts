import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RemoveAutomationExclusionResponse = {};
/** @internal */
export declare const RemoveAutomationExclusionResponse$inboundSchema: z.ZodType<RemoveAutomationExclusionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAutomationExclusionResponse$Outbound = {};
/** @internal */
export declare const RemoveAutomationExclusionResponse$outboundSchema: z.ZodType<RemoveAutomationExclusionResponse$Outbound, z.ZodTypeDef, RemoveAutomationExclusionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAutomationExclusionResponse$ {
    /** @deprecated use `RemoveAutomationExclusionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAutomationExclusionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAutomationExclusionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAutomationExclusionResponse$Outbound, z.ZodTypeDef, RemoveAutomationExclusionResponse>;
    /** @deprecated use `RemoveAutomationExclusionResponse$Outbound` instead. */
    type Outbound = RemoveAutomationExclusionResponse$Outbound;
}
export declare function removeAutomationExclusionResponseToJSON(removeAutomationExclusionResponse: RemoveAutomationExclusionResponse): string;
export declare function removeAutomationExclusionResponseFromJSON(jsonString: string): SafeParseResult<RemoveAutomationExclusionResponse, SDKValidationError>;
