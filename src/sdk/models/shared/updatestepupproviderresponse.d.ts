import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * The UpdateStepUpProviderResponse message.
 */
export type UpdateStepUpProviderResponse = {
    stepUpProvider?: StepUpProvider | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderResponse$inboundSchema: z.ZodType<UpdateStepUpProviderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateStepUpProviderResponse$Outbound = {
    stepUpProvider?: StepUpProvider$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateStepUpProviderResponse$outboundSchema: z.ZodType<UpdateStepUpProviderResponse$Outbound, z.ZodTypeDef, UpdateStepUpProviderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateStepUpProviderResponse$ {
    /** @deprecated use `UpdateStepUpProviderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateStepUpProviderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateStepUpProviderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateStepUpProviderResponse$Outbound, z.ZodTypeDef, UpdateStepUpProviderResponse>;
    /** @deprecated use `UpdateStepUpProviderResponse$Outbound` instead. */
    type Outbound = UpdateStepUpProviderResponse$Outbound;
}
export declare function updateStepUpProviderResponseToJSON(updateStepUpProviderResponse: UpdateStepUpProviderResponse): string;
export declare function updateStepUpProviderResponseFromJSON(jsonString: string): SafeParseResult<UpdateStepUpProviderResponse, SDKValidationError>;
