import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The user expand mask is used to indicate which related objects should be expanded in the response.
 *
 * @remarks
 *  The supported paths are 'role_ids', 'manager_ids', 'delegated_user_id', 'directory_ids', and '*'.
 */
export type UserExpandMask = {
    /**
     * An array of paths to be expanded in the response.
     */
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const UserExpandMask$inboundSchema: z.ZodType<UserExpandMask, z.ZodTypeDef, unknown>;
/** @internal */
export type UserExpandMask$Outbound = {
    paths?: Array<string> | null | undefined;
};
/** @internal */
export declare const UserExpandMask$outboundSchema: z.ZodType<UserExpandMask$Outbound, z.ZodTypeDef, UserExpandMask>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserExpandMask$ {
    /** @deprecated use `UserExpandMask$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserExpandMask, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserExpandMask$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserExpandMask$Outbound, z.ZodTypeDef, UserExpandMask>;
    /** @deprecated use `UserExpandMask$Outbound` instead. */
    type Outbound = UserExpandMask$Outbound;
}
export declare function userExpandMaskToJSON(userExpandMask: UserExpandMask): string;
export declare function userExpandMaskFromJSON(jsonString: string): SafeParseResult<UserExpandMask, SDKValidationError>;
