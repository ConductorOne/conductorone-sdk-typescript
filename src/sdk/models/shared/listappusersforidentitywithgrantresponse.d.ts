import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppEntitlementUserBinding, AppEntitlementUserBinding$Outbound } from "./appentitlementuserbinding.js";
/**
 * The ListAppUsersForIdentityWithGrantResponse message.
 */
export type ListAppUsersForIdentityWithGrantResponse = {
    /**
     * The list of app users that may also have grant information.
     *
     * @remarks
     *  Without a grant, only the tenant, app, and app user ID will be set. With a grant, the whole struct is populated
     */
    bindings?: Array<AppEntitlementUserBinding> | null | undefined;
};
/** @internal */
export declare const ListAppUsersForIdentityWithGrantResponse$inboundSchema: z.ZodType<ListAppUsersForIdentityWithGrantResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListAppUsersForIdentityWithGrantResponse$Outbound = {
    bindings?: Array<AppEntitlementUserBinding$Outbound> | null | undefined;
};
/** @internal */
export declare const ListAppUsersForIdentityWithGrantResponse$outboundSchema: z.ZodType<ListAppUsersForIdentityWithGrantResponse$Outbound, z.ZodTypeDef, ListAppUsersForIdentityWithGrantResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListAppUsersForIdentityWithGrantResponse$ {
    /** @deprecated use `ListAppUsersForIdentityWithGrantResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListAppUsersForIdentityWithGrantResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListAppUsersForIdentityWithGrantResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListAppUsersForIdentityWithGrantResponse$Outbound, z.ZodTypeDef, ListAppUsersForIdentityWithGrantResponse>;
    /** @deprecated use `ListAppUsersForIdentityWithGrantResponse$Outbound` instead. */
    type Outbound = ListAppUsersForIdentityWithGrantResponse$Outbound;
}
export declare function listAppUsersForIdentityWithGrantResponseToJSON(listAppUsersForIdentityWithGrantResponse: ListAppUsersForIdentityWithGrantResponse): string;
export declare function listAppUsersForIdentityWithGrantResponseFromJSON(jsonString: string): SafeParseResult<ListAppUsersForIdentityWithGrantResponse, SDKValidationError>;
