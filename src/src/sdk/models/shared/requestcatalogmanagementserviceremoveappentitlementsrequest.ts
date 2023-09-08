/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementRef } from "./appentitlementref";
import { Expose, Type } from "class-transformer";

/**
 *  The RequestCatalogManagementServiceRemoveAppEntitlementsRequest message is used to remove app entitlements from a request catalog.
 *
 * @remarks
 *
 */
export class RequestCatalogManagementServiceRemoveAppEntitlementsRequest extends SpeakeasyBase {
    /**
     *  The list of app entitlements to remove from the catalog.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementRef })
    @Expose({ name: "appEntitlements" })
    @Type(() => AppEntitlementRef)
    appEntitlements?: AppEntitlementRef[];
}