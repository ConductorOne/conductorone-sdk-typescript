import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The RemoveAppResourceOwnerRequest message.
 */
export type RemoveAppResourceOwnerRequest = {
    /**
     * The userId field.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const RemoveAppResourceOwnerRequest$inboundSchema: z.ZodType<RemoveAppResourceOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type RemoveAppResourceOwnerRequest$Outbound = {
    userId?: string | null | undefined;
};
/** @internal */
export declare const RemoveAppResourceOwnerRequest$outboundSchema: z.ZodType<RemoveAppResourceOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppResourceOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RemoveAppResourceOwnerRequest$ {
    /** @deprecated use `RemoveAppResourceOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RemoveAppResourceOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `RemoveAppResourceOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RemoveAppResourceOwnerRequest$Outbound, z.ZodTypeDef, RemoveAppResourceOwnerRequest>;
    /** @deprecated use `RemoveAppResourceOwnerRequest$Outbound` instead. */
    type Outbound = RemoveAppResourceOwnerRequest$Outbound;
}
export declare function removeAppResourceOwnerRequestToJSON(removeAppResourceOwnerRequest: RemoveAppResourceOwnerRequest): string;
export declare function removeAppResourceOwnerRequestFromJSON(jsonString: string): SafeParseResult<RemoveAppResourceOwnerRequest, SDKValidationError>;
