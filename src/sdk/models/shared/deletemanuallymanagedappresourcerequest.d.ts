import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteManuallyManagedAppResourceRequest message.
 */
export type DeleteManuallyManagedAppResourceRequest = {};
/** @internal */
export declare const DeleteManuallyManagedAppResourceRequest$inboundSchema: z.ZodType<DeleteManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteManuallyManagedAppResourceRequest$Outbound = {};
/** @internal */
export declare const DeleteManuallyManagedAppResourceRequest$outboundSchema: z.ZodType<DeleteManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, DeleteManuallyManagedAppResourceRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteManuallyManagedAppResourceRequest$ {
    /** @deprecated use `DeleteManuallyManagedAppResourceRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteManuallyManagedAppResourceRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteManuallyManagedAppResourceRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteManuallyManagedAppResourceRequest$Outbound, z.ZodTypeDef, DeleteManuallyManagedAppResourceRequest>;
    /** @deprecated use `DeleteManuallyManagedAppResourceRequest$Outbound` instead. */
    type Outbound = DeleteManuallyManagedAppResourceRequest$Outbound;
}
export declare function deleteManuallyManagedAppResourceRequestToJSON(deleteManuallyManagedAppResourceRequest: DeleteManuallyManagedAppResourceRequest): string;
export declare function deleteManuallyManagedAppResourceRequestFromJSON(jsonString: string): SafeParseResult<DeleteManuallyManagedAppResourceRequest, SDKValidationError>;
