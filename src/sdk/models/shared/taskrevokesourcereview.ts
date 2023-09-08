/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The TaskRevokeSourceReview message tracks which access review was the source of the specificed revoke ticket.
 */
export class TaskRevokeSourceReview extends SpeakeasyBase {
    /**
     * The ID of the access review associated with the revoke task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accessReviewId" })
    accessReviewId?: string;

    /**
     * The ID of the certify ticket that was denied and created this revoke task.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certTicketId" })
    certTicketId?: string;
}