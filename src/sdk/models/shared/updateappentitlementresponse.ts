/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementView } from "./appentitlementview";
import { Expose, Type } from "class-transformer";

/**
 * The UpdateAppEntitlementResponse message.
 */
export class UpdateAppEntitlementResponse extends SpeakeasyBase {
    /**
     * The AppEntitlementView message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlementView" })
    @Type(() => AppEntitlementView)
    appEntitlementView?: AppEntitlementView;

    /**
     * The expanded field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}