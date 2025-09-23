import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpTransactionServiceGetRequest = {
    id: string | null;
};
export type C1ApiStepupV1StepUpTransactionServiceGetResponse = {
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
     * Response message containing the requested step-up transaction
     */
    getStepUpTransactionResponse?: shared.GetStepUpTransactionResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceGetRequest$inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpTransactionServiceGetRequest$Outbound = {
    id: string | null;
};
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceGetRequest$outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceGetRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpTransactionServiceGetRequest$ {
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetRequest$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceGetRequest>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetRequest$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpTransactionServiceGetRequest$Outbound;
}
export declare function c1ApiStepupV1StepUpTransactionServiceGetRequestToJSON(c1ApiStepupV1StepUpTransactionServiceGetRequest: C1ApiStepupV1StepUpTransactionServiceGetRequest): string;
export declare function c1ApiStepupV1StepUpTransactionServiceGetRequestFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpTransactionServiceGetRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceGetResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpTransactionServiceGetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    GetStepUpTransactionResponse?: shared.GetStepUpTransactionResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceGetResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceGetResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpTransactionServiceGetResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceGetResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceGetResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceGetResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpTransactionServiceGetResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpTransactionServiceGetResponseToJSON(c1ApiStepupV1StepUpTransactionServiceGetResponse: C1ApiStepupV1StepUpTransactionServiceGetResponse): string;
export declare function c1ApiStepupV1StepUpTransactionServiceGetResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpTransactionServiceGetResponse, SDKValidationError>;
