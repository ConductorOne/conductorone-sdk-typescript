import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest = {
    id: string | null;
    updateStepUpProviderSecretRequest?: shared.UpdateStepUpProviderSecretRequest | undefined;
};
export type C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    updateStepUpProviderSecretResponse?: shared.UpdateStepUpProviderSecretResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$Outbound = {
    id: string | null;
    UpdateStepUpProviderSecretRequest?: shared.UpdateStepUpProviderSecretRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceUpdateSecretRequestToJSON(c1ApiStepupV1StepUpProviderServiceUpdateSecretRequest: C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest): string;
export declare function c1ApiStepupV1StepUpProviderServiceUpdateSecretRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceUpdateSecretRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateStepUpProviderSecretResponse?: shared.UpdateStepUpProviderSecretResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceUpdateSecretResponseToJSON(c1ApiStepupV1StepUpProviderServiceUpdateSecretResponse: C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceUpdateSecretResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceUpdateSecretResponse, SDKValidationError>;
