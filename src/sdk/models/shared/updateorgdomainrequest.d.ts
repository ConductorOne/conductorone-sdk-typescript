import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UpdateOrgDomainRequest message.
 */
export type UpdateOrgDomainRequest = {
    /**
     * The newDomains field.
     */
    newDomains?: Array<string> | null | undefined;
};
/** @internal */
export declare const UpdateOrgDomainRequest$inboundSchema: z.ZodType<UpdateOrgDomainRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateOrgDomainRequest$Outbound = {
    newDomains?: Array<string> | null | undefined;
};
/** @internal */
export declare const UpdateOrgDomainRequest$outboundSchema: z.ZodType<UpdateOrgDomainRequest$Outbound, z.ZodTypeDef, UpdateOrgDomainRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateOrgDomainRequest$ {
    /** @deprecated use `UpdateOrgDomainRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateOrgDomainRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateOrgDomainRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateOrgDomainRequest$Outbound, z.ZodTypeDef, UpdateOrgDomainRequest>;
    /** @deprecated use `UpdateOrgDomainRequest$Outbound` instead. */
    type Outbound = UpdateOrgDomainRequest$Outbound;
}
export declare function updateOrgDomainRequestToJSON(updateOrgDomainRequest: UpdateOrgDomainRequest): string;
export declare function updateOrgDomainRequestFromJSON(jsonString: string): SafeParseResult<UpdateOrgDomainRequest, SDKValidationError>;
