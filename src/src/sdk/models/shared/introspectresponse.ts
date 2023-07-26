/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  IntrospectResponse contains information about the current user who is authenticated.
 *
 * @remarks
 *
 */
export class IntrospectResponse extends SpeakeasyBase {
    /**
     *  The list of feature flags enabled for the tenant the logged in user belongs to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "features" })
    features?: string[];

    /**
     *  The list of permissions that the current logged in user has.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "permissions" })
    permissions?: string[];

    /**
     *  The principleID of the current logged in user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "principleId" })
    principleId?: string;

    /**
     *  The list of roles that the current logged in user has.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roles" })
    roles?: string[];

    /**
     *  The userID of the current logged in user.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}
