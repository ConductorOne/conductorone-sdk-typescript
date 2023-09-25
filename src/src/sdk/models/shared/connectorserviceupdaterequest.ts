/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectorInput } from "./connector";
import { ConnectorExpandMask } from "./connectorexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The ConnectorServiceUpdateRequest message contains the fields required to update a connector.
 */
export class ConnectorServiceUpdateRequestInput extends SpeakeasyBase {
    /**
     * A Connector is used to sync objects into Apps
     */
    @SpeakeasyMetadata()
    @Expose({ name: "connector" })
    @Type(() => ConnectorInput)
    connector?: ConnectorInput;

    /**
     * The ConnectorExpandMask is used to expand related objects on a connector.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => ConnectorExpandMask)
    connectorExpandMask?: ConnectorExpandMask;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}
