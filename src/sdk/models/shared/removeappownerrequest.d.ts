import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * RemoveAppOwnerRequest is the request body for removing an app owner. It uses URL values for input.
 */
export type RemoveAppOwnerRequest = {};
/** @internal */
export declare const RemoveAppOwnerRequest$inboundSchema: z.ZodType<RemoveAppOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppOwnerRequest$Outbound = {};
/** @internal */
export declare const RemoveAppOwnerRequest$outboundSchema: z.ZodType<RemoveAppOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppOwnerRequest$ {
    /** @deprecated use `RemoveAppOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppOwnerRequest>;
    /** @deprecated use `RemoveAppOwnerRequest$Outbound` instead. */
    type Outbound = RemoveAppOwnerRequest$Outbound;
}
export declare function removeAppOwnerRequestToJSON(removeAppOwnerRequest: RemoveAppOwnerRequest): string;
export declare function removeAppOwnerRequestFromJSON(jsonString: string): SafeParseResult<RemoveAppOwnerRequest, SDKValidationError>;
