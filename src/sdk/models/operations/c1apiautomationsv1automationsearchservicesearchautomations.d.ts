import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse = {
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
    searchAutomationsResponse?: shared.SearchAutomationsResponse | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    SearchAutomationsResponse?: shared.SearchAutomationsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$ {
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$Outbound, z.ZodTypeDef, C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse>;
    /** @deprecated use `C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$Outbound` instead. */
    type Outbound = C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse$Outbound;
}
export declare function c1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponseToJSON(c1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse: C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse): string;
export declare function c1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponseFromJSON(jsonString: string): SafeParseResult<C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse, SDKValidationError>;
