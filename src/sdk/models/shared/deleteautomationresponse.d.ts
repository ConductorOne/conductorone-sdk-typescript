import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAutomationResponse message.
 */
export type DeleteAutomationResponse = {};
/** @internal */
export declare const DeleteAutomationResponse$inboundSchema: z.ZodType<DeleteAutomationResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAutomationResponse$Outbound = {};
/** @internal */
export declare const DeleteAutomationResponse$outboundSchema: z.ZodType<DeleteAutomationResponse$Outbound, z.ZodTypeDef, DeleteAutomationResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAutomationResponse$ {
    /** @deprecated use `DeleteAutomationResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAutomationResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAutomationResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAutomationResponse$Outbound, z.ZodTypeDef, DeleteAutomationResponse>;
    /** @deprecated use `DeleteAutomationResponse$Outbound` instead. */
    type Outbound = DeleteAutomationResponse$Outbound;
}
export declare function deleteAutomationResponseToJSON(deleteAutomationResponse: DeleteAutomationResponse): string;
export declare function deleteAutomationResponseFromJSON(jsonString: string): SafeParseResult<DeleteAutomationResponse, SDKValidationError>;
