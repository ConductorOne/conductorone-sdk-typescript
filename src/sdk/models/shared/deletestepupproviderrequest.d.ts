import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteStepUpProviderRequest message.
 */
export type DeleteStepUpProviderRequest = {};
/** @internal */
export declare const DeleteStepUpProviderRequest$inboundSchema: z.ZodType<DeleteStepUpProviderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteStepUpProviderRequest$Outbound = {};
/** @internal */
export declare const DeleteStepUpProviderRequest$outboundSchema: z.ZodType<DeleteStepUpProviderRequest$Outbound, z.ZodTypeDef, DeleteStepUpProviderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteStepUpProviderRequest$ {
    /** @deprecated use `DeleteStepUpProviderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteStepUpProviderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteStepUpProviderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteStepUpProviderRequest$Outbound, z.ZodTypeDef, DeleteStepUpProviderRequest>;
    /** @deprecated use `DeleteStepUpProviderRequest$Outbound` instead. */
    type Outbound = DeleteStepUpProviderRequest$Outbound;
}
export declare function deleteStepUpProviderRequestToJSON(deleteStepUpProviderRequest: DeleteStepUpProviderRequest): string;
export declare function deleteStepUpProviderRequestFromJSON(jsonString: string): SafeParseResult<DeleteStepUpProviderRequest, SDKValidationError>;
