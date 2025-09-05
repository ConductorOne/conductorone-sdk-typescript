import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpTransaction, StepUpTransaction$Outbound } from "./stepuptransaction.js";
/**
 * Response message for searching step-up transactions
 */
export type SearchStepUpTransactionsResponse = {
    /**
     * List of transactions matching the search criteria
     */
    list?: Array<StepUpTransaction> | null | undefined;
    /**
     * Token for retrieving the next page of results
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpTransactionsResponse$inboundSchema: z.ZodType<SearchStepUpTransactionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchStepUpTransactionsResponse$Outbound = {
    list?: Array<StepUpTransaction$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpTransactionsResponse$outboundSchema: z.ZodType<SearchStepUpTransactionsResponse$Outbound, z.ZodTypeDef, SearchStepUpTransactionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchStepUpTransactionsResponse$ {
    /** @deprecated use `SearchStepUpTransactionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchStepUpTransactionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchStepUpTransactionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchStepUpTransactionsResponse$Outbound, z.ZodTypeDef, SearchStepUpTransactionsResponse>;
    /** @deprecated use `SearchStepUpTransactionsResponse$Outbound` instead. */
    type Outbound = SearchStepUpTransactionsResponse$Outbound;
}
export declare function searchStepUpTransactionsResponseToJSON(searchStepUpTransactionsResponse: SearchStepUpTransactionsResponse): string;
export declare function searchStepUpTransactionsResponseFromJSON(jsonString: string): SafeParseResult<SearchStepUpTransactionsResponse, SDKValidationError>;
