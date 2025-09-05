import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The ListAppResourceOwnersResponse message contains a list of results and a nextPageToken if applicable
 */
export type ListAppResourceOwnersResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<User> | null | undefined;
    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppResourceOwnersResponse$inboundSchema: z.ZodType<ListAppResourceOwnersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppResourceOwnersResponse$Outbound = {
    list?: Array<User$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppResourceOwnersResponse$outboundSchema: z.ZodType<ListAppResourceOwnersResponse$Outbound, z.ZodTypeDef, ListAppResourceOwnersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppResourceOwnersResponse$ {
    /** @deprecated use `ListAppResourceOwnersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppResourceOwnersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppResourceOwnersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppResourceOwnersResponse$Outbound, z.ZodTypeDef, ListAppResourceOwnersResponse>;
    /** @deprecated use `ListAppResourceOwnersResponse$Outbound` instead. */
    type Outbound = ListAppResourceOwnersResponse$Outbound;
}
export declare function listAppResourceOwnersResponseToJSON(listAppResourceOwnersResponse: ListAppResourceOwnersResponse): string;
export declare function listAppResourceOwnersResponseFromJSON(jsonString: string): SafeParseResult<ListAppResourceOwnersResponse, SDKValidationError>;
