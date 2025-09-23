import * as z from "zod";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
/**
 * ConnectorServiceDeleteRequest is a request for deleting a connector. It uses URL values for input.
 */
export type ConnectorServiceDeleteRequest = {};
/** @internal */
export declare const ConnectorServiceDeleteRequest$inboundSchema: z.ZodType<ConnectorServiceDeleteRequest, z.ZodTypeDef, unknown>;
/** @internal */
export type ConnectorServiceDeleteRequest$Outbound = {};
/** @internal */
export declare const ConnectorServiceDeleteRequest$outboundSchema: z.ZodType<ConnectorServiceDeleteRequest$Outbound, z.ZodTypeDef, ConnectorServiceDeleteRequest>;
/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export declare namespace ConnectorServiceDeleteRequest$ {
    /** @deprecated use `ConnectorServiceDeleteRequest$inboundSchema` instead. */
    const inboundSchema: z.ZodType<ConnectorServiceDeleteRequest, z.ZodTypeDef, unknown>;
    /** @deprecated use `ConnectorServiceDeleteRequest$outboundSchema` instead. */
    const outboundSchema: z.ZodType<ConnectorServiceDeleteRequest$Outbound, z.ZodTypeDef, ConnectorServiceDeleteRequest>;
    /** @deprecated use `ConnectorServiceDeleteRequest$Outbound` instead. */
    type Outbound = ConnectorServiceDeleteRequest$Outbound;
}
export declare function connectorServiceDeleteRequestToJSON(connectorServiceDeleteRequest: ConnectorServiceDeleteRequest): string;
export declare function connectorServiceDeleteRequestFromJSON(jsonString: string): SafeParseResult<ConnectorServiceDeleteRequest, SDKValidationError>;
