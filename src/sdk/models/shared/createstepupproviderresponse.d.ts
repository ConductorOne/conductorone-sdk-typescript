import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * The CreateStepUpProviderResponse message.
 */
export type CreateStepUpProviderResponse = {
    stepUpProvider?: StepUpProvider | null | undefined;
};
/** @internal */
export declare const CreateStepUpProviderResponse$inboundSchema: z.ZodType<CreateStepUpProviderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type CreateStepUpProviderResponse$Outbound = {
    stepUpProvider?: StepUpProvider$Outbound | null | undefined;
};
/** @internal */
export declare const CreateStepUpProviderResponse$outboundSchema: z.ZodType<CreateStepUpProviderResponse$Outbound, z.ZodTypeDef, CreateStepUpProviderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace CreateStepUpProviderResponse$ {
    /** @deprecated use `CreateStepUpProviderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<CreateStepUpProviderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `CreateStepUpProviderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<CreateStepUpProviderResponse$Outbound, z.ZodTypeDef, CreateStepUpProviderResponse>;
    /** @deprecated use `CreateStepUpProviderResponse$Outbound` instead. */
    type Outbound = CreateStepUpProviderResponse$Outbound;
}
export declare function createStepUpProviderResponseToJSON(createStepUpProviderResponse: CreateStepUpProviderResponse): string;
export declare function createStepUpProviderResponseFromJSON(jsonString: string): SafeParseResult<CreateStepUpProviderResponse, SDKValidationError>;
