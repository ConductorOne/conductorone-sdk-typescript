/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1AppResourceServiceGetRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_resource_type_id" })
    appResourceTypeId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class C1ApiAppV1AppResourceServiceGetResponse extends SpeakeasyBase {
    /**
     *  The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    appResourceServiceGetResponse?: shared.AppResourceServiceGetResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
