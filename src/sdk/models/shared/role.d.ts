import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Role is a role that can be assigned to a user in ConductorOne.
 */
export type Role = {
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the role.
     */
    displayName?: string | null | undefined;
    /**
     * The id of the role.
     */
    id?: string | null | undefined;
    /**
     * The internal name of the role.
     */
    name?: string | null | undefined;
    /**
     * The list of permissions this role has.
     */
    permissions?: Array<string> | null | undefined;
    /**
     * The list of serviceRoles that this role has.
     */
    serviceRoles?: Array<string> | null | undefined;
    /**
     * This Role is intended for API keys usage only, and the user interface may not function as expected.
     */
    systemApiOnly?: boolean | null | undefined;
    /**
     * The system builtin field. If this field is set, the role is not editable.
     */
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const Role$inboundSchema: z.ZodType<Role, z.ZodTypeDef, unknown>;
/** @internal */
export type Role$Outbound = {
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    id?: string | null | undefined;
    name?: string | null | undefined;
    permissions?: Array<string> | null | undefined;
    serviceRoles?: Array<string> | null | undefined;
    systemApiOnly?: boolean | null | undefined;
    systemBuiltin?: boolean | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const Role$outboundSchema: z.ZodType<Role$Outbound, z.ZodTypeDef, Role>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Role$ {
    /** @deprecated use `Role$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Role, z.ZodTypeDef, unknown>;
    /** @deprecated use `Role$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Role$Outbound, z.ZodTypeDef, Role>;
    /** @deprecated use `Role$Outbound` instead. */
    type Outbound = Role$Outbound;
}
export declare function roleToJSON(role: Role): string;
export declare function roleFromJSON(jsonString: string): SafeParseResult<Role, SDKValidationError>;
