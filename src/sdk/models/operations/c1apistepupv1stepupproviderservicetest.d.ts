import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceTestRequest = {
    id: string | null;
    testStepUpProviderRequest?: shared.TestStepUpProviderRequest | undefined;
};
export type C1ApiStepupV1StepUpProviderServiceTestResponse = {
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
    testStepUpProviderResponse?: shared.TestStepUpProviderResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceTestRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceTestRequest$Outbound = {
    id: string | null;
    TestStepUpProviderRequest?: shared.TestStepUpProviderRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceTestRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceTestRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceTestRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceTestRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceTestRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceTestRequestToJSON(c1ApiStepupV1StepUpProviderServiceTestRequest: C1ApiStepupV1StepUpProviderServiceTestRequest): string;
export declare function c1ApiStepupV1StepUpProviderServiceTestRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceTestRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceTestResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceTestResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    TestStepUpProviderResponse?: shared.TestStepUpProviderResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceTestResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceTestResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceTestResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceTestResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceTestResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceTestResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceTestResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceTestResponseToJSON(c1ApiStepupV1StepUpProviderServiceTestResponse: C1ApiStepupV1StepUpProviderServiceTestResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceTestResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceTestResponse, SDKValidationError>;
