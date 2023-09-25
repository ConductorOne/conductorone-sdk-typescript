/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The fields to be included in the directory response.
 */
export class DirectoryExpandMask extends SpeakeasyBase {
    /**
     * An array of fields to be included in the directory response.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paths" })
    paths?: string[];
}
