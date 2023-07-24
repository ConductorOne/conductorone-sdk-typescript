/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  This object references an app entitlement's ID and AppID.
 *
 * @remarks
 *
 */
export class AppEntitlementReference extends SpeakeasyBase {
    /**
     *  The ID of the Entitlement.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlementId" })
    appEntitlementId?: string;

    /**
     *  The ID of the App this entitlement belongs to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;
}