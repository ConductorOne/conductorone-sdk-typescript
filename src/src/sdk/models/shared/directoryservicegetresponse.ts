/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { DirectoryView } from "./directoryview";
import { Expose, Type } from "class-transformer";

/**
 * The Directory Service Get Response returns a directory view with a directory and JSONPATHs indicating the
 *
 * @remarks
 *  location in the expanded array that items are expanded as indicated by the expand mask in the request.
 */
export class DirectoryServiceGetResponse extends SpeakeasyBase {
    /**
     * The directory view contains a directory and an app_path which is a JSONPATH set to the location in the expand mask that the expanded app will live if requested by the expander.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "directoryView" })
    @Type(() => DirectoryView)
    directoryView?: DirectoryView;

    /**
     * List of serialized related objects.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}
