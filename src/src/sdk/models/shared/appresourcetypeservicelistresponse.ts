/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppResourceTypeView } from "./appresourcetypeview";
import { Expose, Type } from "class-transformer";

/**
 * The AppResourceTypeServiceListResponse message contains a list of results and a nextPageToken if applicable.
 */
export class AppResourceTypeServiceListResponse extends SpeakeasyBase {
    /**
     * List of serialized related objects.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];

    /**
     * The list of results containing up to X results, where X is the page size defined in the request.
     */
    @SpeakeasyMetadata({ elemType: AppResourceTypeView })
    @Expose({ name: "list" })
    @Type(() => AppResourceTypeView)
    list?: AppResourceTypeView[];

    /**
     * The nextPageToken is shown for the next page if the number of results is larger than the max page size.
     *
     * @remarks
     *  The server returns one page of results and the nextPageToken until all results are retreived.
     *  To retrieve the next page, use the same request and append a pageToken field with the value of nextPageToken shown on the previous page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;
}
