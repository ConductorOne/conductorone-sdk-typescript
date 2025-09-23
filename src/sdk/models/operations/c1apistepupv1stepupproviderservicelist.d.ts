import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceListResponse = {
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
    listStepUpProvidersResponse?: shared.ListStepUpProvidersResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceListResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListStepUpProvidersResponse?: shared.ListStepUpProvidersResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceListResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceListResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceListResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceListResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceListResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceListResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceListResponseToJSON(c1ApiStepupV1StepUpProviderServiceListResponse: C1ApiStepupV1StepUpProviderServiceListResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceListResponse, SDKValidationError>;
