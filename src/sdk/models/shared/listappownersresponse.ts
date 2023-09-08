/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { User } from "./user";
import { Expose, Type } from "class-transformer";

/**
 * The ListAppOwnersResponse message.
 */
export class ListAppOwnersResponse extends SpeakeasyBase {
    /**
     * The list of results containing up to X results, where X is the page size defined in the request
     */
    @SpeakeasyMetadata({ elemType: User })
    @Expose({ name: "list" })
    @Type(() => User)
    list?: User[];

    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;
}
