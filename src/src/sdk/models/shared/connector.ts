/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConnectorStatus } from "./connectorstatus";
import { OAuth2AuthorizedAs } from "./oauth2authorizedas";
import { OAuth2AuthorizedAs1 } from "./oauth2authorizedas1";
import { Expose, Transform, Type } from "class-transformer";

/**
 *  A Connector is used to sync objects into Apps
 *
 * @remarks
 *
 */
export class ConnectorInput extends SpeakeasyBase {
    /**
     *  The status field on the connector is used to track the status of the connectors sync, and when syncing last started, completed, or caused the connector to update.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => ConnectorStatus)
    connectorStatus?: ConnectorStatus;

    /**
     *  OAuth2AuthorizedAs tracks the user that OAuthed with the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauthAuthorizedAs" })
    @Type(() => OAuth2AuthorizedAs1)
    oAuth2AuthorizedAs?: OAuth2AuthorizedAs1;

    /**
     *  The id of the app the connector is associated with.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config?: Record<string, any>;

    /**
     *  The description of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     *  The display name of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     *  The id of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     *  The userIds field is used to define the integration owners of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}

/**
 *  A Connector is used to sync objects into Apps
 *
 * @remarks
 *
 */
export class Connector extends SpeakeasyBase {
    /**
     *  The status field on the connector is used to track the status of the connectors sync, and when syncing last started, completed, or caused the connector to update.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    @Type(() => ConnectorStatus)
    connectorStatus?: ConnectorStatus;

    /**
     *  OAuth2AuthorizedAs tracks the user that OAuthed with the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "oauthAuthorizedAs" })
    @Type(() => OAuth2AuthorizedAs)
    oAuth2AuthorizedAs?: OAuth2AuthorizedAs;

    /**
     *  The id of the app the connector is associated with.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     *  The catalogId describes which catalog entry this connector is an instance of. For example, every Okta connector will have the same catalogId indicating it is an Okta connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "catalogId" })
    catalogId?: string;

    /**
     * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "config" })
    config?: Record<string, any>;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     *  The description of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     *  The display name of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    /**
     *  The downloadUrl for a spreadsheet if the connector was created from uploading a file.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "downloadUrl" })
    downloadUrl?: string;

    /**
     *  The id of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     *  The userIds field is used to define the integration owners of the connector.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userIds" })
    userIds?: string[];
}
