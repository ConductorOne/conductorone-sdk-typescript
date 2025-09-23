import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorCredential, ConnectorCredential$Outbound } from "./connectorcredential.js";
/**
 * ConnectorServiceGetCredentialsResponse is the response returned by the get method.
 */
export type ConnectorServiceGetCredentialsResponse = {
    credential?: ConnectorCredential | null | undefined;
};
/** @internal */
export declare const ConnectorServiceGetCredentialsResponse$inboundSchema: z.ZodType<ConnectorServiceGetCredentialsResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceGetCredentialsResponse$Outbound = {
    credential?: ConnectorCredential$Outbound | null | undefined;
};
/** @internal */
export declare const ConnectorServiceGetCredentialsResponse$outboundSchema: z.ZodType<ConnectorServiceGetCredentialsResponse$Outbound, z.ZodTypeDef, ConnectorServiceGetCredentialsResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceGetCredentialsResponse$ {
    /** @deprecated use `ConnectorServiceGetCredentialsResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceGetCredentialsResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceGetCredentialsResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceGetCredentialsResponse$Outbound, z.ZodTypeDef, ConnectorServiceGetCredentialsResponse>;
    /** @deprecated use `ConnectorServiceGetCredentialsResponse$Outbound` instead. */
    type Outbound = ConnectorServiceGetCredentialsResponse$Outbound;
}
export declare function connectorServiceGetCredentialsResponseToJSON(connectorServiceGetCredentialsResponse: ConnectorServiceGetCredentialsResponse): string;
export declare function connectorServiceGetCredentialsResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceGetCredentialsResponse, SDKValidationError>;
