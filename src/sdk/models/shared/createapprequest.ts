/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The CreateAppRequest message.
 */
export class CreateAppRequest extends SpeakeasyBase {
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

    /**
     * The grantPolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "grantPolicyId" })
    grantPolicyId?: string;

    /**
     * The monthlyCostUsd field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "monthlyCostUsd" })
    monthlyCostUsd?: number;

    /**
     * The owners field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "owners" })
    owners?: string[];

    /**
     * The revokePolicyId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "revokePolicyId" })
    revokePolicyId?: string;
}
