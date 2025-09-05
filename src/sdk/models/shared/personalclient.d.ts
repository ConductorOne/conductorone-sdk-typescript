import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The PersonalClient message contains information about a presonal client credential.
 */
export type PersonalClient = {
    /**
     * If set, only allows the CIDRs in the array to use the credential.
     */
    allowSourceCidr?: Array<string> | null | undefined;
    /**
     * The clientID of the credential.
     */
    clientId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the personal client credential.
     */
    displayName?: string | null | undefined;
    expiresTime?: Date | null | undefined;
    /**
     * The unique ID of the personal client credential.
     */
    id?: string | null | undefined;
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
    /**
     * The ID of the user that this credential is created for.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const PersonalClient$inboundSchema: z.ZodType<PersonalClient, z.ZodTypeDef, unknown>;
/** @internal */
export type PersonalClient$Outbound = {
    allowSourceCidr?: Array<string> | null | undefined;
    clientId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    expiresTime?: string | null | undefined;
    id?: string | null | undefined;
    lastUsedAt?: string | null | undefined;
    scopedRoles?: Array<string> | null | undefined;
    updatedAt?: string | null | undefined;
    userId?: string | null | undefined;
};
/** @internal */
export declare const PersonalClient$outboundSchema: z.ZodType<PersonalClient$Outbound, z.ZodTypeDef, PersonalClient>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace PersonalClient$ {
    /** @deprecated use `PersonalClient$inboundSchema` instead. */
    const inboundSchema: z.ZodType<PersonalClient, z.ZodTypeDef, unknown>;
    /** @deprecated use `PersonalClient$outboundSchema` instead. */
    const outboundSchema: z.ZodType<PersonalClient$Outbound, z.ZodTypeDef, PersonalClient>;
    /** @deprecated use `PersonalClient$Outbound` instead. */
    type Outbound = PersonalClient$Outbound;
}
export declare function personalClientToJSON(personalClient: PersonalClient): string;
export declare function personalClientFromJSON(jsonString: string): SafeParseResult<PersonalClient, SDKValidationError>;
