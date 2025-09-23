import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UserProperties message.
 */
export type UserProperties = {
    /**
     * The displayNameCel field.
     */
    displayNameCel?: string | null | undefined;
    /**
     * The emailCel field.
     */
    emailCel?: string | null | undefined;
    /**
     * The profileAttributeCel field.
     */
    profileAttributeCel?: string | null | undefined;
    /**
     * The usernameCel field.
     */
    usernameCel?: string | null | undefined;
};
/** @internal */
export declare const UserProperties$inboundSchema: z.ZodType<UserProperties, z.ZodTypeDef, unknown>;
/** @internal */
export type UserProperties$Outbound = {
    displayNameCel?: string | null | undefined;
    emailCel?: string | null | undefined;
    profileAttributeCel?: string | null | undefined;
    usernameCel?: string | null | undefined;
};
/** @internal */
export declare const UserProperties$outboundSchema: z.ZodType<UserProperties$Outbound, z.ZodTypeDef, UserProperties>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserProperties$ {
    /** @deprecated use `UserProperties$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserProperties, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserProperties$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserProperties$Outbound, z.ZodTypeDef, UserProperties>;
    /** @deprecated use `UserProperties$Outbound` instead. */
    type Outbound = UserProperties$Outbound;
}
export declare function userPropertiesToJSON(userProperties: UserProperties): string;
export declare function userPropertiesFromJSON(jsonString: string): SafeParseResult<UserProperties, SDKValidationError>;
