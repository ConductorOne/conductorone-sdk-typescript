import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { StepUpProvider, StepUpProvider$Outbound } from "./stepupprovider.js";
/**
 * Response message for searching step-up providers
 */
export type SearchStepUpProvidersResponse = {
    /**
     * List of providers matching the search criteria
     */
    list?: Array<StepUpProvider> | null | undefined;
    /**
     * Token for retrieving the next page of results
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpProvidersResponse$inboundSchema: z.ZodType<SearchStepUpProvidersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchStepUpProvidersResponse$Outbound = {
    list?: Array<StepUpProvider$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchStepUpProvidersResponse$outboundSchema: z.ZodType<SearchStepUpProvidersResponse$Outbound, z.ZodTypeDef, SearchStepUpProvidersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchStepUpProvidersResponse$ {
    /** @deprecated use `SearchStepUpProvidersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchStepUpProvidersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchStepUpProvidersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchStepUpProvidersResponse$Outbound, z.ZodTypeDef, SearchStepUpProvidersResponse>;
    /** @deprecated use `SearchStepUpProvidersResponse$Outbound` instead. */
    type Outbound = SearchStepUpProvidersResponse$Outbound;
}
export declare function searchStepUpProvidersResponseToJSON(searchStepUpProvidersResponse: SearchStepUpProvidersResponse): string;
export declare function searchStepUpProvidersResponseFromJSON(jsonString: string): SafeParseResult<SearchStepUpProvidersResponse, SDKValidationError>;
