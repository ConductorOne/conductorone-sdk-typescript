import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The ManuallyManagedUsersResponse message.
 */
export type ManuallyManagedUsersResponse = {
    /**
     * The failedUsersErrorMap field.
     */
    failedUsersErrorMap?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const ManuallyManagedUsersResponse$inboundSchema: z.ZodType<ManuallyManagedUsersResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ManuallyManagedUsersResponse$Outbound = {
    failedUsersErrorMap?: {
        [k: string]: string;
    } | null | undefined;
};
/** @internal */
export declare const ManuallyManagedUsersResponse$outboundSchema: z.ZodType<ManuallyManagedUsersResponse$Outbound, z.ZodTypeDef, ManuallyManagedUsersResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ManuallyManagedUsersResponse$ {
    /** @deprecated use `ManuallyManagedUsersResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ManuallyManagedUsersResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ManuallyManagedUsersResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ManuallyManagedUsersResponse$Outbound, z.ZodTypeDef, ManuallyManagedUsersResponse>;
    /** @deprecated use `ManuallyManagedUsersResponse$Outbound` instead. */
    type Outbound = ManuallyManagedUsersResponse$Outbound;
}
export declare function manuallyManagedUsersResponseToJSON(manuallyManagedUsersResponse: ManuallyManagedUsersResponse): string;
export declare function manuallyManagedUsersResponseFromJSON(jsonString: string): SafeParseResult<ManuallyManagedUsersResponse, SDKValidationError>;
