import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The response message for listing app entitlement owners.
 */
export type ListAppEntitlementOwnersResponse = {
    /**
     * The list of owners for the app entitlement.
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
export declare const ListAppEntitlementOwnersResponse$inboundSchema: z.ZodType<ListAppEntitlementOwnersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppEntitlementOwnersResponse$Outbound = {
    list?: Array<User$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListAppEntitlementOwnersResponse$outboundSchema: z.ZodType<ListAppEntitlementOwnersResponse$Outbound, z.ZodTypeDef, ListAppEntitlementOwnersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppEntitlementOwnersResponse$ {
    /** @deprecated use `ListAppEntitlementOwnersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppEntitlementOwnersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppEntitlementOwnersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppEntitlementOwnersResponse$Outbound, z.ZodTypeDef, ListAppEntitlementOwnersResponse>;
    /** @deprecated use `ListAppEntitlementOwnersResponse$Outbound` instead. */
    type Outbound = ListAppEntitlementOwnersResponse$Outbound;
}
export declare function listAppEntitlementOwnersResponseToJSON(listAppEntitlementOwnersResponse: ListAppEntitlementOwnersResponse): string;
export declare function listAppEntitlementOwnersResponseFromJSON(jsonString: string): SafeParseResult<ListAppEntitlementOwnersResponse, SDKValidationError>;
