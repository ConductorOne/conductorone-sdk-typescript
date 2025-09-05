import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response body. Status code indicates success.
 */
export type DeleteAppResponse = {};
/** @internal */
export declare const DeleteAppResponse$inboundSchema: z.ZodType<DeleteAppResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppResponse$Outbound = {};
/** @internal */
export declare const DeleteAppResponse$outboundSchema: z.ZodType<DeleteAppResponse$Outbound, z.ZodTypeDef, DeleteAppResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppResponse$ {
    /** @deprecated use `DeleteAppResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppResponse$Outbound, z.ZodTypeDef, DeleteAppResponse>;
    /** @deprecated use `DeleteAppResponse$Outbound` instead. */
    type Outbound = DeleteAppResponse$Outbound;
}
export declare function deleteAppResponseToJSON(deleteAppResponse: DeleteAppResponse): string;
export declare function deleteAppResponseFromJSON(jsonString: string): SafeParseResult<DeleteAppResponse, SDKValidationError>;
