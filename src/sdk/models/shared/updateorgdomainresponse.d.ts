import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { OrgDomain, OrgDomain$Outbound } from "./orgdomain.js";
/**
 * The UpdateOrgDomainResponse message.
 */
export type UpdateOrgDomainResponse = {
    /**
     * The list field.
     */
    list?: Array<OrgDomain> | null | undefined;
};
/** @internal */
export declare const UpdateOrgDomainResponse$inboundSchema: z.ZodType<UpdateOrgDomainResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateOrgDomainResponse$Outbound = {
    list?: Array<OrgDomain$Outbound> | null | undefined;
};
/** @internal */
export declare const UpdateOrgDomainResponse$outboundSchema: z.ZodType<UpdateOrgDomainResponse$Outbound, z.ZodTypeDef, UpdateOrgDomainResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateOrgDomainResponse$ {
    /** @deprecated use `UpdateOrgDomainResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateOrgDomainResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateOrgDomainResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateOrgDomainResponse$Outbound, z.ZodTypeDef, UpdateOrgDomainResponse>;
    /** @deprecated use `UpdateOrgDomainResponse$Outbound` instead. */
    type Outbound = UpdateOrgDomainResponse$Outbound;
}
export declare function updateOrgDomainResponseToJSON(updateOrgDomainResponse: UpdateOrgDomainResponse): string;
export declare function updateOrgDomainResponseFromJSON(jsonString: string): SafeParseResult<UpdateOrgDomainResponse, SDKValidationError>;
