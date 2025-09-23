import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * ConnectorServiceRevokeCredentialRequest is a request for revoking connector credentials. It uses URL values for input.
 */
export type ConnectorServiceRevokeCredentialRequest = {};
/** @internal */
export declare const ConnectorServiceRevokeCredentialRequest$inboundSchema: z.ZodType<ConnectorServiceRevokeCredentialRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceRevokeCredentialRequest$Outbound = {};
/** @internal */
export declare const ConnectorServiceRevokeCredentialRequest$outboundSchema: z.ZodType<ConnectorServiceRevokeCredentialRequest$Outbound, z.ZodTypeDef, ConnectorServiceRevokeCredentialRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceRevokeCredentialRequest$ {
    /** @deprecated use `ConnectorServiceRevokeCredentialRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceRevokeCredentialRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceRevokeCredentialRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceRevokeCredentialRequest$Outbound, z.ZodTypeDef, ConnectorServiceRevokeCredentialRequest>;
    /** @deprecated use `ConnectorServiceRevokeCredentialRequest$Outbound` instead. */
    type Outbound = ConnectorServiceRevokeCredentialRequest$Outbound;
}
export declare function connectorServiceRevokeCredentialRequestToJSON(connectorServiceRevokeCredentialRequest: ConnectorServiceRevokeCredentialRequest): string;
export declare function connectorServiceRevokeCredentialRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceRevokeCredentialRequest, SDKValidationError>;
