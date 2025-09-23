import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type DirectoryServiceDeleteResponse = {};
/** @internal */
export declare const DirectoryServiceDeleteResponse$inboundSchema: z.ZodType<DirectoryServiceDeleteResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DirectoryServiceDeleteResponse$Outbound = {};
/** @internal */
export declare const DirectoryServiceDeleteResponse$outboundSchema: z.ZodType<DirectoryServiceDeleteResponse$Outbound, z.ZodTypeDef, DirectoryServiceDeleteResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DirectoryServiceDeleteResponse$ {
    /** @deprecated use `DirectoryServiceDeleteResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DirectoryServiceDeleteResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DirectoryServiceDeleteResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DirectoryServiceDeleteResponse$Outbound, z.ZodTypeDef, DirectoryServiceDeleteResponse>;
    /** @deprecated use `DirectoryServiceDeleteResponse$Outbound` instead. */
    type Outbound = DirectoryServiceDeleteResponse$Outbound;
}
export declare function directoryServiceDeleteResponseToJSON(directoryServiceDeleteResponse: DirectoryServiceDeleteResponse): string;
export declare function directoryServiceDeleteResponseFromJSON(jsonString: string): SafeParseResult<DirectoryServiceDeleteResponse, SDKValidationError>;
