/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiTaskV1TaskServiceCreateRevokeTaskResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The TaskServiceCreateRevokeResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    @SpeakeasyMetadata()
    taskServiceCreateRevokeResponse?: shared.TaskServiceCreateRevokeResponse;
}
