/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiTaskV1TaskActionsServiceCommentRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    taskActionsServiceCommentRequest?: shared.TaskActionsServiceCommentRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
    taskId: string;
}

export class C1ApiTaskV1TaskActionsServiceCommentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Successful response
     */
    @SpeakeasyMetadata()
    taskActionsServiceCommentResponse?: shared.TaskActionsServiceCommentResponse;
}