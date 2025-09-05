import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAutomationRequest message.
 */
export type DeleteAutomationRequest = {};
/** @internal */
export declare const DeleteAutomationRequest$inboundSchema: z.ZodType<DeleteAutomationRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAutomationRequest$Outbound = {};
/** @internal */
export declare const DeleteAutomationRequest$outboundSchema: z.ZodType<DeleteAutomationRequest$Outbound, z.ZodTypeDef, DeleteAutomationRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAutomationRequest$ {
    /** @deprecated use `DeleteAutomationRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAutomationRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAutomationRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAutomationRequest$Outbound, z.ZodTypeDef, DeleteAutomationRequest>;
    /** @deprecated use `DeleteAutomationRequest$Outbound` instead. */
    type Outbound = DeleteAutomationRequest$Outbound;
}
export declare function deleteAutomationRequestToJSON(deleteAutomationRequest: DeleteAutomationRequest): string;
export declare function deleteAutomationRequestFromJSON(jsonString: string): SafeParseResult<DeleteAutomationRequest, SDKValidationError>;
