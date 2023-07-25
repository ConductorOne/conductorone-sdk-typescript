/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementExpandMask } from "./appentitlementexpandmask";
import { Expose, Type } from "class-transformer";

/**
 *  Search app entitlements by a variety of filters.
 *
 * @remarks
 *
 */
export class AppEntitlementSearchServiceSearchRequest extends SpeakeasyBase {
    /**
     *  The app entitlement expand mask allows the user to get additonal information when getting responses containing app entitlement views.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => AppEntitlementExpandMask)
    appEntitlementExpandMask?: AppEntitlementExpandMask;

    /**
     *  Search for app entitlements that are being reviewed as part of this access review campaign.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accessReviewId" })
    accessReviewId?: string;

    /**
     *  Search for app entitlements that have this alias (exact match).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alias" })
    alias?: string;

    /**
     *  Search for app entitlements contained in any of these apps.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appIds" })
    appIds?: string[];

    /**
     *  Search for app entitlements that are granted to any of these app user ids.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appUserIds" })
    appUserIds?: string[];

    /**
     *  Search for app entitlements that are part of these compliace frameworks.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "complianceFrameworkIds" })
    complianceFrameworkIds?: string[];

    /**
     *  Exclude app entitlements from the results that are in these app IDs.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeAppIds" })
    excludeAppIds?: string[];

    /**
     *  Exclude app entitlements from the results that these app users have granted.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeAppUserIds" })
    excludeAppUserIds?: string[];

    /**
     *  Restrict results to only those who have expiring app entitlement user bindings.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "onlyGetExpiring" })
    onlyGetExpiring?: boolean;

    /**
     *  The pageSize where 10 <= pageSize <= 100.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize?: number;

    /**
     *  The pageToken field.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageToken" })
    pageToken?: string;

    /**
     *  Query the app entitlements with a fuzzy search on display name and description.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;

    /**
     *  Search for app entitlements that are for items on these resource types.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resourceTypeIds" })
    resourceTypeIds?: string[];

    /**
     *  Search for app entitlements with these risk levels.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "riskLevelIds" })
    riskLevelIds?: string[];
}