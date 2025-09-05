import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceUpdateRequest = {
    id: string | null;
    updateStepUpProviderRequest?: shared.UpdateStepUpProviderRequest | undefined;
};
export type C1ApiStepupV1StepUpProviderServiceUpdateResponse = {
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
    updateStepUpProviderResponse?: shared.UpdateStepUpProviderResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceUpdateRequest$Outbound = {
    id: string | null;
    UpdateStepUpProviderRequest?: shared.UpdateStepUpProviderRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceUpdateRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceUpdateRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceUpdateRequestToJSON(c1ApiStepupV1StepUpProviderServiceUpdateRequest: C1ApiStepupV1StepUpProviderServiceUpdateRequest): string;
export declare function c1ApiStepupV1StepUpProviderServiceUpdateRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceUpdateRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateStepUpProviderResponse?: shared.UpdateStepUpProviderResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceUpdateResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceUpdateResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceUpdateResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceUpdateResponseToJSON(c1ApiStepupV1StepUpProviderServiceUpdateResponse: C1ApiStepupV1StepUpProviderServiceUpdateResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceUpdateResponse, SDKValidationError>;
