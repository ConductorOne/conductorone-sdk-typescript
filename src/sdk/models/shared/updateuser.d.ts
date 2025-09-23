import * as z from "zod";
import { OpenEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { UserRef, UserRef$Outbound } from "./userref.js";
/**
 * The userStatusEnum field.
 *
 * @remarks
 * This field is part of the `user_status` oneof.
 * See the documentation for `c1.api.automations.v1.UpdateUser` for more details.
 */
export declare const UserStatusEnum: {
    readonly Unknown: "UNKNOWN";
    readonly Enabled: "ENABLED";
    readonly Disabled: "DISABLED";
    readonly Deleted: "DELETED";
};
/**
 * The userStatusEnum field.
 *
 * @remarks
 * This field is part of the `user_status` oneof.
 * See the documentation for `c1.api.automations.v1.UpdateUser` for more details.
 */
export type UserStatusEnum = OpenEnum<typeof UserStatusEnum>;
/**
 * The UpdateUser message.
 *
 * @remarks
 *
 * This message contains a oneof named user. Only a single field of the following list may be set at a time:
 *   - userIdCel
 *   - userRef
 *
 * This message contains a oneof named user_status. Only a single field of the following list may be set at a time:
 *   - userStatusEnum
 *   - userStatusCel
 */
export type UpdateUser = {
    /**
     * If true, the step will use the subject user of the automation as the subject.
     */
    useSubjectUser?: boolean | null | undefined;
    /**
     * The userIdCel field.
     *
     * @remarks
     * This field is part of the `user` oneof.
     * See the documentation for `c1.api.automations.v1.UpdateUser` for more details.
     */
    userIdCel?: string | null | undefined;
    userRef?: UserRef | null | undefined;
    /**
     * The userStatusCel field.
     *
     * @remarks
     * This field is part of the `user_status` oneof.
     * See the documentation for `c1.api.automations.v1.UpdateUser` for more details.
     */
    userStatusCel?: string | null | undefined;
    /**
     * The userStatusEnum field.
     *
     * @remarks
     * This field is part of the `user_status` oneof.
     * See the documentation for `c1.api.automations.v1.UpdateUser` for more details.
     */
    userStatusEnum?: UserStatusEnum | null | undefined;
};
/** @internal */
export declare const UserStatusEnum$inboundSchema: z.ZodType<UserStatusEnum, z.ZodTypeDef, unknown>;
/** @internal */
export declare const UserStatusEnum$outboundSchema: z.ZodType<UserStatusEnum, z.ZodTypeDef, UserStatusEnum>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UserStatusEnum$ {
    /** @deprecated use `UserStatusEnum$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UserStatusEnum, z.ZodTypeDef, unknown>;
    /** @deprecated use `UserStatusEnum$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UserStatusEnum, z.ZodTypeDef, UserStatusEnum>;
}
/** @internal */
export declare const UpdateUser$inboundSchema: z.ZodType<UpdateUser, z.ZodTypeDef, unknown>;
/** @internal */
export type UpdateUser$Outbound = {
    useSubjectUser?: boolean | null | undefined;
    userIdCel?: string | null | undefined;
    userRef?: UserRef$Outbound | null | undefined;
    userStatusCel?: string | null | undefined;
    userStatusEnum?: string | null | undefined;
};
/** @internal */
export declare const UpdateUser$outboundSchema: z.ZodType<UpdateUser$Outbound, z.ZodTypeDef, UpdateUser>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace UpdateUser$ {
    /** @deprecated use `UpdateUser$inboundSchema` instead. */
    const inboundSchema: z.ZodType<UpdateUser, z.ZodTypeDef, unknown>;
    /** @deprecated use `UpdateUser$outboundSchema` instead. */
    const outboundSchema: z.ZodType<UpdateUser$Outbound, z.ZodTypeDef, UpdateUser>;
    /** @deprecated use `UpdateUser$Outbound` instead. */
    type Outbound = UpdateUser$Outbound;
}
export declare function updateUserToJSON(updateUser: UpdateUser): string;
export declare function updateUserFromJSON(jsonString: string): SafeParseResult<UpdateUser, SDKValidationError>;
