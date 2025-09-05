import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success
 */
export type AddAppOwnerResponse = {};
/** @internal */
export declare const AddAppOwnerResponse$inboundSchema: z.ZodType<AddAppOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppOwnerResponse$Outbound = {};
/** @internal */
export declare const AddAppOwnerResponse$outboundSchema: z.ZodType<AddAppOwnerResponse$Outbound, z.ZodTypeDef, AddAppOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppOwnerResponse$ {
    /** @deprecated use `AddAppOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppOwnerResponse$Outbound, z.ZodTypeDef, AddAppOwnerResponse>;
    /** @deprecated use `AddAppOwnerResponse$Outbound` instead. */
    type Outbound = AddAppOwnerResponse$Outbound;
}
export declare function addAppOwnerResponseToJSON(addAppOwnerResponse: AddAppOwnerResponse): string;
export declare function addAppOwnerResponseFromJSON(jsonString: string): SafeParseResult<AddAppOwnerResponse, SDKValidationError>;
