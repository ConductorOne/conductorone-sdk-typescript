import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAppEntitlementProxyResponse message.
 */
export type DeleteAppEntitlementProxyResponse = {};
/** @internal */
export declare const DeleteAppEntitlementProxyResponse$inboundSchema: z.ZodType<DeleteAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementProxyResponse$Outbound = {};
/** @internal */
export declare const DeleteAppEntitlementProxyResponse$outboundSchema: z.ZodType<DeleteAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementProxyResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementProxyResponse$ {
    /** @deprecated use `DeleteAppEntitlementProxyResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementProxyResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementProxyResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementProxyResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementProxyResponse>;
    /** @deprecated use `DeleteAppEntitlementProxyResponse$Outbound` instead. */
    type Outbound = DeleteAppEntitlementProxyResponse$Outbound;
}
export declare function deleteAppEntitlementProxyResponseToJSON(deleteAppEntitlementProxyResponse: DeleteAppEntitlementProxyResponse): string;
export declare function deleteAppEntitlementProxyResponseFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementProxyResponse, SDKValidationError>;
