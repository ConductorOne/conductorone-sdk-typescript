/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementReference } from "./appentitlementreference";
import { Expose, Transform, Type } from "class-transformer";

/**
 * The CompletedAction message.
 */
export class CompletedAction extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "completedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    completedAt?: Date;

    /**
     * The entitlements field.
     */
    @SpeakeasyMetadata({ elemType: AppEntitlementReference })
    @Expose({ name: "entitlements" })
    @Type(() => AppEntitlementReference)
    entitlements?: AppEntitlementReference[];

    /**
     * The userId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}