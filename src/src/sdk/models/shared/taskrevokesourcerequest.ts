/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  The TaskRevokeSourceRequest message indicates that the source of the revoke task was a request.
 *
 * @remarks
 *
 */
export class TaskRevokeSourceRequest extends SpeakeasyBase {
    /**
     *  The ID of the user who initiated the revoke request.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestUserId" })
    requestUserId?: string;
}