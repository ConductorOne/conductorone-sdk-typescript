/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Search for app resources based on some filters.
 */
export class SearchAppResourceTypesRequest extends SpeakeasyBase {
    /**
     * A list of app IDs to restrict the search by.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appIds" })
    appIds?: string[];

    /**
     * A list of resource type IDs to exclude from the search.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeResourceTypeIds" })
    excludeResourceTypeIds?: string[];

    /**
     * A list of resource type trait IDs to exclude from the search.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeResourceTypeTraitIds" })
    excludeResourceTypeTraitIds?: string[];

    /**
     * The pageSize where 10 <= pageSize <= 100, default 25.
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
     * Fuzzy search the display name of resource types.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;

    /**
     * A list of resource type IDs to restrict the search by.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resourceTypeIds" })
    resourceTypeIds?: string[];

    /**
     * A list of resource type trait IDs to restrict the search by.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resourceTypeTraitIds" })
    resourceTypeTraitIds?: string[];
}
