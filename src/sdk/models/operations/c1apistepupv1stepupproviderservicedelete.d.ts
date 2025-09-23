import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpProviderServiceDeleteRequest = {
    id: string | null;
    deleteStepUpProviderRequest?: shared.DeleteStepUpProviderRequest | undefined;
};
export type C1ApiStepupV1StepUpProviderServiceDeleteResponse = {
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
    deleteStepUpProviderResponse?: shared.DeleteStepUpProviderResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceDeleteRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceDeleteRequest$Outbound = {
    id: string | null;
    DeleteStepUpProviderRequest?: shared.DeleteStepUpProviderRequest$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceDeleteRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceDeleteRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceDeleteRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceDeleteRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceDeleteRequestToJSON(c1ApiStepupV1StepUpProviderServiceDeleteRequest: C1ApiStepupV1StepUpProviderServiceDeleteRequest): string;
export declare function c1ApiStepupV1StepUpProviderServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceDeleteRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceDeleteResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpProviderServiceDeleteResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    DeleteStepUpProviderResponse?: shared.DeleteStepUpProviderResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpProviderServiceDeleteResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpProviderServiceDeleteResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpProviderServiceDeleteResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpProviderServiceDeleteResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpProviderServiceDeleteResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpProviderServiceDeleteResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpProviderServiceDeleteResponseToJSON(c1ApiStepupV1StepUpProviderServiceDeleteResponse: C1ApiStepupV1StepUpProviderServiceDeleteResponse): string;
export declare function c1ApiStepupV1StepUpProviderServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpProviderServiceDeleteResponse, SDKValidationError>;
