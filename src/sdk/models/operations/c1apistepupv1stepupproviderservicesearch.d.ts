import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceSearchResponse = {
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
     * Response message for searching step-up providers
     */
    searchStepUpProvidersResponse?: shared.SearchStepUpProvidersResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceSearchResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchStepUpProvidersResponse?: shared.SearchStepUpProvidersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceSearchResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceSearchResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceSearchResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceSearchResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceSearchResponseToJSON(c1ApiStepupV1StepUpProviderServiceSearchResponse: C1ApiStepupV1StepUpProviderServiceSearchResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceSearchResponse, SDKValidationError>;
