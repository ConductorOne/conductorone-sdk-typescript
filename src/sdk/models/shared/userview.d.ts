import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { User, User$Outbound } from "./user.js";
/**
 * The UserView object provides a user response object, as well as JSONPATHs to related objects provided by expanders.
 */
export type UserView = {
    /**
     * JSONPATH expression indicating the location of the user objects of delegates of the current user in the expanded array.
     */
    delegatedUserPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of directory objects in the expanded array.
     */
    directoriesPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the user objects that managed the current user in the expanded array.
     */
    managersPath?: string | null | undefined;
    /**
     * JSONPATH expression indicating the location of the roles of the current user in the expanded array.
     */
    rolesPath?: string | null | undefined;
    user?: User | null | undefined;
};
/** @internal */
export declare const UserView$inboundSchema: z.ZodType<UserView, z.ZodTypeDef, unknown>;
/** @internal */
export type UserView$Outbound = {
    delegatedUserPath?: string | null | undefined;
    directoriesPath?: string | null | undefined;
    managersPath?: string | null | undefined;
    rolesPath?: string | null | undefined;
    user?: User$Outbound | null | undefined;
};
/** @internal */
export declare const UserView$outboundSchema: z.ZodType<UserView$Outbound, z.ZodTypeDef, UserView>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserView$ {
    /** @deprecated use `UserView$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserView, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserView$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserView$Outbound, z.ZodTypeDef, UserView>;
    /** @deprecated use `UserView$Outbound` instead. */
    type Outbound = UserView$Outbound;
}
export declare function userViewToJSON(userView: UserView): string;
export declare function userViewFromJSON(jsonString: string): SafeParseResult<UserView, SDKValidationError>;
