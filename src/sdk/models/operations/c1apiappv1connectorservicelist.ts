/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1ConnectorServiceListRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;
}

export class C1ApiAppV1ConnectorServiceListResponse extends SpeakeasyBase {
    /**
     *  The ConnectorServiceListResponse message contains a list of results and a nextPageToken if applicable
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    connectorServiceListResponse?: shared.ConnectorServiceListResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
