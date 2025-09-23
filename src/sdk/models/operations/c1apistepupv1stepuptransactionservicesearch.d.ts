import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiStepupV1StepUpTransactionServiceSearchResponse = {
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
     * Response message for searching step-up transactions
     */
    searchStepUpTransactionsResponse?: shared.SearchStepUpTransactionsResponse | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceSearchResponse$inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceSearchResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiStepupV1StepUpTransactionServiceSearchResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchStepUpTransactionsResponse?: shared.SearchStepUpTransactionsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiStepupV1StepUpTransactionServiceSearchResponse$outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceSearchResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiStepupV1StepUpTransactionServiceSearchResponse$ {
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceSearchResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceSearchResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceSearchResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiStepupV1StepUpTransactionServiceSearchResponse$Outbound, z.ZodTypeDef, C1ApiStepupV1StepUpTransactionServiceSearchResponse>;
    /** @deprecated use `C1ApiStepupV1StepUpTransactionServiceSearchResponse$Outbound` instead. */
    type Outbound = C1ApiStepupV1StepUpTransactionServiceSearchResponse$Outbound;
}
export declare function c1ApiStepupV1StepUpTransactionServiceSearchResponseToJSON(c1ApiStepupV1StepUpTransactionServiceSearchResponse: C1ApiStepupV1StepUpTransactionServiceSearchResponse): string;
export declare function c1ApiStepupV1StepUpTransactionServiceSearchResponseFromJSON(jsonString: string): SafeParseResult<C1ApiStepupV1StepUpTransactionServiceSearchResponse, SDKValidationError>;
