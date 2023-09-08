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
     * The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlementView" })
    @Type(() => AppEntitlementView)
    appEntitlementView?: AppEntitlementView;

    /**
     * List of related objects
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expanded" })
    expanded?: Record<string, any>[];
}