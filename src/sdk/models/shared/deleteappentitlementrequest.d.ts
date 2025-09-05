import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAppEntitlementRequest message.
 */
export type DeleteAppEntitlementRequest = {};
/** @internal */
export declare const DeleteAppEntitlementRequest$inboundSchema: z.ZodType<DeleteAppEntitlementRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementRequest$Outbound = {};
/** @internal */
export declare const DeleteAppEntitlementRequest$outboundSchema: z.ZodType<DeleteAppEntitlementRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementRequest$ {
    /** @deprecated use `DeleteAppEntitlementRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementRequest>;
    /** @deprecated use `DeleteAppEntitlementRequest$Outbound` instead. */
    type Outbound = DeleteAppEntitlementRequest$Outbound;
}
export declare function deleteAppEntitlementRequestToJSON(deleteAppEntitlementRequest: DeleteAppEntitlementRequest): string;
export declare function deleteAppEntitlementRequestFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementRequest, SDKValidationError>;
