/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppUsageControls } from "./appusagecontrols";
import { Expose, Type } from "class-transformer";

/**
 * The UpdateAppUsageControlsResponse message contains the updated AppUsageControls object.
 */
export class UpdateAppUsageControlsResponse extends SpeakeasyBase {
    /**
     * The AppUsageControls object describes some peripheral configuration for an app.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUsageControls" })
    @Type(() => AppUsageControls)
    appUsageControls?: AppUsageControls;
}