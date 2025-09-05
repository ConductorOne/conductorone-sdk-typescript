import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response with a status code indicating success.
 */
export type RemoveAppOwnerResponse = {};
/** @internal */
export declare const RemoveAppOwnerResponse$inboundSchema: z.ZodType<RemoveAppOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppOwnerResponse$Outbound = {};
/** @internal */
export declare const RemoveAppOwnerResponse$outboundSchema: z.ZodType<RemoveAppOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppOwnerResponse$ {
    /** @deprecated use `RemoveAppOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppOwnerResponse>;
    /** @deprecated use `RemoveAppOwnerResponse$Outbound` instead. */
    type Outbound = RemoveAppOwnerResponse$Outbound;
}
export declare function removeAppOwnerResponseToJSON(removeAppOwnerResponse: RemoveAppOwnerResponse): string;
export declare function removeAppOwnerResponseFromJSON(jsonString: string): SafeParseResult<RemoveAppOwnerResponse, SDKValidationError>;
