import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * This object indicates that an app is also a directory.
 */
export type Directory = {
    /**
     * The ID of the app associated with the directory.
     */
    appId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const Directory$inboundSchema: z.ZodType<Directory, z.ZodTypeDef, unknown>;
/** @internal */
export type Directory$Outbound = {
    appId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const Directory$outboundSchema: z.ZodType<Directory$Outbound, z.ZodTypeDef, Directory>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Directory$ {
    /** @deprecated use `Directory$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Directory, z.ZodTypeDef, unknown>;
    /** @deprecated use `Directory$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Directory$Outbound, z.ZodTypeDef, Directory>;
    /** @deprecated use `Directory$Outbound` instead. */
    type Outbound = Directory$Outbound;
}
export declare function directoryToJSON(directory: Directory): string;
export declare function directoryFromJSON(jsonString: string): SafeParseResult<Directory, SDKValidationError>;
