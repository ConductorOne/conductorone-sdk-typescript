import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The ListAppOwnersResponse message.
 */
export type ListAppOwnersResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    list?: Array<User> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppOwnersResponse$inboundSchema: z.ZodType<ListAppOwnersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppOwnersResponse$Outbound = {
    list?: Array<User$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppOwnersResponse$outboundSchema: z.ZodType<ListAppOwnersResponse$Outbound, z.ZodTypeDef, ListAppOwnersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppOwnersResponse$ {
    /** @deprecated use `ListAppOwnersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppOwnersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppOwnersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppOwnersResponse$Outbound, z.ZodTypeDef, ListAppOwnersResponse>;
    /** @deprecated use `ListAppOwnersResponse$Outbound` instead. */
    type Outbound = ListAppOwnersResponse$Outbound;
}
export declare function listAppOwnersResponseToJSON(listAppOwnersResponse: ListAppOwnersResponse): string;
export declare function listAppOwnersResponseFromJSON(jsonString: string): SafeParseResult<ListAppOwnersResponse, SDKValidationError>;
