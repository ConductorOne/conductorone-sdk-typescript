import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The AddAppResourceOwnerRequest message.
 */
export type AddAppResourceOwnerRequest = {
    /**
     * The userId field.
     */
    userId?: string | null | undefined;
};
/** @internal */
export declare const AddAppResourceOwnerRequest$inboundSchema: z.ZodType<AddAppResourceOwnerRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type AddAppResourceOwnerRequest$Outbound = {
    userId?: string | null | undefined;
};
/** @internal */
export declare const AddAppResourceOwnerRequest$outboundSchema: z.ZodType<AddAppResourceOwnerRequest$Outbound, z.ZodTypeDef, AddAppResourceOwnerRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace AddAppResourceOwnerRequest$ {
    /** @deprecated use `AddAppResourceOwnerRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<AddAppResourceOwnerRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `AddAppResourceOwnerRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<AddAppResourceOwnerRequest$Outbound, z.ZodTypeDef, AddAppResourceOwnerRequest>;
    /** @deprecated use `AddAppResourceOwnerRequest$Outbound` instead. */
    type Outbound = AddAppResourceOwnerRequest$Outbound;
}
export declare function addAppResourceOwnerRequestToJSON(addAppResourceOwnerRequest: AddAppResourceOwnerRequest): string;
export declare function addAppResourceOwnerRequestFromJSON(jsonString: string): SafeParseResult<AddAppResourceOwnerRequest, SDKValidationError>;
