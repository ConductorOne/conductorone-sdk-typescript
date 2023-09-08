/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppUsageControls } from "./appusagecontrols";
import { Expose, Type } from "class-transformer";

/**
 * The GetAppUsageControlsResponse message contains the retrieved AppUsageControls object.
 */
export class GetAppUsageControlsResponse extends SpeakeasyBase {
    /**
     * The AppUsageControls object describes some peripheral configuration for an app.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUsageControls" })
    @Type(() => AppUsageControls)
    appUsageControls?: AppUsageControls;

    /**
     * HasUsageData is false if the access entitlement for this app has no usage data.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hasUsageData" })
    hasUsageData?: boolean;
}