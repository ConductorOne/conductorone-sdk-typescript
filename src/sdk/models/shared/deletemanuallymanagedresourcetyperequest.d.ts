import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteManuallyManagedResourceTypeRequest message.
 */
export type DeleteManuallyManagedResourceTypeRequest = {};
/** @internal */
export declare const DeleteManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteManuallyManagedResourceTypeRequest$Outbound = {};
/** @internal */
export declare const DeleteManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, DeleteManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `DeleteManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, DeleteManuallyManagedResourceTypeRequest>;
    /** @deprecated use `DeleteManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = DeleteManuallyManagedResourceTypeRequest$Outbound;
}
export declare function deleteManuallyManagedResourceTypeRequestToJSON(deleteManuallyManagedResourceTypeRequest: DeleteManuallyManagedResourceTypeRequest): string;
export declare function deleteManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<DeleteManuallyManagedResourceTypeRequest, SDKValidationError>;
