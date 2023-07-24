/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The App message.
 */
export class App extends SpeakeasyBase {
    /**
     * The appAccountId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appAccountId" })
    appAccountId?: string;

    /**
     * The appAccountName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appAccountName" })
    appAccountName?: string;

    /**
     * The certifyPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certifyPolicyId" })
    certifyPolicyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * The description field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The displayName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fieldMask" })
    fieldMask?: string;

    /**
     * The grantPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantPolicyId" })
    grantPolicyId?: string;

    /**
     * The iconUrl field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iconUrl" })
    iconUrl?: string;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The logoUri field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logoUri" })
    logoUri?: string;

    /**
     * The monthlyCostUsd field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "monthlyCostUsd" })
    monthlyCostUsd?: number;

    /**
     * The parentAppId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentAppId" })
    parentAppId?: string;

    /**
     * The revokePolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revokePolicyId" })
    revokePolicyId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The userCount field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userCount" })
    userCount?: string;
}

/**
 * The App message.
 */
export class AppInput extends SpeakeasyBase {
    /**
     * The appAccountId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appAccountId" })
    appAccountId?: string;

    /**
     * The appAccountName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appAccountName" })
    appAccountName?: string;

    /**
     * The certifyPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "certifyPolicyId" })
    certifyPolicyId?: string;

    /**
     * The description field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * The displayName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "fieldMask" })
    fieldMask?: string;

    /**
     * The grantPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantPolicyId" })
    grantPolicyId?: string;

    /**
     * The iconUrl field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "iconUrl" })
    iconUrl?: string;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The logoUri field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "logoUri" })
    logoUri?: string;

    /**
     * The monthlyCostUsd field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "monthlyCostUsd" })
    monthlyCostUsd?: number;

    /**
     * The parentAppId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentAppId" })
    parentAppId?: string;

    /**
     * The revokePolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revokePolicyId" })
    revokePolicyId?: string;

    /**
     * The userCount field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userCount" })
    userCount?: string;
}
