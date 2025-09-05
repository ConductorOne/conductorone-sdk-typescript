import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * EncryptedData is a message that contains encrypted bytes and metadata.
 */
export type EncryptedData = {
    /**
     * The human-readable description of the encrypted data.
     */
    description?: string | null | undefined;
    /**
     * The encrypted bytes.
     */
    encryptedBytes?: string | null | undefined;
    /**
     * The key ID used to encrypt the data.
     */
    keyId?: string | null | undefined;
    /**
     * The human-readable name of the encrypted data.
     */
    name?: string | null | undefined;
    /**
     * The encryption provider used to encrypt the data.
     */
    provider?: string | null | undefined;
    /**
     * The (optional) JSON schema of the encrypted data.
     */
    schema?: string | null | undefined;
};
/** @internal */
export declare const EncryptedData$inboundSchema: z.ZodType<EncryptedData, z.ZodTypeDef, unknown>;
/** @internal */
export type EncryptedData$Outbound = {
    description?: string | null | undefined;
    encryptedBytes?: string | null | undefined;
    keyId?: string | null | undefined;
    name?: string | null | undefined;
    provider?: string | null | undefined;
    schema?: string | null | undefined;
};
/** @internal */
export declare const EncryptedData$outboundSchema: z.ZodType<EncryptedData$Outbound, z.ZodTypeDef, EncryptedData>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace EncryptedData$ {
    /** @deprecated use `EncryptedData$inboundSchema` instead. */
    const inboundSchema: z.ZodType<EncryptedData, z.ZodTypeDef, unknown>;
    /** @deprecated use `EncryptedData$outboundSchema` instead. */
    const outboundSchema: z.ZodType<EncryptedData$Outbound, z.ZodTypeDef, EncryptedData>;
    /** @deprecated use `EncryptedData$Outbound` instead. */
    type Outbound = EncryptedData$Outbound;
}
export declare function encryptedDataToJSON(encryptedData: EncryptedData): string;
export declare function encryptedDataFromJSON(jsonString: string): SafeParseResult<EncryptedData, SDKValidationError>;
