/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ProvisionPolicy } from "./provisionpolicy";
import { ProvisionTarget } from "./provisiontarget";
import { Expose, Type } from "class-transformer";

/**
 * The provision step references a provision policy for this step.
 */
export class Provision extends SpeakeasyBase {
    /**
     * ProvisionPolicy is a oneOf that indicates how a provision step should be processed.
     *
     * @remarks
     *
     * This message contains a oneof named typ. Only a single field of the following list may be set at a time:
     *   - connector
     *   - manual
     *   - delegated
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provisionPolicy" })
    @Type(() => ProvisionPolicy)
    provisionPolicy?: ProvisionPolicy;

    /**
     * ProvisionTarget indicates the specific app, app entitlement, and if known, the app user and grant duration of this provision step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "provisionTarget" })
    @Type(() => ProvisionTarget)
    provisionTarget?: ProvisionTarget;

    /**
     * A field indicating whether this step is assigned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assigned" })
    assigned?: boolean;
}
