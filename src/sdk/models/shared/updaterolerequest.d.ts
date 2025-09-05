import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { RoleInput, RoleInput$Outbound } from "./roleinput.js";
/**
 * The UpdateRoleRequest message contains the role to update and the update mask.
 */
export type UpdateRoleRequest = {
    role?: RoleInput | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateRoleRequest$inboundSchema: z.ZodType<UpdateRoleRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateRoleRequest$Outbound = {
    role?: RoleInput$Outbound | null | undefined;
    updateMask?: string | null | undefined;
};
/** @internal */
export declare const UpdateRoleRequest$outboundSchema: z.ZodType<UpdateRoleRequest$Outbound, z.ZodTypeDef, UpdateRoleRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateRoleRequest$ {
    /** @deprecated use `UpdateRoleRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateRoleRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateRoleRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateRoleRequest$Outbound, z.ZodTypeDef, UpdateRoleRequest>;
    /** @deprecated use `UpdateRoleRequest$Outbound` instead. */
    type Outbound = UpdateRoleRequest$Outbound;
}
export declare function updateRoleRequestToJSON(updateRoleRequest: UpdateRoleRequest): string;
export declare function updateRoleRequestFromJSON(jsonString: string): SafeParseResult<UpdateRoleRequest, SDKValidationError>;
