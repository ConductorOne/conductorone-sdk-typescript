import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AutomationTemplateVersion, AutomationTemplateVersion$Outbound } from "./automationtemplateversion.js";
/**
 * The SearchAutomationTemplateVersionsResponse message.
 */
export type SearchAutomationTemplateVersionsResponse = {
    /**
     * The list field.
     */
    list?: Array<AutomationTemplateVersion> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationTemplateVersionsResponse$inboundSchema: z.ZodType<SearchAutomationTemplateVersionsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchAutomationTemplateVersionsResponse$Outbound = {
    list?: Array<AutomationTemplateVersion$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const SearchAutomationTemplateVersionsResponse$outboundSchema: z.ZodType<SearchAutomationTemplateVersionsResponse$Outbound, z.ZodTypeDef, SearchAutomationTemplateVersionsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchAutomationTemplateVersionsResponse$ {
    /** @deprecated use `SearchAutomationTemplateVersionsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchAutomationTemplateVersionsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchAutomationTemplateVersionsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchAutomationTemplateVersionsResponse$Outbound, z.ZodTypeDef, SearchAutomationTemplateVersionsResponse>;
    /** @deprecated use `SearchAutomationTemplateVersionsResponse$Outbound` instead. */
    type Outbound = SearchAutomationTemplateVersionsResponse$Outbound;
}
export declare function searchAutomationTemplateVersionsResponseToJSON(searchAutomationTemplateVersionsResponse: SearchAutomationTemplateVersionsResponse): string;
export declare function searchAutomationTemplateVersionsResponseFromJSON(jsonString: string): SafeParseResult<SearchAutomationTemplateVersionsResponse, SDKValidationError>;
