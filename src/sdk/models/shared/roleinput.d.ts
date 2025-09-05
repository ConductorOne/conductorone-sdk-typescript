import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Role is a role that can be assigned to a user in ConductorOne.
 */
export type RoleInput = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the role.
     */
    displayName?: string | null | undefined;
    /**
     * The list of permissions this role has.
     */
    permissions?: Array<string> | null | undefined;
    /**
     * The list of serviceRoles that this role has.
     */
    serviceRoles?: Array<string> | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const RoleInput$inboundSchema: z.ZodType<RoleInput, z.ZodTypeDef, unknown>;
/** @internal */
export type RoleInput$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    permissions?: Array<string> | null | undefined;
    serviceRoles?: Array<string> | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const RoleInput$outboundSchema: z.ZodType<RoleInput$Outbound, z.ZodTypeDef, RoleInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace RoleInput$ {
    /** @deprecated use `RoleInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<RoleInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `RoleInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<RoleInput$Outbound, z.ZodTypeDef, RoleInput>;
    /** @deprecated use `RoleInput$Outbound` instead. */
    type Outbound = RoleInput$Outbound;
}
export declare function roleInputToJSON(roleInput: RoleInput): string;
export declare function roleInputFromJSON(jsonString: string): SafeParseResult<RoleInput, SDKValidationError>;
