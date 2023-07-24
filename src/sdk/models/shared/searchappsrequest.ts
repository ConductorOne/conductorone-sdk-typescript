/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The SearchAppsRequest message.
 */
export class SearchAppsRequest extends SpeakeasyBase {
    /**
     * The appIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appIds" })
    appIds?: string[];

    /**
     * The displayName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     * The excludeAppIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeAppIds" })
    excludeAppIds?: string[];

    /**
     * The pageSize field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize?: number;

    /**
     * The pageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageToken" })
    pageToken?: string;

    /**
     * The query field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;
}
