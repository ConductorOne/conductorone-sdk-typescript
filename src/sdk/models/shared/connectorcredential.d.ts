import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * ConnectorCredential is used by a connector to authenticate with conductor one.
 */
export type ConnectorCredential = {
    /**
     * The appId of the app the connector is attached to.
     */
    appId?: string | null | undefined;
    /**
     * The client id of the ConnectorCredential.
     */
    clientId?: string | null | undefined;
    /**
     * The client secret of the ConnectorCredential. It's only returned on creation.
     */
    clientSecret?: string | null | undefined;
    /**
     * The connectorId of the connector the credential is associated with.
     */
    connectorId?: string | null | undefined;
    createdAt?: Date | null | undefined;
    deletedAt?: Date | null | undefined;
    /**
     * The display name of the ConnectorCredential.
     */
    displayName?: string | null | undefined;
    expiresTime?: Date | null | undefined;
    /**
     * The id of the ConnectorCredential.
     */
    id?: string | null | undefined;
    lastUsedAt?: Date | null | undefined;
    updatedAt?: Date | null | undefined;
};
/** @internal */
export declare const ConnectorCredential$inboundSchema: z.ZodType<ConnectorCredential, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorCredential$Outbound = {
    appId?: string | null | undefined;
    clientId?: string | null | undefined;
    clientSecret?: string | null | undefined;
    connectorId?: string | null | undefined;
    createdAt?: string | null | undefined;
    deletedAt?: string | null | undefined;
    displayName?: string | null | undefined;
    expiresTime?: string | null | undefined;
    id?: string | null | undefined;
    lastUsedAt?: string | null | undefined;
    updatedAt?: string | null | undefined;
};
/** @internal */
export declare const ConnectorCredential$outboundSchema: z.ZodType<ConnectorCredential$Outbound, z.ZodTypeDef, ConnectorCredential>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorCredential$ {
    /** @deprecated use `ConnectorCredential$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorCredential, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorCredential$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorCredential$Outbound, z.ZodTypeDef, ConnectorCredential>;
    /** @deprecated use `ConnectorCredential$Outbound` instead. */
    type Outbound = ConnectorCredential$Outbound;
}
export declare function connectorCredentialToJSON(connectorCredential: ConnectorCredential): string;
export declare function connectorCredentialFromJSON(jsonString: string): SafeParseResult<ConnectorCredential, SDKValidationError>;
