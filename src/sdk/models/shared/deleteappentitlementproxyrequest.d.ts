import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAppEntitlementProxyRequest message.
 */
export type DeleteAppEntitlementProxyRequest = {};
/** @internal */
export declare const DeleteAppEntitlementProxyRequest$inboundSchema: z.ZodType<DeleteAppEntitlementProxyRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementProxyRequest$Outbound = {};
/** @internal */
export declare const DeleteAppEntitlementProxyRequest$outboundSchema: z.ZodType<DeleteAppEntitlementProxyRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementProxyRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementProxyRequest$ {
    /** @deprecated use `DeleteAppEntitlementProxyRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementProxyRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementProxyRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementProxyRequest$Outbound, z.ZodTypeDef, DeleteAppEntitlementProxyRequest>;
    /** @deprecated use `DeleteAppEntitlementProxyRequest$Outbound` instead. */
    type Outbound = DeleteAppEntitlementProxyRequest$Outbound;
}
export declare function deleteAppEntitlementProxyRequestToJSON(deleteAppEntitlementProxyRequest: DeleteAppEntitlementProxyRequest): string;
export declare function deleteAppEntitlementProxyRequestFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementProxyRequest, SDKValidationError>;
