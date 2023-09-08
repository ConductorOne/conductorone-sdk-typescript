/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlement } from "./appentitlement";
import { Expose, Type } from "class-transformer";

/**
 * The app entitlement view contains the serialized app entitlement and paths to objects referenced by the app entitlement.
 */
export class AppEntitlementView extends SpeakeasyBase {
    /**
     * The app entitlement represents one permission in a downstream App (SAAS) that can be granted. For example, GitHub Read vs GitHub Write.
     *
     * @remarks
     *
     * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
     *   - durationUnset
     *   - durationGrant
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appEntitlement" })
    @Type(() => AppEntitlement)
    appEntitlement?: AppEntitlement;

    /**
     * JSONPATH expression indicating the location of the App object in the  array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appPath" })
    appPath?: string;

    /**
     * JSONPATH expression indicating the location of the App Resource Type object in the expanded array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appResourcePath" })
    appResourcePath?: string;

    /**
     * JSONPATH expression indicating the location of the App Resource object in the  array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appResourceTypePath" })
    appResourceTypePath?: string;
}