/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * The UserView message.
 */
export class UserView extends SpeakeasyBase {
    /**
     *  The User object provides all of the details for an user, as well as some configuration.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "user" })
    @Type(() => User)
    user?: User;

    /**
     * The delegatedUserPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delegatedUserPath" })
    delegatedUserPath?: string;

    /**
     * The directoriesPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "directoriesPath" })
    directoriesPath?: string;

    /**
     * The managersPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "managersPath" })
    managersPath?: string;

    /**
     * The rolesPath field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "rolesPath" })
    rolesPath?: string;
}
