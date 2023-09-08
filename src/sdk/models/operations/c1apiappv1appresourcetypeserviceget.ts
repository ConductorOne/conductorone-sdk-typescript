/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1AppResourceTypeServiceGetRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class C1ApiAppV1AppResourceTypeServiceGetResponse extends SpeakeasyBase {
    /**
     * The AppResourceTypeServiceGetResponse contains an expanded array containing the expanded values indicated by the expand mask
     *
     * @remarks
     *  in the request and an app resource type view containing the resource type and JSONPATHs indicating which objects are where in the expand mask.
     */
    @SpeakeasyMetadata()
    appResourceTypeServiceGetResponse?: shared.AppResourceTypeServiceGetResponse;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}