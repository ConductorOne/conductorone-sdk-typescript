import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UpdateStepUpProviderSecretRequest message.
 */
export type UpdateStepUpProviderSecretRequest = {
    /**
     * The clientSecret field.
     */
    clientSecret?: string | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderSecretRequest$inboundSchema: z.ZodType<UpdateStepUpProviderSecretRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStepUpProviderSecretRequest$Outbound = {
    clientSecret?: string | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderSecretRequest$outboundSchema: z.ZodType<UpdateStepUpProviderSecretRequest$Outbound, z.ZodTypeDef, UpdateStepUpProviderSecretRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStepUpProviderSecretRequest$ {
    /** @deprecated use `UpdateStepUpProviderSecretRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStepUpProviderSecretRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStepUpProviderSecretRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStepUpProviderSecretRequest$Outbound, z.ZodTypeDef, UpdateStepUpProviderSecretRequest>;
    /** @deprecated use `UpdateStepUpProviderSecretRequest$Outbound` instead. */
    type Outbound = UpdateStepUpProviderSecretRequest$Outbound;
}
export declare function updateStepUpProviderSecretRequestToJSON(updateStepUpProviderSecretRequest: UpdateStepUpProviderSecretRequest): string;
export declare function updateStepUpProviderSecretRequestFromJSON(jsonString: string): SafeParseResult<UpdateStepUpProviderSecretRequest, SDKValidationError>;
