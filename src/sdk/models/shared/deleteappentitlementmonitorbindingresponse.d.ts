import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteAppEntitlementMonitorBindingResponse message.
 */
export type DeleteAppEntitlementMonitorBindingResponse = {};
/** @internal */
export declare const DeleteAppEntitlementMonitorBindingResponse$inboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteAppEntitlementMonitorBindingResponse$Outbound = {};
/** @internal */
export declare const DeleteAppEntitlementMonitorBindingResponse$outboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementMonitorBindingResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteAppEntitlementMonitorBindingResponse$ {
    /** @deprecated use `DeleteAppEntitlementMonitorBindingResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteAppEntitlementMonitorBindingResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteAppEntitlementMonitorBindingResponse$Outbound, z.ZodTypeDef, DeleteAppEntitlementMonitorBindingResponse>;
    /** @deprecated use `DeleteAppEntitlementMonitorBindingResponse$Outbound` instead. */
    type Outbound = DeleteAppEntitlementMonitorBindingResponse$Outbound;
}
export declare function deleteAppEntitlementMonitorBindingResponseToJSON(deleteAppEntitlementMonitorBindingResponse: DeleteAppEntitlementMonitorBindingResponse): string;
export declare function deleteAppEntitlementMonitorBindingResponseFromJSON(jsonString: string): SafeParseResult<DeleteAppEntitlementMonitorBindingResponse, SDKValidationError>;
