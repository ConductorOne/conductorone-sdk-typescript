/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The ConnectorExpandMask is used to expand related objects on a connector.
 */
export class ConnectorExpandMask extends SpeakeasyBase {
    /**
     * Paths that you want expanded in the response. Possible values are "app_id" and "*".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "paths" })
    paths?: string[];
}
