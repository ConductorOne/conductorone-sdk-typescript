/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1ConnectorServiceRotateCredentialRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    connectorServiceRotateCredentialRequest?: shared.ConnectorServiceRotateCredentialRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connector_id" })
    connectorId: string;
}

export class C1ApiAppV1ConnectorServiceRotateCredentialResponse extends SpeakeasyBase {
    /**
     *  ConnectorServiceRotateCredentialResponse is the response returned by the rotate method.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    connectorServiceRotateCredentialResponse?: shared.ConnectorServiceRotateCredentialResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
