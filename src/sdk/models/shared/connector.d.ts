import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorStatus, ConnectorStatus$Outbound } from "./connectorstatus.js";
import { OAuth2AuthorizedAs, OAuth2AuthorizedAs$Outbound } from "./oauth2authorizedas.js";
import { OAuth2AuthorizedAsInput, OAuth2AuthorizedAsInput$Outbound } from "./oauth2authorizedasinput.js";
/**
 * Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.
 */
export type Config = {
    /**
     * The type of the serialized message.
     */
    atType?: string | undefined;
    additionalProperties?: {
        [k: string]: any;
    };
};
/**
 * A Connector is used to sync objects into Apps
 */
export type Connector = {
    /**
     * The id of the app the connector is associated with.
     */
    appId?: string | null | undefined;
    /**
     * The canResumeSync field.
     */
    canResumeSync?: boolean | null | undefined;
    /**
     * The catalogId describes which catalog entry this connector is an instance of. For example, every Okta connector will have the same catalogId indicating it is an Okta connector.
     */
    catalogId?: string | null | undefined;
    config?: Config | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the connector.
     */
    description?: string | null | undefined;
    /**
     * The disableCheckBadSync field.
     */
    disableCheckBadSync?: boolean | null | undefined;
    /**
     * The display name of the connector.
     */
    displayName?: string | null | undefined;
    /**
     * The downloadUrl for a spreadsheet if the connector was created from uploading a file.
     */
    downloadUrl?: string | null | undefined;
    /**
     * The id of the connector.
     */
    id?: string | null | undefined;
    oauthAuthorizedAs?: OAuth2AuthorizedAs | null | undefined;
    /**
     * List of profile attributes to sync, when set only these attributes will be synced
     */
    profileAllowList?: Array<string> | null | undefined;
    /**
     * List of profile attributes to ignore (not sync), when set other attributes will be synced, but these will not.
     */
    profileIgnoreList?: Array<string> | null | undefined;
    status?: ConnectorStatus | null | undefined;
    syncDisabledAt?: Date | null | undefined;
    /**
     * The category of the connector sync that was disabled.
     */
    syncDisabledCategory?: string | null | undefined;
    /**
     * The reason the connector sync was disabled.
     */
    syncDisabledReason?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The userIds field is used to define the integration owners of the connector.
     */
    userIds?: Array<string> | null | undefined;
};
/**
 * A Connector is used to sync objects into Apps
 */
