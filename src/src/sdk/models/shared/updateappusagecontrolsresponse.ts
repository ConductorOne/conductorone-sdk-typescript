/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppUsageControls } from "./appusagecontrols";
import { Expose, Type } from "class-transformer";

/**
 * The UpdateAppUsageControlsResponse message.
 */
export class UpdateAppUsageControlsResponse extends SpeakeasyBase {
    /**
     *  The AppUsageControls object describes some peripheral configuration for an app.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUsageControls" })
    @Type(() => AppUsageControls)
    appUsageControls?: AppUsageControls;
}