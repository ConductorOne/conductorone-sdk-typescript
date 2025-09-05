import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty request body. Just placeholder for the add app owner request which uses URL values for input.
 */
export type AddAppOwnerRequest = {};
/** @internal */
export declare const AddAppOwnerRequest$inboundSchema: z.ZodType<AddAppOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppOwnerRequest$Outbound = {};
/** @internal */
export declare const AddAppOwnerRequest$outboundSchema: z.ZodType<AddAppOwnerRequest$Outbound, z.ZodTypeDef, AddAppOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppOwnerRequest$ {
    /** @deprecated use `AddAppOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppOwnerRequest$Outbound, z.ZodTypeDef, AddAppOwnerRequest>;
    /** @deprecated use `AddAppOwnerRequest$Outbound` instead. */
    type Outbound = AddAppOwnerRequest$Outbound;
}
export declare function addAppOwnerRequestToJSON(addAppOwnerRequest: AddAppOwnerRequest): string;
export declare function addAppOwnerRequestFromJSON(jsonString: string): SafeParseResult<AddAppOwnerRequest, SDKValidationError>;
