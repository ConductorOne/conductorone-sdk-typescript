import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty request body
 */
export type DeleteAppRequest = {};
/** @internal */
export declare const DeleteAppRequest$inboundSchema: z.ZodType<DeleteAppRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppRequest$Outbound = {};
/** @internal */
export declare const DeleteAppRequest$outboundSchema: z.ZodType<DeleteAppRequest$Outbound, z.ZodTypeDef, DeleteAppRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppRequest$ {
    /** @deprecated use `DeleteAppRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppRequest$Outbound, z.ZodTypeDef, DeleteAppRequest>;
    /** @deprecated use `DeleteAppRequest$Outbound` instead. */
    type Outbound = DeleteAppRequest$Outbound;
}
export declare function deleteAppRequestToJSON(deleteAppRequest: DeleteAppRequest): string;
export declare function deleteAppRequestFromJSON(jsonString: string): SafeParseResult<DeleteAppRequest, SDKValidationError>;
