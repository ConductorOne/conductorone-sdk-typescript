import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * The UpdateStepUpProviderSecretResponse message.
 */
export type UpdateStepUpProviderSecretResponse = {
    stepUpProvider?: StepUpProvider | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderSecretResponse$inboundSchema: z.ZodType<UpdateStepUpProviderSecretResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStepUpProviderSecretResponse$Outbound = {
    stepUpProvider?: StepUpProvider$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderSecretResponse$outboundSchema: z.ZodType<UpdateStepUpProviderSecretResponse$Outbound, z.ZodTypeDef, UpdateStepUpProviderSecretResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStepUpProviderSecretResponse$ {
    /** @deprecated use `UpdateStepUpProviderSecretResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStepUpProviderSecretResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStepUpProviderSecretResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStepUpProviderSecretResponse$Outbound, z.ZodTypeDef, UpdateStepUpProviderSecretResponse>;
    /** @deprecated use `UpdateStepUpProviderSecretResponse$Outbound` instead. */
    type Outbound = UpdateStepUpProviderSecretResponse$Outbound;
}
export declare function updateStepUpProviderSecretResponseToJSON(updateStepUpProviderSecretResponse: UpdateStepUpProviderSecretResponse): string;
export declare function updateStepUpProviderSecretResponseFromJSON(jsonString: string): SafeParseResult<UpdateStepUpProviderSecretResponse, SDKValidationError>;
