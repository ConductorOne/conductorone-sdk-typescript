/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RoleInput } from "./role";
import { Expose, Type } from "class-transformer";

/**
 * The UpdateRoleRequest message contains the role to update and the update mask.
 */
export class UpdateRoleRequestInput extends SpeakeasyBase {
    /**
     * Role is a role that can be assigned to a user in ConductorOne.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    @Type(() => RoleInput)
    role?: RoleInput;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}