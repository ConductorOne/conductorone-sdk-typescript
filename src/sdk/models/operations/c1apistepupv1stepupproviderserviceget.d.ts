import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceGetRequest = {
    id: string | null;
};
export type C1ApiStepupV1StepUpProviderServiceGetResponse = {
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
    getStepUpProviderResponse?: shared.GetStepUpProviderResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceGetRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceGetRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceGetRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceGetRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceGetRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceGetRequestToJSON(c1ApiStepupV1StepUpProviderServiceGetRequest: C1ApiStepupV1StepUpProviderServiceGetRequest): string;
export declare function c1ApiStepupV1StepUpProviderServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceGetResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetStepUpProviderResponse?: shared.GetStepUpProviderResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceGetResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceGetResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceGetResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceGetResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceGetResponseToJSON(c1ApiStepupV1StepUpProviderServiceGetResponse: C1ApiStepupV1StepUpProviderServiceGetResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceGetResponse, SDKValidationError>;
