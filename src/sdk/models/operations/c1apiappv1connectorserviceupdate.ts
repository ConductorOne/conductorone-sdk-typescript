/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1ConnectorServiceUpdateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    connectorServiceUpdateRequestInput?: shared.ConnectorServiceUpdateRequestInput;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class C1ApiAppV1ConnectorServiceUpdateResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    @SpeakeasyMetadata()
    connectorServiceUpdateResponse?: shared.ConnectorServiceUpdateResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
