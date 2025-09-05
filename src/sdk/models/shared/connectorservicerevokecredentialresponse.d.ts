import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * Empty response body. Status code indicates success.
 */
export type ConnectorServiceRevokeCredentialResponse = {};
/** @internal */
export declare const ConnectorServiceRevokeCredentialResponse$inboundSchema: z.ZodType<ConnectorServiceRevokeCredentialResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceRevokeCredentialResponse$Outbound = {};
/** @internal */
export declare const ConnectorServiceRevokeCredentialResponse$outboundSchema: z.ZodType<ConnectorServiceRevokeCredentialResponse$Outbound, z.ZodTypeDef, ConnectorServiceRevokeCredentialResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceRevokeCredentialResponse$ {
    /** @deprecated use `ConnectorServiceRevokeCredentialResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceRevokeCredentialResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceRevokeCredentialResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceRevokeCredentialResponse$Outbound, z.ZodTypeDef, ConnectorServiceRevokeCredentialResponse>;
    /** @deprecated use `ConnectorServiceRevokeCredentialResponse$Outbound` instead. */
    type Outbound = ConnectorServiceRevokeCredentialResponse$Outbound;
}
export declare function connectorServiceRevokeCredentialResponseToJSON(connectorServiceRevokeCredentialResponse: ConnectorServiceRevokeCredentialResponse): string;
export declare function connectorServiceRevokeCredentialResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceRevokeCredentialResponse, SDKValidationError>;
