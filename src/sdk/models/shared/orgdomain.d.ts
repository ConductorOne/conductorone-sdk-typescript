import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The OrgDomain message.
 */
export type OrgDomain = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The domain field.
     */
    domain?: string | null | undefined;
    /**
     * The id field.
     */
    id?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const OrgDomain$inboundSchema: z.ZodType<OrgDomain, z.ZodTypeDef, unknown>;
/** @internal */
export type OrgDomain$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    domain?: string | null | undefined;
    id?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const OrgDomain$outboundSchema: z.ZodType<OrgDomain$Outbound, z.ZodTypeDef, OrgDomain>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace OrgDomain$ {
    /** @deprecated use `OrgDomain$inboundSchema` instead. */
    const inboundSchema: z.ZodType<OrgDomain, z.ZodTypeDef, unknown>;
    /** @deprecated use `OrgDomain$outboundSchema` instead. */
    const outboundSchema: z.ZodType<OrgDomain$Outbound, z.ZodTypeDef, OrgDomain>;
    /** @deprecated use `OrgDomain$Outbound` instead. */
    type Outbound = OrgDomain$Outbound;
}
export declare function orgDomainToJSON(orgDomain: OrgDomain): string;
export declare function orgDomainFromJSON(jsonString: string): SafeParseResult<OrgDomain, SDKValidationError>;
