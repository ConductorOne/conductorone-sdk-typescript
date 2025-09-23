import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * The GetStepUpProviderResponse message.
 */
export type GetStepUpProviderResponse = {
    stepUpProvider?: StepUpProvider | null | undefined;
};
/** @internal */
export declare const GetStepUpProviderResponse$inboundSchema: z.ZodType<GetStepUpProviderResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type GetStepUpProviderResponse$Outbound = {
    stepUpProvider?: StepUpProvider$Outbound | null | undefined;
};
/** @internal */
export declare const GetStepUpProviderResponse$outboundSchema: z.ZodType<GetStepUpProviderResponse$Outbound, z.ZodTypeDef, GetStepUpProviderResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace GetStepUpProviderResponse$ {
    /** @deprecated use `GetStepUpProviderResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<GetStepUpProviderResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `GetStepUpProviderResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<GetStepUpProviderResponse$Outbound, z.ZodTypeDef, GetStepUpProviderResponse>;
    /** @deprecated use `GetStepUpProviderResponse$Outbound` instead. */
    type Outbound = GetStepUpProviderResponse$Outbound;
}
export declare function getStepUpProviderResponseToJSON(getStepUpProviderResponse: GetStepUpProviderResponse): string;
export declare function getStepUpProviderResponseFromJSON(jsonString: string): SafeParseResult<GetStepUpProviderResponse, SDKValidationError>;
