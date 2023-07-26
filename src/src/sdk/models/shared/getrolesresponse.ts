/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Role } from "./role";
import { Expose, Type } from "class-transformer";

/**
 *  The GetRolesResponse message contains the retrieved role.
 *
 * @remarks
 *
 */
export class GetRolesResponse extends SpeakeasyBase {
    /**
     *  Role is a role that can be assigned to a user in ConductorOne.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "role" })
    @Type(() => Role)
    role?: Role;
}
