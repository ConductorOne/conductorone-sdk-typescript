import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1OrgDomainServiceListRequest = {
    pageSize?: number | null | undefined;
    pageToken?: string | null | undefined;
};
export type C1ApiSettingsV1OrgDomainServiceListResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    listOrgDomainsResponse?: shared.ListOrgDomainsResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceListRequest$inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1OrgDomainServiceListRequest$Outbound = {
    page_size?: number | null | undefined;
    page_token?: string | null | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceListRequest$outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListRequest$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceListRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1OrgDomainServiceListRequest$ {
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListRequest$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceListRequest>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListRequest$Outbound` instead. */
    type Outbound = C1ApiSettingsV1OrgDomainServiceListRequest$Outbound;
}
export declare function c1ApiSettingsV1OrgDomainServiceListRequestToJSON(c1ApiSettingsV1OrgDomainServiceListRequest: C1ApiSettingsV1OrgDomainServiceListRequest): string;
export declare function c1ApiSettingsV1OrgDomainServiceListRequestFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1OrgDomainServiceListRequest, SDKValidationError>;
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceListResponse$inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1OrgDomainServiceListResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ListOrgDomainsResponse?: shared.ListOrgDomainsResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceListResponse$outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceListResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1OrgDomainServiceListResponse$ {
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceListResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceListResponse>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceListResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1OrgDomainServiceListResponse$Outbound;
}
export declare function c1ApiSettingsV1OrgDomainServiceListResponseToJSON(c1ApiSettingsV1OrgDomainServiceListResponse: C1ApiSettingsV1OrgDomainServiceListResponse): string;
export declare function c1ApiSettingsV1OrgDomainServiceListResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1OrgDomainServiceListResponse, SDKValidationError>;
