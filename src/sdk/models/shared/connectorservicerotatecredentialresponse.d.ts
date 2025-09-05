import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import { ConnectorCredential, ConnectorCredential$Outbound } from "./connectorcredential.js";
/**
 * ConnectorServiceRotateCredentialResponse is the response returned by the rotate method.
 */
export type ConnectorServiceRotateCredentialResponse = {
    credential?: ConnectorCredential | null | undefined;
};
/** @internal */
export declare const ConnectorServiceRotateCredentialResponse$inboundSchema: z.ZodType<ConnectorServiceRotateCredentialResponse, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceRotateCredentialResponse$Outbound = {
    credential?: ConnectorCredential$Outbound | null | undefined;
};
/** @internal */
export declare const ConnectorServiceRotateCredentialResponse$outboundSchema: z.ZodType<ConnectorServiceRotateCredentialResponse$Outbound, z.ZodTypeDef, ConnectorServiceRotateCredentialResponse>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceRotateCredentialResponse$ {
    /** @deprecated use `ConnectorServiceRotateCredentialResponse$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceRotateCredentialResponse, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceRotateCredentialResponse$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceRotateCredentialResponse$Outbound, z.ZodTypeDef, ConnectorServiceRotateCredentialResponse>;
    /** @deprecated use `ConnectorServiceRotateCredentialResponse$Outbound` instead. */
    type Outbound = ConnectorServiceRotateCredentialResponse$Outbound;
}
export declare function connectorServiceRotateCredentialResponseToJSON(connectorServiceRotateCredentialResponse: ConnectorServiceRotateCredentialResponse): string;
export declare function connectorServiceRotateCredentialResponseFromJSON(jsonString: string): SafeParseResult<ConnectorServiceRotateCredentialResponse, SDKValidationError>;
