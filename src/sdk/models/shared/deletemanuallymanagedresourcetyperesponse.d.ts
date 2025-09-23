import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The DeleteManuallyManagedResourceTypeResponse message.
 */
export type DeleteManuallyManagedResourceTypeResponse = {};
/** @internal */
export declare const DeleteManuallyManagedResourceTypeResponse$inboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type DeleteManuallyManagedResourceTypeResponse$Outbound = {};
/** @internal */
export declare const DeleteManuallyManagedResourceTypeResponse$outboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, DeleteManuallyManagedResourceTypeResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace DeleteManuallyManagedResourceTypeResponse$ {
    /** @deprecated use `DeleteManuallyManagedResourceTypeResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `DeleteManuallyManagedResourceTypeResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<DeleteManuallyManagedResourceTypeResponse$Outbound, z.ZodTypeDef, DeleteManuallyManagedResourceTypeResponse>;
    /** @deprecated use `DeleteManuallyManagedResourceTypeResponse$Outbound` instead. */
    type Outbound = DeleteManuallyManagedResourceTypeResponse$Outbound;
}
export declare function deleteManuallyManagedResourceTypeResponseToJSON(deleteManuallyManagedResourceTypeResponse: DeleteManuallyManagedResourceTypeResponse): string;
export declare function deleteManuallyManagedResourceTypeResponseFromJSON(jsonString: string): SafeParseResult<DeleteManuallyManagedResourceTypeResponse, SDKValidationError>;
