/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppGroup } from "./appgroup";
import { Expose, Type } from "class-transformer";

/**
 *  The ListAppEntitlementGroupsResponse message contains a list of results and a nextPageToken if applicable.
 *
 * @remarks
 *
 */
export class ListAppEntitlementGroupsResponse extends SpeakeasyBase {
    /**
     *  The list of results containing up to X results, where X is the page size defined in the request.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: AppGroup })
    @Expose({ name: "list" })
    @Type(() => AppGroup)
    list?: AppGroup[];

    /**
     *  The nextPageToken is shown for the next page if the number of results is larger than the max page size. The server returns one page of results and the nextPageToken until all results are retreived. To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;

    /**
     *  Deprecated
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationToken" })
    notificationToken?: string;
}
