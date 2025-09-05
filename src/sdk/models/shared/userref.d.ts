import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * A reference to a user.
 */
export type UserRef = {
    /**
     * The id of the user.
     */
    id?: string | null | undefined;
};
/** @internal */
export declare const UserRef$inboundSchema: z.ZodType<UserRef, z.ZodTypeDef, unknown>;
/** @internal */
export type UserRef$Outbound = {
    id?: string | null | undefined;
};
/** @internal */
export declare const UserRef$outboundSchema: z.ZodType<UserRef$Outbound, z.ZodTypeDef, UserRef>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserRef$ {
    /** @deprecated use `UserRef$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserRef, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserRef$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserRef$Outbound, z.ZodTypeDef, UserRef>;
    /** @deprecated use `UserRef$Outbound` instead. */
    type Outbound = UserRef$Outbound;
}
export declare function userRefToJSON(userRef: UserRef): string;
export declare function userRefFromJSON(jsonString: string): SafeParseResult<UserRef, SDKValidationError>;
