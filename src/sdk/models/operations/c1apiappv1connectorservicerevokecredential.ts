/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1ConnectorServiceRevokeCredentialRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    connectorServiceRevokeCredentialRequest?: shared.ConnectorServiceRevokeCredentialRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector_id" })
    connectorId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class C1ApiAppV1ConnectorServiceRevokeCredentialResponse extends SpeakeasyBase {
    /**
     *  Empty response body. Status code indicates success.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    connectorServiceRevokeCredentialResponse?: shared.ConnectorServiceRevokeCredentialResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
