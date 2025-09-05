import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Policy, Policy$Outbound } from "./policy.js";
/**
 * The ListPolicyResponse message.
 */
export type ListPolicyResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<Policy> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListPolicyResponse$inboundSchema: z.ZodType<ListPolicyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListPolicyResponse$Outbound = {
    list?: Array<Policy$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListPolicyResponse$outboundSchema: z.ZodType<ListPolicyResponse$Outbound, z.ZodTypeDef, ListPolicyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListPolicyResponse$ {
    /** @deprecated use `ListPolicyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListPolicyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListPolicyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListPolicyResponse$Outbound, z.ZodTypeDef, ListPolicyResponse>;
    /** @deprecated use `ListPolicyResponse$Outbound` instead. */
    type Outbound = ListPolicyResponse$Outbound;
}
export declare function listPolicyResponseToJSON(listPolicyResponse: ListPolicyResponse): string;
export declare function listPolicyResponseFromJSON(jsonString: string): SafeParseResult<ListPolicyResponse, SDKValidationError>;
