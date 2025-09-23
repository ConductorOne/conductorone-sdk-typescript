import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";
export type C1ApiSettingsV1OrgDomainServiceUpdateResponse = {
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
    updateOrgDomainResponse?: shared.UpdateOrgDomainResponse | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceUpdateResponse$inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceUpdateResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type C1ApiSettingsV1OrgDomainServiceUpdateResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    UpdateOrgDomainResponse?: shared.UpdateOrgDomainResponse$Outbound | undefined;
};
/** @internal */
export declare const C1ApiSettingsV1OrgDomainServiceUpdateResponse$outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceUpdateResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace C1ApiSettingsV1OrgDomainServiceUpdateResponse$ {
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceUpdateResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceUpdateResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceUpdateResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<C1ApiSettingsV1OrgDomainServiceUpdateResponse$Outbound, z.ZodTypeDef, C1ApiSettingsV1OrgDomainServiceUpdateResponse>;
    /** @deprecated use `C1ApiSettingsV1OrgDomainServiceUpdateResponse$Outbound` instead. */
    type Outbound = C1ApiSettingsV1OrgDomainServiceUpdateResponse$Outbound;
}
export declare function c1ApiSettingsV1OrgDomainServiceUpdateResponseToJSON(c1ApiSettingsV1OrgDomainServiceUpdateResponse: C1ApiSettingsV1OrgDomainServiceUpdateResponse): string;
export declare function c1ApiSettingsV1OrgDomainServiceUpdateResponseFromJSON(jsonString: string): SafeParseResult<C1ApiSettingsV1OrgDomainServiceUpdateResponse, SDKValidationError>;
