import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AddManuallyManagedUsersRequest message.
 */
export type AddManuallyManagedUsersRequest = {
    /**
     * The userIds field.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AddManuallyManagedUsersRequest$inboundSchema: z.ZodType<AddManuallyManagedUsersRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddManuallyManagedUsersRequest$Outbound = {
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const AddManuallyManagedUsersRequest$outboundSchema: z.ZodType<AddManuallyManagedUsersRequest$Outbound, z.ZodTypeDef, AddManuallyManagedUsersRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddManuallyManagedUsersRequest$ {
    /** @deprecated use `AddManuallyManagedUsersRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddManuallyManagedUsersRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddManuallyManagedUsersRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddManuallyManagedUsersRequest$Outbound, z.ZodTypeDef, AddManuallyManagedUsersRequest>;
    /** @deprecated use `AddManuallyManagedUsersRequest$Outbound` instead. */
    type Outbound = AddManuallyManagedUsersRequest$Outbound;
}
export declare function addManuallyManagedUsersRequestToJSON(addManuallyManagedUsersRequest: AddManuallyManagedUsersRequest): string;
export declare function addManuallyManagedUsersRequestFromJSON(jsonString: string): SafeParseResult<AddManuallyManagedUsersRequest, SDKValidationError>;
