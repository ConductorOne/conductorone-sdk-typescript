import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAppEntitlementResponse message.
 */
export type DeleteAppEntitlementResponse = {};
/** @internal */
export declare const DeleteAppEntitlementResponse$inboundSchema: z.ZodType<DeleteAppEntitlementResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementResponse$Outbound = {};
/** @internal */
export declare const DeleteAppEntitlementResponse$outboundSchema: z.ZodType<DeleteAppEntitlementResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementResponse$ {
    /** @deprecated use `DeleteAppEntitlementResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementResponse>;
    /** @deprecated use `DeleteAppEntitlementResponse$Outbound` instead. */
    type Outbound = DeleteAppEntitlementResponse$Outbound;
}
export declare function deleteAppEntitlementResponseToJSON(deleteAppEntitlementResponse: DeleteAppEntitlementResponse): string;
export declare function deleteAppEntitlementResponseFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementResponse, SDKValidationError>;
