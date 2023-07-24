/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAppV1AppsCreateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     *  Returns the new app's values.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    createAppResponse?: shared.CreateAppResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
