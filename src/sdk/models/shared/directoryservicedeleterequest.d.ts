import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * DirectoryServiceDeleteRequest is the request message for deleting a directory. It uses URL values for input.
 */
export type DirectoryServiceDeleteRequest = {};
/** @internal */
export declare const DirectoryServiceDeleteRequest$inboundSchema: z.ZodType<DirectoryServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const DirectoryServiceDeleteRequest$outboundSchema: z.ZodType<DirectoryServiceDeleteRequest$Outbound, z.ZodTypeDef, DirectoryServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceDeleteRequest$ {
    /** @deprecated use `DirectoryServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceDeleteRequest$Outbound, z.ZodTypeDef, DirectoryServiceDeleteRequest>;
    /** @deprecated use `DirectoryServiceDeleteRequest$Outbound` instead. */
    type Outbound = DirectoryServiceDeleteRequest$Outbound;
}
export declare function directoryServiceDeleteRequestToJSON(directoryServiceDeleteRequest: DirectoryServiceDeleteRequest): string;
export declare function directoryServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<DirectoryServiceDeleteRequest, SDKValidationError>;
