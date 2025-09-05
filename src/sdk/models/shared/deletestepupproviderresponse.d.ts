import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteStepUpProviderResponse message.
 */
export type DeleteStepUpProviderResponse = {};
/** @internal */
export declare const DeleteStepUpProviderResponse$inboundSchema: z.ZodType<DeleteStepUpProviderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStepUpProviderResponse$Outbound = {};
/** @internal */
export declare const DeleteStepUpProviderResponse$outboundSchema: z.ZodType<DeleteStepUpProviderResponse$Outbound, z.ZodTypeDef, DeleteStepUpProviderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStepUpProviderResponse$ {
    /** @deprecated use `DeleteStepUpProviderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStepUpProviderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStepUpProviderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStepUpProviderResponse$Outbound, z.ZodTypeDef, DeleteStepUpProviderResponse>;
    /** @deprecated use `DeleteStepUpProviderResponse$Outbound` instead. */
    type Outbound = DeleteStepUpProviderResponse$Outbound;
}
export declare function deleteStepUpProviderResponseToJSON(deleteStepUpProviderResponse: DeleteStepUpProviderResponse): string;
export declare function deleteStepUpProviderResponseFromJSON(jsonString: string): SafeParseResult<DeleteStepUpProviderResponse, SDKValidationError>;
