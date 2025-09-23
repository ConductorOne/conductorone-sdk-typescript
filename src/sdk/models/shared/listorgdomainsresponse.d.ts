import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OrgDomain, OrgDomain$Outbound } from "./orgdomain.js";
/**
 * The ListOrgDomainsResponse message.
 */
export type ListOrgDomainsResponse = {
    /**
     * The list field.
     */
    list?: Array<OrgDomain> | null | undefined;
    /**
     * The nextPageToken field.
     */
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListOrgDomainsResponse$inboundSchema: z.ZodType<ListOrgDomainsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ListOrgDomainsResponse$Outbound = {
    list?: Array<OrgDomain$Outbound> | null | undefined;
    nextPageToken?: string | null | undefined;
};
/** @internal */
export declare const ListOrgDomainsResponse$outboundSchema: z.ZodType<ListOrgDomainsResponse$Outbound, z.ZodTypeDef, ListOrgDomainsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ListOrgDomainsResponse$ {
    /** @deprecated use `ListOrgDomainsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ListOrgDomainsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ListOrgDomainsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ListOrgDomainsResponse$Outbound, z.ZodTypeDef, ListOrgDomainsResponse>;
    /** @deprecated use `ListOrgDomainsResponse$Outbound` instead. */
    type Outbound = ListOrgDomainsResponse$Outbound;
}
export declare function listOrgDomainsResponseToJSON(listOrgDomainsResponse: ListOrgDomainsResponse): string;
export declare function listOrgDomainsResponseFromJSON(jsonString: string): SafeParseResult<ListOrgDomainsResponse, SDKValidationError>;
