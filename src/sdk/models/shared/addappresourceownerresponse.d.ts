import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AddAppResourceOwnerResponse message.
 */
export type AddAppResourceOwnerResponse = {};
/** @internal */
export declare const AddAppResourceOwnerResponse$inboundSchema: z.ZodType<AddAppResourceOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppResourceOwnerResponse$Outbound = {};
/** @internal */
export declare const AddAppResourceOwnerResponse$outboundSchema: z.ZodType<AddAppResourceOwnerResponse$Outbound, z.ZodTypeDef, AddAppResourceOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppResourceOwnerResponse$ {
    /** @deprecated use `AddAppResourceOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppResourceOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppResourceOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppResourceOwnerResponse$Outbound, z.ZodTypeDef, AddAppResourceOwnerResponse>;
    /** @deprecated use `AddAppResourceOwnerResponse$Outbound` instead. */
    type Outbound = AddAppResourceOwnerResponse$Outbound;
}
export declare function addAppResourceOwnerResponseToJSON(addAppResourceOwnerResponse: AddAppResourceOwnerResponse): string;
export declare function addAppResourceOwnerResponseFromJSON(jsonString: string): SafeParseResult<AddAppResourceOwnerResponse, SDKValidationError>;
