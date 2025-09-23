import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UserAttributeMappingSource message.
 */
export type UserAttributeMappingSource = {
    /**
     * The appId field.
     */
    appId?: string | null | undefined;
    /**
     * The appUserId field.
     */
    appUserId?: string | null | undefined;
    /**
     * The appUserProfileAttributeKey field.
     */
    appUserProfileAttributeKey?: string | null | undefined;
    /**
     * The userAttributeMappingId field.
     */
    userAttributeMappingId?: string | null | undefined;
    /**
     * The value field.
     */
    value?: string | null | undefined;
};
/** @internal */
export declare const UserAttributeMappingSource$inboundSchema: z.ZodType<UserAttributeMappingSource, z.ZodTypeDef, unknown>;
/** @internal */
export type UserAttributeMappingSource$Outbound = {
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    appUserProfileAttributeKey?: string | null | undefined;
    userAttributeMappingId?: string | null | undefined;
    value?: string | null | undefined;
};
/** @internal */
export declare const UserAttributeMappingSource$outboundSchema: z.ZodType<UserAttributeMappingSource$Outbound, z.ZodTypeDef, UserAttributeMappingSource>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserAttributeMappingSource$ {
    /** @deprecated use `UserAttributeMappingSource$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserAttributeMappingSource, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserAttributeMappingSource$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserAttributeMappingSource$Outbound, z.ZodTypeDef, UserAttributeMappingSource>;
    /** @deprecated use `UserAttributeMappingSource$Outbound` instead. */
    type Outbound = UserAttributeMappingSource$Outbound;
}
export declare function userAttributeMappingSourceToJSON(userAttributeMappingSource: UserAttributeMappingSource): string;
export declare function userAttributeMappingSourceFromJSON(jsonString: string): SafeParseResult<UserAttributeMappingSource, SDKValidationError>;
