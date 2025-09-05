import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type AddAutomationExclusionResponse = {};
/** @internal */
export declare const AddAutomationExclusionResponse$inboundSchema: z.ZodType<AddAutomationExclusionResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAutomationExclusionResponse$Outbound = {};
/** @internal */
export declare const AddAutomationExclusionResponse$outboundSchema: z.ZodType<AddAutomationExclusionResponse$Outbound, z.ZodTypeDef, AddAutomationExclusionResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAutomationExclusionResponse$ {
    /** @deprecated use `AddAutomationExclusionResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAutomationExclusionResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAutomationExclusionResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAutomationExclusionResponse$Outbound, z.ZodTypeDef, AddAutomationExclusionResponse>;
    /** @deprecated use `AddAutomationExclusionResponse$Outbound` instead. */
    type Outbound = AddAutomationExclusionResponse$Outbound;
}
export declare function addAutomationExclusionResponseToJSON(addAutomationExclusionResponse: AddAutomationExclusionResponse): string;
export declare function addAutomationExclusionResponseFromJSON(jsonString: string): SafeParseResult<AddAutomationExclusionResponse, SDKValidationError>;
