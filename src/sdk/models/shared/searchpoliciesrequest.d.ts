import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { PolicyRef, PolicyRef$Outbound } from "./policyref.js";
export declare const PolicyTypes: {
    readonly PolicyTypeUnspecified: "POLICY_TYPE_UNSPECIFIED";
    readonly PolicyTypeGrant: "POLICY_TYPE_GRANT";
    readonly PolicyTypeRevoke: "POLICY_TYPE_REVOKE";
    readonly PolicyTypeCertify: "POLICY_TYPE_CERTIFY";
    readonly PolicyTypeAccessRequest: "POLICY_TYPE_ACCESS_REQUEST";
    readonly PolicyTypeProvision: "POLICY_TYPE_PROVISION";
};
export type PolicyTypes = OpenEnum<typeof PolicyTypes>;
/**
 * Search Policies by a few properties.
 */
export type SearchPoliciesRequest = {
    /**
     * Search for policies with a case insensitive match on the display name.
     */
    displayName?: string | null | undefined;
    /**
     * The policy IDs to exclude from the search.
     */
    excludePolicyIds?: Array<string> | null | undefined;
    /**
     * The includeDeleted field.
     */
    includeDeleted?: boolean | null | undefined;
    /**
     * The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)
     */
    pageSize?: number | null | undefined;
    /**
     * The pageToken field.
     */
    pageToken?: string | null | undefined;
    /**
     * The policy type to search on. This can be POLICY_TYPE_GRANT, POLICY_TYPE_REVOKE, POLICY_TYPE_CERTIFY, POLICY_TYPE_ACCESS_REQUEST, or POLICY_TYPE_PROVISION.
     */
    policyTypes?: Array<PolicyTypes> | null | undefined;
    /**
     * Query the policies with a fuzzy search on display name and description.
     */
    query?: string | null | undefined;
    /**
     * The refs field.
     */
    refs?: Array<PolicyRef> | null | undefined;
};
/** @internal */
export declare const PolicyTypes$inboundSchema: z.ZodType<PolicyTypes, z.ZodTypeDef, unknown>;
/** @internal */
export declare const PolicyTypes$outboundSchema: z.ZodType<PolicyTypes, z.ZodTypeDef, PolicyTypes>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PolicyTypes$ {
    /** @deprecated use `PolicyTypes$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PolicyTypes, z.ZodTypeDef, unknown>;
    /** @deprecated use `PolicyTypes$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PolicyTypes, z.ZodTypeDef, PolicyTypes>;
}
/** @internal */
export declare const SearchPoliciesRequest$inboundSchema: z.ZodType<SearchPoliciesRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type SearchPoliciesRequest$Outbound = {
    displayName?: string | null | undefined;
    excludePolicyIds?: Array<string> | null | undefined;
    includeDeleted?: boolean | null | undefined;
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
    policyTypes?: Array<string> | null | undefined;
    query?: string | null | undefined;
    refs?: Array<PolicyRef$Outbound> | null | undefined;
};
/** @internal */
export declare const SearchPoliciesRequest$outboundSchema: z.ZodType<SearchPoliciesRequest$Outbound, z.ZodTypeDef, SearchPoliciesRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SearchPoliciesRequest$ {
    /** @deprecated use `SearchPoliciesRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SearchPoliciesRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `SearchPoliciesRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SearchPoliciesRequest$Outbound, z.ZodTypeDef, SearchPoliciesRequest>;
    /** @deprecated use `SearchPoliciesRequest$Outbound` instead. */
    type Outbound = SearchPoliciesRequest$Outbound;
}
export declare function searchPoliciesRequestToJSON(searchPoliciesRequest: SearchPoliciesRequest): string;
export declare function searchPoliciesRequestFromJSON(jsonString: string): SafeParseResult<SearchPoliciesRequest, SDKValidationError>;
