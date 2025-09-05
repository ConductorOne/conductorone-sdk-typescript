import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { EncryptedData, EncryptedData$Outbound } from "./encrypteddata.js";
/**
 * A credentials for the Application User that represents an account in the application.
 *
 * @remarks
 *
 * This message contains a oneof named credential. Only a single field of the following list may be set at a time:
 *   - encryptedData
 */
export type AppUserCredential = {
    /**
     * The ID of the application.
     */
    appId?: string | null | undefined;
    /**
     * A unique identifier of the application user.
     */
    appUserId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    encryptedData?: EncryptedData | null | undefined;
    expiresAt?: Date | null | undefined;
    /**
     * A unique identifier of the credential.
     */
    id?: string | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const AppUserCredential$inboundSchema: z.ZodType<AppUserCredential, z.ZodTypeDef, unknown>;
/** @internal */
export type AppUserCredential$Outbound = {
    appId?: string | null | undefined;
    appUserId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    encryptedData?: EncryptedData$Outbound | null | undefined;
    expiresAt?: string | null | undefined;
    id?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const AppUserCredential$outboundSchema: z.ZodType<AppUserCredential$Outbound, z.ZodTypeDef, AppUserCredential>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AppUserCredential$ {
    /** @deprecated use `AppUserCredential$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AppUserCredential, z.ZodTypeDef, unknown>;
    /** @deprecated use `AppUserCredential$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AppUserCredential$Outbound, z.ZodTypeDef, AppUserCredential>;
    /** @deprecated use `AppUserCredential$Outbound` instead. */
    type Outbound = AppUserCredential$Outbound;
}
export declare function appUserCredentialToJSON(appUserCredential: AppUserCredential): string;
export declare function appUserCredentialFromJSON(jsonString: string): SafeParseResult<AppUserCredential, SDKValidationError>;
