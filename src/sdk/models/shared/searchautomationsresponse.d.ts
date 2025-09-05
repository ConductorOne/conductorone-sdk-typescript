import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Automation, Automation$Outbound } from "./automation.js";
/**
 * The SearchAutomationsResponse message.
 */
export type SearchAutomationsResponse = {
    /**
     * The list field.
     */
    list?: Array<Automation> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationsResponse$inboundSchema: z.ZodType<SearchAutomationsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationsResponse$Outbound = {
    list?: Array<Automation$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationsResponse$outboundSchema: z.ZodType<SearchAutomationsResponse$Outbound, z.ZodTypeDef, SearchAutomationsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationsResponse$ {
    /** @deprecated use `SearchAutomationsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationsResponse$Outbound, z.ZodTypeDef, SearchAutomationsResponse>;
    /** @deprecated use `SearchAutomationsResponse$Outbound` instead. */
    type Outbound = SearchAutomationsResponse$Outbound;
}
export declare function searchAutomationsResponseToJSON(searchAutomationsResponse: SearchAutomationsResponse): string;
export declare function searchAutomationsResponseFromJSON(jsonString: string): SafeParseResult<SearchAutomationsResponse, SDKValidationError>;
