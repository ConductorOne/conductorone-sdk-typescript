import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Role, Role$Outbound } from "./role.js";
/**
 * The ListRolesResponse message contains a list of results and a nextPageToken if applicable.
 */
export type ListRolesResponse = {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    list?: Array<Role> | null | undefined;
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
export declare const ListRolesResponse$inboundSchema: z.ZodType<ListRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListRolesResponse$Outbound = {
    list?: Array<Role$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListRolesResponse$outboundSchema: z.ZodType<ListRolesResponse$Outbound, z.ZodTypeDef, ListRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListRolesResponse$ {
    /** @deprecated use `ListRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListRolesResponse$Outbound, z.ZodTypeDef, ListRolesResponse>;
    /** @deprecated use `ListRolesResponse$Outbound` instead. */
    type Outbound = ListRolesResponse$Outbound;
}
export declare function listRolesResponseToJSON(listRolesResponse: ListRolesResponse): string;
export declare function listRolesResponseFromJSON(jsonString: string): SafeParseResult<ListRolesResponse, SDKValidationError>;
