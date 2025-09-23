import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteManuallyManagedAppResourceResponse message.
 */
export type DeleteManuallyManagedAppResourceResponse = {};
/** @internal */
export declare const DeleteManuallyManagedAppResourceResponse$inboundSchema: z.ZodType<DeleteManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteManuallyManagedAppResourceResponse$Outbound = {};
/** @internal */
export declare const DeleteManuallyManagedAppResourceResponse$outboundSchema: z.ZodType<DeleteManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, DeleteManuallyManagedAppResourceResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteManuallyManagedAppResourceResponse$ {
    /** @deprecated use `DeleteManuallyManagedAppResourceResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteManuallyManagedAppResourceResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteManuallyManagedAppResourceResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteManuallyManagedAppResourceResponse$Outbound, z.ZodTypeDef, DeleteManuallyManagedAppResourceResponse>;
    /** @deprecated use `DeleteManuallyManagedAppResourceResponse$Outbound` instead. */
    type Outbound = DeleteManuallyManagedAppResourceResponse$Outbound;
}
export declare function deleteManuallyManagedAppResourceResponseToJSON(deleteManuallyManagedAppResourceResponse: DeleteManuallyManagedAppResourceResponse): string;
export declare function deleteManuallyManagedAppResourceResponseFromJSON(jsonString: string): SafeParseResult<DeleteManuallyManagedAppResourceResponse, SDKValidationError>;
