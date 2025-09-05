import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceCreateResponse = {
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
    createStepUpProviderResponse?: shared.CreateStepUpProviderResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceCreateResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceCreateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceCreateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    CreateStepUpProviderResponse?: shared.CreateStepUpProviderResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceCreateResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceCreateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceCreateResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceCreateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceCreateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceCreateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceCreateResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceCreateResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceCreateResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceCreateResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceCreateResponseToJSON(c1ApiStepupV1StepUpProviderServiceCreateResponse: C1ApiStepupV1StepUpProviderServiceCreateResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceCreateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceCreateResponse, SDKValidationError>;
