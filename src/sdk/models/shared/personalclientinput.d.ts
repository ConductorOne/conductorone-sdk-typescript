import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PersonalClient message contains information about a presonal client credential.
 */
export type PersonalClientInput = {
    /**
     * If set, only allows the CIDRs in the array to use the credential.
     */
    allowSourceCidr?: Array<string> | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the personal client credential.
     */
    displayName?: string | null | undefined;
    expiresTime?: Date | null | undefined;
    lastUsedAt?: Date | null | undefined;
    /**
     * scoped_roles provides a list of IAM Roles
     *
     * @remarks
     *  that this OAuth2 Client's API permissions
     *  are reduced to. The permissions granted to OAuth2 Client
     *  are AND'ed against the owning User's own permissions.
     */
    scopedRoles?: Array<string> | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const PersonalClientInput$inboundSchema: z.ZodType<PersonalClientInput, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClientInput$Outbound = {
    allowSourceCidr?: Array<string> | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    expiresTime?: string | null | undefined;
    lastUsedAt?: string | null | undefined;
    scopedRoles?: Array<string> | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const PersonalClientInput$outboundSchema: z.ZodType<PersonalClientInput$Outbound, z.ZodTypeDef, PersonalClientInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClientInput$ {
    /** @deprecated use `PersonalClientInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClientInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClientInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClientInput$Outbound, z.ZodTypeDef, PersonalClientInput>;
    /** @deprecated use `PersonalClientInput$Outbound` instead. */
    type Outbound = PersonalClientInput$Outbound;
}
export declare function personalClientInputToJSON(personalClientInput: PersonalClientInput): string;
export declare function personalClientInputFromJSON(jsonString: string): SafeParseResult<PersonalClientInput, SDKValidationError>;
