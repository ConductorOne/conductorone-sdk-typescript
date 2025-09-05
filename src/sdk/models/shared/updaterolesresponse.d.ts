import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { Role, Role$Outbound } from "./role.js";
/**
 * UpdateRolesResponse is the response message containing the updated role.
 */
export type UpdateRolesResponse = {
    role?: Role | null | undefined;
};
/** @internal */
export declare const UpdateRolesResponse$inboundSchema: z.ZodType<UpdateRolesResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRolesResponse$Outbound = {
    role?: Role$Outbound | null | undefined;
};
/** @internal */
export declare const UpdateRolesResponse$outboundSchema: z.ZodType<UpdateRolesResponse$Outbound, z.ZodTypeDef, UpdateRolesResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateRolesResponse$ {
    /** @deprecated use `UpdateRolesResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateRolesResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateRolesResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateRolesResponse$Outbound, z.ZodTypeDef, UpdateRolesResponse>;
    /** @deprecated use `UpdateRolesResponse$Outbound` instead. */
    type Outbound = UpdateRolesResponse$Outbound;
}
export declare function updateRolesResponseToJSON(updateRolesResponse: UpdateRolesResponse): string;
export declare function updateRolesResponseFromJSON(jsonString: string): SafeParseResult<UpdateRolesResponse, SDKValidationError>;
