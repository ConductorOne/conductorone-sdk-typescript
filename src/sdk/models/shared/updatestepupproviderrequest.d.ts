import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProviderInput, StepUpProviderInput$Outbound } from "./stepupproviderinput.js";
/**
 * The UpdateStepUpProviderRequest message.
 */
export type UpdateStepUpProviderRequest = {
    stepUpProvider?: StepUpProviderInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderRequest$inboundSchema: z.ZodType<UpdateStepUpProviderRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStepUpProviderRequest$Outbound = {
    stepUpProvider?: StepUpProviderInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderRequest$outboundSchema: z.ZodType<UpdateStepUpProviderRequest$Outbound, z.ZodTypeDef, UpdateStepUpProviderRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStepUpProviderRequest$ {
    /** @deprecated use `UpdateStepUpProviderRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStepUpProviderRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStepUpProviderRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStepUpProviderRequest$Outbound, z.ZodTypeDef, UpdateStepUpProviderRequest>;
    /** @deprecated use `UpdateStepUpProviderRequest$Outbound` instead. */
    type Outbound = UpdateStepUpProviderRequest$Outbound;
}
export declare function updateStepUpProviderRequestToJSON(updateStepUpProviderRequest: UpdateStepUpProviderRequest): string;
export declare function updateStepUpProviderRequestFromJSON(jsonString: string): SafeParseResult<UpdateStepUpProviderRequest, SDKValidationError>;
