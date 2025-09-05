import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { DirectoryExpandMask, DirectoryExpandMask$Outbound } from "./directoryexpandmask.js";
/**
 * Uplevel an app into a full directory.
 */
export type DirectoryServiceCreateRequest = {
    /**
     * The AppID to make into a directory, providing identities and more for the C1 app.
     */
    appId?: string | null | undefined;
    expandMask?: DirectoryExpandMask | null | undefined;
};
/** @internal */
export declare const DirectoryServiceCreateRequest$inboundSchema: z.ZodType<DirectoryServiceCreateRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceCreateRequest$Outbound = {
    appId?: string | null | undefined;
    expandMask?: DirectoryExpandMask$Outbound | null | undefined;
};
/** @internal */
export declare const DirectoryServiceCreateRequest$outboundSchema: z.ZodType<DirectoryServiceCreateRequest$Outbound, z.ZodTypeDef, DirectoryServiceCreateRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceCreateRequest$ {
    /** @deprecated use `DirectoryServiceCreateRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceCreateRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceCreateRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceCreateRequest$Outbound, z.ZodTypeDef, DirectoryServiceCreateRequest>;
    /** @deprecated use `DirectoryServiceCreateRequest$Outbound` instead. */
    type Outbound = DirectoryServiceCreateRequest$Outbound;
}
export declare function directoryServiceCreateRequestToJSON(directoryServiceCreateRequest: DirectoryServiceCreateRequest): string;
export declare function directoryServiceCreateRequestFromJSON(jsonString: string): SafeParseResult<DirectoryServiceCreateRequest, SDKValidationError>;
