/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementView } from "./appentitlementview";
import { Expose, Type } from "class-transformer";

/**
 *  The UpdateAppEntitlementResponse message contains the updated app entitlement view.
 *
 * @remarks
 *
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
     *  List of serialized related objects
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}