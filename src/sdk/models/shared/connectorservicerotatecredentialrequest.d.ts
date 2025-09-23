import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * ConnectorServiceRotateCredentialRequest is a request for rotating connector credentials. It uses URL values for input.
 */
export type ConnectorServiceRotateCredentialRequest = {
    /**
     * The appId of the app the connector is attached to.
     */
    appId?: string | null | undefined;
    /**
     * The connectorId of the connector that we are rotating the credentials for.
     */
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceRotateCredentialRequest$inboundSchema: z.ZodType<ConnectorServiceRotateCredentialRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceRotateCredentialRequest$Outbound = {
    appId?: string | null | undefined;
    connectorId?: string | null | undefined;
};
/** @internal */
export declare const ConnectorServiceRotateCredentialRequest$outboundSchema: z.ZodType<ConnectorServiceRotateCredentialRequest$Outbound, z.ZodTypeDef, ConnectorServiceRotateCredentialRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceRotateCredentialRequest$ {
    /** @deprecated use `ConnectorServiceRotateCredentialRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceRotateCredentialRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceRotateCredentialRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceRotateCredentialRequest$Outbound, z.ZodTypeDef, ConnectorServiceRotateCredentialRequest>;
    /** @deprecated use `ConnectorServiceRotateCredentialRequest$Outbound` instead. */
    type Outbound = ConnectorServiceRotateCredentialRequest$Outbound;
}
export declare function connectorServiceRotateCredentialRequestToJSON(connectorServiceRotateCredentialRequest: ConnectorServiceRotateCredentialRequest): string;
export declare function connectorServiceRotateCredentialRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceRotateCredentialRequest, SDKValidationError>;
