/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiIamV1RolesListRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
    pageToken?: string;
}

export class C1ApiIamV1RolesListResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     *  The ListRolesResponse message contains a list of results and a nextPageToken if applicable.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    listRolesResponse?: shared.ListRolesResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
