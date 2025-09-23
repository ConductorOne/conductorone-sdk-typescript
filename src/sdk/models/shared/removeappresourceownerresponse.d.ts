import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveAppResourceOwnerResponse message.
 */
export type RemoveAppResourceOwnerResponse = {};
/** @internal */
export declare const RemoveAppResourceOwnerResponse$inboundSchema: z.ZodType<RemoveAppResourceOwnerResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppResourceOwnerResponse$Outbound = {};
/** @internal */
export declare const RemoveAppResourceOwnerResponse$outboundSchema: z.ZodType<RemoveAppResourceOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppResourceOwnerResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppResourceOwnerResponse$ {
    /** @deprecated use `RemoveAppResourceOwnerResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppResourceOwnerResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppResourceOwnerResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppResourceOwnerResponse$Outbound, z.ZodTypeDef, RemoveAppResourceOwnerResponse>;
    /** @deprecated use `RemoveAppResourceOwnerResponse$Outbound` instead. */
    type Outbound = RemoveAppResourceOwnerResponse$Outbound;
}
export declare function removeAppResourceOwnerResponseToJSON(removeAppResourceOwnerResponse: RemoveAppResourceOwnerResponse): string;
export declare function removeAppResourceOwnerResponseFromJSON(jsonString: string): SafeParseResult<RemoveAppResourceOwnerResponse, SDKValidationError>;
