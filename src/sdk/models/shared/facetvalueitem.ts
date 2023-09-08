/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { FacetValue } from "./facetvalue";
import { Expose, Type } from "class-transformer";

/**
 * The FacetValueItem message.
 */
export class FacetValueItem extends SpeakeasyBase {
    /**
     * An array of facet values.
     */
    @SpeakeasyMetadata({ elemType: FacetValue })
    @Expose({ name: "values" })
    @Type(() => FacetValue)
    values?: FacetValue[];
}