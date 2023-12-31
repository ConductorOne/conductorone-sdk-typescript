/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FacetCategory } from "./facetcategory";
import { Expose, Type } from "class-transformer";

/**
 * Indicates one value of a facet.
 */
export class Facets extends SpeakeasyBase {
    /**
     * The count of items in this facet.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: string;

    /**
     * The facet being referenced.
     */
    @SpeakeasyMetadata({ elemType: FacetCategory })
    @Expose({ name: "facets" })
    @Type(() => FacetCategory)
    facets?: FacetCategory[];
}
