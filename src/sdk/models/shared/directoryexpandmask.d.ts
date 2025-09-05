import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The fields to be included in the directory response.
 */
export type DirectoryExpandMask = {
    /**
     * An array of fields to be included in the directory response.
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const DirectoryExpandMask$inboundSchema: z.ZodType<DirectoryExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const DirectoryExpandMask$outboundSchema: z.ZodType<DirectoryExpandMask$Outbound, z.ZodTypeDef, DirectoryExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryExpandMask$ {
    /** @deprecated use `DirectoryExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryExpandMask$Outbound, z.ZodTypeDef, DirectoryExpandMask>;
    /** @deprecated use `DirectoryExpandMask$Outbound` instead. */
    type Outbound = DirectoryExpandMask$Outbound;
}
export declare function directoryExpandMaskToJSON(directoryExpandMask: DirectoryExpandMask): string;
export declare function directoryExpandMaskFromJSON(jsonString: string): SafeParseResult<DirectoryExpandMask, SDKValidationError>;
