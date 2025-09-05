import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The SecretTrait message.
 */
export type SecretTrait = {
    /**
     * The identityAppUserId field.
     */
    identityAppUserId?: string | null | undefined;
    lastUsedAt?: Date | null | undefined;
    secretCreatedAt?: Date | null | undefined;
    secretExpiresAt?: Date | null | undefined;
};
/** @internal */
export declare const SecretTrait$inboundSchema: z.ZodType<SecretTrait, z.ZodTypeDef, unknown>;
/** @internal */
export type SecretTrait$Outbound = {
    identityAppUserId?: string | null | undefined;
    lastUsedAt?: string | null | undefined;
    secretCreatedAt?: string | null | undefined;
    secretExpiresAt?: string | null | undefined;
};
/** @internal */
export declare const SecretTrait$outboundSchema: z.ZodType<SecretTrait$Outbound, z.ZodTypeDef, SecretTrait>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace SecretTrait$ {
    /** @deprecated use `SecretTrait$inboundSchema` instead. */
    const inboundSchema: z.ZodType<SecretTrait, z.ZodTypeDef, unknown>;
    /** @deprecated use `SecretTrait$outboundSchema` instead. */
    const outboundSchema: z.ZodType<SecretTrait$Outbound, z.ZodTypeDef, SecretTrait>;
    /** @deprecated use `SecretTrait$Outbound` instead. */
    type Outbound = SecretTrait$Outbound;
}
export declare function secretTraitToJSON(secretTrait: SecretTrait): string;
export declare function secretTraitFromJSON(jsonString: string): SafeParseResult<SecretTrait, SDKValidationError>;