export type ConnectorInput = {
    /**
     * The id of the app the connector is associated with.
     */
    appId?: string | null | undefined;
    /**
     * The canResumeSync field.
     */
    canResumeSync?: boolean | null | undefined;
    /**
     * The catalogId describes which catalog entry this connector is an instance of. For example, every Okta connector will have the same catalogId indicating it is an Okta connector.
     */
    catalogId?: string | null | undefined;
    config?: Config | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The description of the connector.
     */
    description?: string | null | undefined;
    /**
     * The disableCheckBadSync field.
     */
    disableCheckBadSync?: boolean | null | undefined;
    /**
     * The display name of the connector.
     */
    displayName?: string | null | undefined;
    /**
     * The id of the connector.
     */
    id?: string | null | undefined;
    oauthAuthorizedAs?: OAuth2AuthorizedAsInput | null | undefined;
    /**
     * List of profile attributes to sync, when set only these attributes will be synced
     */
    profileAllowList?: Array<string> | null | undefined;
    /**
     * List of profile attributes to ignore (not sync), when set other attributes will be synced, but these will not.
     */
    profileIgnoreList?: Array<string> | null | undefined;
    status?: ConnectorStatus | null | undefined;
    syncDisabledAt?: Date | null | undefined;
    /**
     * The category of the connector sync that was disabled.
     */
    syncDisabledCategory?: string | null | undefined;
    /**
     * The reason the connector sync was disabled.
     */
    syncDisabledReason?: string | null | undefined;
    updatedAt?: Date | null | undefined;
    /**
     * The userIds field is used to define the integration owners of the connector.
     */
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const Config$inboundSchema: z.ZodType<Config, z.ZodTypeDef, unknown>;
/** @internal */
export type Config$Outbound = {
    "@type"?: string | undefined;
    [additionalProperties: string]: unknown;
};
/** @internal */
export declare const Config$outboundSchema: z.ZodType<Config$Outbound, z.ZodTypeDef, Config>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Config$ {
    /** @deprecated use `Config$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Config, z.ZodTypeDef, unknown>;
    /** @deprecated use `Config$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Config$Outbound, z.ZodTypeDef, Config>;
    /** @deprecated use `Config$Outbound` instead. */
    type Outbound = Config$Outbound;
}
export declare function configToJSON(config: Config): string;
export declare function configFromJSON(jsonString: string): SafeParseResult<Config, SDKValidationError>;
/** @internal */
export declare const Connector$inboundSchema: z.ZodType<Connector, z.ZodTypeDef, unknown>;
/** @internal */
export type Connector$Outbound = {
    appId?: string | null | undefined;
    canResumeSync?: boolean | null | undefined;
    catalogId?: string | null | undefined;
    config?: Config$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    disableCheckBadSync?: boolean | null | undefined;
    displayName?: string | null | undefined;
    downloadUrl?: string | null | undefined;
    id?: string | null | undefined;
    oauthAuthorizedAs?: OAuth2AuthorizedAs$Outbound | null | undefined;
    profileAllowList?: Array<string> | null | undefined;
    profileIgnoreList?: Array<string> | null | undefined;
    status?: ConnectorStatus$Outbound | null | undefined;
    syncDisabledAt?: string | null | undefined;
    syncDisabledCategory?: string | null | undefined;
    syncDisabledReason?: string | null | undefined;
    updatedAt?: string | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const Connector$outboundSchema: z.ZodType<Connector$Outbound, z.ZodTypeDef, Connector>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace Connector$ {
    /** @deprecated use `Connector$inboundSchema` instead. */
    const inboundSchema: z.ZodType<Connector, z.ZodTypeDef, unknown>;
    /** @deprecated use `Connector$outboundSchema` instead. */
    const outboundSchema: z.ZodType<Connector$Outbound, z.ZodTypeDef, Connector>;
    /** @deprecated use `Connector$Outbound` instead. */
    type Outbound = Connector$Outbound;
}
export declare function connectorToJSON(connector: Connector): string;
export declare function connectorFromJSON(jsonString: string): SafeParseResult<Connector, SDKValidationError>;
/** @internal */
export declare const ConnectorInput$inboundSchema: z.ZodType<ConnectorInput, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorInput$Outbound = {
    appId?: string | null | undefined;
    canResumeSync?: boolean | null | undefined;
    catalogId?: string | null | undefined;
    config?: Config$Outbound | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    description?: string | null | undefined;
    disableCheckBadSync?: boolean | null | undefined;
    displayName?: string | null | undefined;
    id?: string | null | undefined;
    oauthAuthorizedAs?: OAuth2AuthorizedAsInput$Outbound | null | undefined;
    profileAllowList?: Array<string> | null | undefined;
    profileIgnoreList?: Array<string> | null | undefined;
    status?: ConnectorStatus$Outbound | null | undefined;
    syncDisabledAt?: string | null | undefined;
    syncDisabledCategory?: string | null | undefined;
    syncDisabledReason?: string | null | undefined;
    updatedAt?: string | null | undefined;
    userIds?: Array<string> | null | undefined;
};
/** @internal */
export declare const ConnectorInput$outboundSchema: z.ZodType<ConnectorInput$Outbound, z.ZodTypeDef, ConnectorInput>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorInput$ {
    /** @deprecated use `ConnectorInput$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorInput, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorInput$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorInput$Outbound, z.ZodTypeDef, ConnectorInput>;
    /** @deprecated use `ConnectorInput$Outbound` instead. */
    type Outbound = ConnectorInput$Outbound;
}
export declare function connectorInputToJSON(connectorInput: ConnectorInput): string;
export declare function connectorInputFromJSON(jsonString: string): SafeParseResult<ConnectorInput, SDKValidationError>;
