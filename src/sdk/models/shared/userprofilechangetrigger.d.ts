import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * The UserProfileChangeTrigger message.
 */
export type UserProfileChangeTrigger = {
    /**
     * The condition field.
     */
    condition?: string | null | undefined;
};
/** @internal */
export declare const UserProfileChangeTrigger$inboundSchema: z.ZodType<UserProfileChangeTrigger, z.ZodTypeDef, unknown>;
/** @internal */
export type UserProfileChangeTrigger$Outbound = {
    condition?: string | null | undefined;
};
/** @internal */
export declare const UserProfileChangeTrigger$outboundSchema: z.ZodType<UserProfileChangeTrigger$Outbound, z.ZodTypeDef, UserProfileChangeTrigger>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserProfileChangeTrigger$ {
    /** @deprecated use `UserProfileChangeTrigger$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserProfileChangeTrigger, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserProfileChangeTrigger$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserProfileChangeTrigger$Outbound, z.ZodTypeDef, UserProfileChangeTrigger>;
    /** @deprecated use `UserProfileChangeTrigger$Outbound` instead. */
    type Outbound = UserProfileChangeTrigger$Outbound;
}
export declare function userProfileChangeTriggerToJSON(userProfileChangeTrigger: UserProfileChangeTrigger): string;
export declare function userProfileChangeTriggerFromJSON(jsonString: string): SafeParseResult<UserProfileChangeTrigger, SDKValidationError>;
