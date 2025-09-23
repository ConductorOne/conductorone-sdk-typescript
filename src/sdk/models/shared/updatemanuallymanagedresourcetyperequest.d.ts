import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { AppResourceTypeInput, AppResourceTypeInput$Outbound } from "./appresourcetypeinput.js";
/**
 * The UpdateManuallyManagedResourceTypeRequest message.
 */
export type UpdateManuallyManagedResourceTypeRequest = {
    appResourceType?: AppResourceTypeInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateManuallyManagedResourceTypeRequest$inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateManuallyManagedResourceTypeRequest$Outbound = {
    appResourceType?: AppResourceTypeInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateManuallyManagedResourceTypeRequest$outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateManuallyManagedResourceTypeRequest$ {
    /** @deprecated use `UpdateManuallyManagedResourceTypeRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateManuallyManagedResourceTypeRequest$Outbound, z.ZodTypeDef, UpdateManuallyManagedResourceTypeRequest>;
    /** @deprecated use `UpdateManuallyManagedResourceTypeRequest$Outbound` instead. */
    type Outbound = UpdateManuallyManagedResourceTypeRequest$Outbound;
}
export declare function updateManuallyManagedResourceTypeRequestToJSON(updateManuallyManagedResourceTypeRequest: UpdateManuallyManagedResourceTypeRequest): string;
export declare function updateManuallyManagedResourceTypeRequestFromJSON(jsonString: string): SafeParseResult<UpdateManuallyManagedResourceTypeRequest, SDKValidationError>;
