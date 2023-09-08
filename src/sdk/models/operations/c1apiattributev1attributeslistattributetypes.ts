/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiAttributeV1AttributesListAttributeTypesRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
    pageToken?: string;
}

export class C1ApiAttributeV1AttributesListAttributeTypesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * ListAttributeTypesResponse is the response for listing attribute types.
     */
    @SpeakeasyMetadata()
    listAttributeTypesResponse?: shared.ListAttributeTypesResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
